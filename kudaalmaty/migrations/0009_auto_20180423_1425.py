# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-23 08:25
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('kudaalmaty', '0008_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='auth',
            field=models.ForeignKey(default='aizada', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
