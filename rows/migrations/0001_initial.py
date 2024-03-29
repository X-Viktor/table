# Generated by Django 3.2.3 on 2021-05-14 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Row',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(verbose_name='Дата')),
                ('title', models.CharField(max_length=150, verbose_name='Название')),
                ('count', models.PositiveIntegerField(verbose_name='Количество')),
                ('distance', models.PositiveIntegerField(verbose_name='Расстояние')),
            ],
            options={
                'verbose_name': 'Строка',
                'verbose_name_plural': 'Строки',
            },
        ),
    ]
