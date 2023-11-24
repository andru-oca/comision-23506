from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Store

# Register your models here.

@admin.register(Store)
class StoreAdmin(ModelAdmin):
    ...


# -> settings del project  settings.py
