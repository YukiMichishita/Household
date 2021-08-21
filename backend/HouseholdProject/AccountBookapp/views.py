from django.shortcuts import render
from .models import IncomeCategory, IncomeSubCategory, Income, SpendingCategory, SpendingSubCategory, Spending
from rest_framework import viewsets, views, status
from rest_framework.response import Response
from .serializers import IncomeCategorySerializer, IncomeSubCategorySerializer, IncomeSerializer, IncomePerCategoryViewSerializer, IncomePerMonthViewSerializer, SpendingCategorySerializer, SpendingSubCategorySerializer, SpendingSerializer, UserSerializer, SpendingPerMonthViewSerializer, SpendingPerCategoryViewSerializer
from django_filters import rest_framework as filters
from django.shortcuts import redirect
from django_auth0 import views as auth0
import datetime
import calendar


def auth_callback(request):

    html = auth0.auth_callback(request)

    if html.status_code == 400:
        return redirect('accounts:login')

    return html


# user:Auth0のユーザーID, yearMonth:yyyy-mm形式
def getExpensesPerMonth(user, year_month, queryset, target_serializer):
    # 'yyyy-MM形式で受け取った年月を分割'
    year = year_month[:4]
    month = year_month[5:]
    amounts = {}
    details = {}

    # 引数の年月と一致するデータのみ、カテゴリごとに集計
    # 書き方がわかったらDjangoのModel操作でやろう
    for obj in queryset:
        if obj.user != user or obj.account_date.year != int(
                year) or obj.account_date.month != int(month):
            continue
        if obj.category not in amounts.keys():
            amounts[obj.category] = obj.amount
            details[obj.category] = [obj]
        else:
            amounts[obj.category] += obj.amount
            details[obj.category].append(obj)

    serializers = []
    for key in amounts.keys():
        serializer = target_serializer()
        serializer.account_month = month
        serializer.amount = amounts[key]
        serializer.category = key.id
        serializer.category_name = key.name
        serializer.detail = sorted(
            details[key], key=lambda x: x.account_date)
        serializers.append(serializer)
    return_serializer = target_serializer(instance=sorted(
        serializers, key=lambda x: x.amount, reverse=True), many=True)
    return return_serializer


# カンマ区切りの複数カテゴリとサブカテゴリを受け取り、グラフ描画用の月毎の支出を返す
# 返り値は[{yyyymm:金額}, {yyyymm:金額}, ...]のリストで、金額がゼロの月を含む
def getExpensesPerCategory(
        user,
        category,
        subcategory,
        queryset,
        target_serializer):

    amounts = {}
    categories = category.split(',')

    # 引数のカテゴリと一致するデータのみ、月ごとに集計
    # 書き方がわかったらDjangoのModel操作でやろう
    for obj in queryset:

        if obj.user != user or str(
            obj.category.id) not in categories or (
            subcategory not in [
                '', ' ', '%20'] and not (
                obj.subcategory and str(
                obj.subcategory.id) == subcategory)):
            continue

        obj_year_month = str(obj.account_date.year) + \
            str(obj.account_date.month).zfill(2)

        if obj_year_month not in amounts.keys():
            amounts[obj_year_month] = obj.amount

        else:
            amounts[obj_year_month] += obj.amount

    months = [
        "{}{:02}".format(
            y,
            m) for y in range(
            int(str(min([int(ym) for ym in amounts.keys()]))[:4]),
            int(str(max([int(ym) for ym in amounts.keys()]))[:4]) + 1
        ) for m in range(
            int(str(min([int(ym) for ym in amounts.keys()]))[4:]),
            int(str(max([int(ym) for ym in amounts.keys()]))[4:]) + 1
        )]

    serializers = []
    for key in months:

        serializer = target_serializer()
        serializer.account_month = key
        if key in amounts:
            serializer.amount = amounts[key]
        else:
            serializer.amount = 0
        serializers.append(serializer)

    return_serializer = target_serializer(
        instance=sorted(serializers, key=lambda x: x.account_month), many=True)
    return return_serializer


class IncomeCategoryViewSet(viewsets.ModelViewSet):
    queryset = IncomeCategory.objects.all()
    serializer_class = IncomeCategorySerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = ['user']


class IncomeSubCategoryViewSet(viewsets.ModelViewSet):
    queryset = IncomeSubCategory.objects.all()
    serializer_class = IncomeSubCategorySerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = ['user', 'category']


class IncomeFilter(filters.FilterSet):
    id = filters.UUIDFilter(field_name='id')
    user = filters.CharFilter(field_name='user')
    account_year = filters.NumberFilter(
        field_name='account_date', lookup_expr='year')
    account_month = filters.NumberFilter(
        field_name='account_date', lookup_expr='month')
    category = filters.CharFilter(field_name='category')
    subcategory = filters.CharFilter(field_name='subcategory')


class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = IncomeFilter


class IncomePerMonthView(views.APIView):

    def get(self, request, user, year_month, *args, **kwargs):
        queryset = Income.objects.all()
        res = getExpensesPerMonth(
            user, year_month, queryset, IncomePerMonthViewSerializer)
        return Response(res.data, status.HTTP_200_OK)


class IncomePerCategoryView(views.APIView):
    def get(
            self,
            request,
            user,
            category,
            subcategory,
            *args,
            **kwargs):
        queryset = Income.objects.all()
        res = getExpensesPerCategory(
            user,
            category,
            subcategory,
            queryset,
            IncomePerCategoryViewSerializer)
        return Response(res.data, status.HTTP_200_OK)


class SpendingCategoryViewSet(viewsets.ModelViewSet):
    queryset = SpendingCategory.objects.all()
    serializer_class = SpendingCategorySerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = ['user']


class SpendingSubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SpendingSubCategory.objects.all()
    serializer_class = SpendingSubCategorySerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_fields = ['user', 'category']


class SpendingFilter(filters.FilterSet):
    id = filters.UUIDFilter(field_name='id')
    user = filters.CharFilter(field_name='user')
    account_year = filters.NumberFilter(
        field_name='account_date', lookup_expr='year')
    account_month = filters.NumberFilter(
        field_name='account_date', lookup_expr='month')
    category = filters.CharFilter(field_name='category')
    subcategory = filters.CharFilter(field_name='subcategory')


class SpendingViewSet(viewsets.ModelViewSet):
    queryset = Spending.objects.all()
    serializer_class = SpendingSerializer
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = SpendingFilter


class SpendingPerMonthView(views.APIView):

    def get(self, request, user, year_month, *args, **kwargs):
        queryset = Spending.objects.all()
        res = getExpensesPerMonth(
            user, year_month, queryset, SpendingPerMonthViewSerializer)
        return Response(res.data, status.HTTP_200_OK)


class SpendingPerCategoryView(views.APIView):
    def get(
            self,
            request,
            user,
            category,
            subcategory,
            *args,
            **kwargs):
        queryset = Spending.objects.all()
        res = getExpensesPerCategory(
            user,
            category,
            subcategory,
            queryset,
            SpendingPerCategoryViewSerializer)
        return Response(res.data, status.HTTP_200_OK)
