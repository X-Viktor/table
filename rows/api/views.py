from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView

from rows.api.serializers import RowSerializer
from rows.filters import RowFilter
from rows.models import Row


class RowListView(ListAPIView):
    """Получаем список строк."""
    queryset = Row.objects.all()
    serializer_class = RowSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_class = RowFilter


def index(request):
    return render(request, 'index.html')
