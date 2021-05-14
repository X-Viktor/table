from rest_framework import serializers

from rows.models import Row


class RowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Row
        fields = '__all__'
