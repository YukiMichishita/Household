import uuid
from django.db import models
from django.contrib.auth.models import User

# 収入カテゴリ


class IncomeCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(verbose_name='ユーザーID', null=False, max_length=50)
    name = models.CharField(verbose_name='カテゴリ名',
                            max_length=30, null=False)
    created_at = models.DateTimeField(verbose_name='登録日時', auto_now_add=True)


# 収入サブカテゴリ


class IncomeSubCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(verbose_name='ユーザーID', null=False, max_length=50)
    category = models.ForeignKey(
        IncomeCategory,
        verbose_name='カテゴリ',
        on_delete=models.CASCADE,
        null=False,
        blank=True)
    name = models.CharField(verbose_name='サブカテゴリ名',
                            max_length=30, null=False)
    created_at = models.DateTimeField(verbose_name='登録日時', auto_now_add=True)


# 収入


class Income(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(verbose_name='ユーザーID', null=False, max_length=50)
    account_date = models.DateField(verbose_name='会計日')
    category = models.ForeignKey(
        IncomeCategory,
        verbose_name='カテゴリ',
        on_delete=models.PROTECT,
        null=False,
        blank=True)
    subcategory = models.ForeignKey(
        IncomeSubCategory,
        verbose_name='サブカテゴリ',
        on_delete=models.PROTECT,
        null=True,
    )
    amount = models.IntegerField(verbose_name='金額', null=False, blank=False,)
    comment = models.CharField(
        verbose_name='コメント', max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(verbose_name='登録日時', auto_now_add=True)

# 支出カテゴリ


class SpendingCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(verbose_name='ユーザーID', null=False, max_length=50)
    name = models.CharField(verbose_name='カテゴリ名',
                            max_length=30, null=False)
    created_at = models.DateTimeField(verbose_name='登録日時', auto_now_add=True)


# 支出サブカテゴリ


class SpendingSubCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(verbose_name='ユーザーID', null=False, max_length=50)
    category = models.ForeignKey(
        SpendingCategory,
        verbose_name='カテゴリ',
        on_delete=models.CASCADE,
        null=False,
        blank=True)
    name = models.CharField(verbose_name='サブカテゴリ名',
                            max_length=30, null=False)
    created_at = models.DateTimeField(verbose_name='登録日時', auto_now_add=True)


# 支出


class Spending(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.CharField(verbose_name='ユーザーID', null=False, max_length=50)
    account_date = models.DateField(verbose_name='会計日')
    category = models.ForeignKey(
        SpendingCategory,
        verbose_name='カテゴリ',
        on_delete=models.PROTECT,
        null=False,
        blank=True)
    subcategory = models.ForeignKey(
        SpendingSubCategory,
        verbose_name='サブカテゴリ',
        on_delete=models.PROTECT,
        null=True,
    )
    amount = models.IntegerField(verbose_name='金額', null=False, blank=False,)
    comment = models.CharField(
        verbose_name='コメント', max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(verbose_name='登録日時', auto_now_add=True)
