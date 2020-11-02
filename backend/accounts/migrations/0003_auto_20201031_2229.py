# Generated by Django 3.1.2 on 2020-10-31 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_emailuser_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailuser',
            name='username',
            field=models.CharField(db_index=True, default=None, max_length=255, unique=True, verbose_name='login'),
        ),
    ]
