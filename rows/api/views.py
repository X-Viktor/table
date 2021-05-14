from rest_framework.generics import ListAPIView

from rows.api.serializers import RowSerializer
from rows.models import Row


class RowListView(ListAPIView):
    queryset = Row.objects.all()
    serializer_class = RowSerializer
