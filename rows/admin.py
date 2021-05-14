from django.contrib import admin

from rows.models import Row


@admin.register(Row)
class RowAdmin(admin.ModelAdmin):
    list_display = ['id', 'date', 'title', 'count', 'distance']
