"""HouseholdProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from AccountBookapp import views
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token

router = routers.SimpleRouter()
router.register('incomecategory', views.IncomeCategoryViewSet)
router.register('incomesubcategory', views.IncomeSubCategoryViewSet)
router.register('income', views.IncomeViewSet)
router.register('spendingcategory', views.SpendingCategoryViewSet)
router.register('spendingsubcategory', views.SpendingSubCategoryViewSet)
router.register('spending', views.SpendingViewSet)

urlpatterns = [
    path(
        'api/',
        include(
            router.urls)),
    path(
        'api/spending/<user>/<year_month>',
        views.SpendingPerMonthView.as_view()),
    path(
        'api/spendingPerCategory/<user>/<category>/<subcategory>/',
        views.SpendingPerCategoryView.as_view()),
    path(
        'api/income/<user>/<year_month>',
        views.IncomePerMonthView.as_view()),
    path(
        'api/incomePerCategory/<user>/<category>/<subcategory>/',
        views.IncomePerCategoryView.as_view()),
    path(
        'admin/',
        admin.site.urls),
    path(
        '',
        include('user.urls')),
]
