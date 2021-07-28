from rest_framework import serializers
from .models import IncomeCategory, IncomeSubCategory, Income, SpendingCategory, SpendingSubCategory, Spending
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = []


class IncomeCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeCategory
        exclude = ['created_at']


class IncomeSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeSubCategory
        exclude = ['created_at']


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        exclude = ['created_at']


class IncomePerMonthViewSerializer(serializers.Serializer):
    account_month = serializers.IntegerField()
    amount = serializers.IntegerField()
    category = serializers.UUIDField()
    category_name = serializers.CharField()
    detail = IncomeSerializer(many=True)


class IncomePerCategoryViewSerializer(serializers.Serializer):
    account_month = serializers.IntegerField()
    amount = serializers.IntegerField()


class SpendingCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendingCategory
        exclude = ['created_at']


class SpendingSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendingSubCategory
        exclude = ['created_at']


class SpendingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spending
        exclude = ['created_at']


class SpendingPerMonthViewSerializer(serializers.Serializer):
    account_month = serializers.IntegerField()
    amount = serializers.IntegerField()
    category = serializers.UUIDField()
    category_name = serializers.CharField()
    detail = SpendingSerializer(many=True)


class SpendingPerCategoryViewSerializer(serializers.Serializer):
    account_month = serializers.IntegerField()
    amount = serializers.IntegerField()
