from django.contrib import admin
from .models import IncomeCategory, IncomeSubCategory, Income, SpendingCategory, SpendingSubCategory, Spending
# Register your models here.
admin.site.register(IncomeCategory)
admin.site.register(IncomeSubCategory)
admin.site.register(Income)
admin.site.register(SpendingCategory)
admin.site.register(SpendingSubCategory)
admin.site.register(Spending)
