from django.urls import path

from rows.api.views import RowListView


urlpatterns = [
    path('', RowListView.as_view(), name='rows')
]
