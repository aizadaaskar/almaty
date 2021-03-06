# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-23 06:58
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('kudaalmaty', '0004_auto_20180423_0150'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('com_text', models.TextField(verbose_name='Текст комментария')),
                ('auth', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('com_place', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kudaalmaty.Place')),
            ],
        ),
        migrations.RemoveField(
            model_name='comments',
            name='comment_auth',
        ),
        migrations.RemoveField(
            model_name='comments',
            name='comments_place',
        ),
        migrations.DeleteModel(
            name='Comments',
        ),
    ]
