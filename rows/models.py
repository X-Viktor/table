from django.db import models


class Row(models.Model):
    date = models.DateField(verbose_name='Дата')
    title = models.CharField(max_length=150, verbose_name='Название')
    count = models.PositiveIntegerField(verbose_name='Количество')
    distance = models.PositiveIntegerField(verbose_name='Расстояние')

    class Meta:
        verbose_name = 'Строка'
        verbose_name_plural = 'Строки'

    def __str__(self):
        return self.title
