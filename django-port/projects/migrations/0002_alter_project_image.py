# Generated by Django 4.0.5 on 2022-10-23 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.FilePathField(path='/projects/img'),
        ),
    ]
