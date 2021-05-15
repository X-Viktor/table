import django_filters

from rows.models import Row


class RowFilter(django_filters.FilterSet):
    """Фильтры."""

    class Meta:
        model = Row
        fields = {
            'title': ['icontains', 'iexact', 'gte', 'lte'],
            'count': ['icontains', 'iexact', 'gte', 'lte'],
            'distance': ['icontains', 'iexact', 'gte', 'lte'],
        }
