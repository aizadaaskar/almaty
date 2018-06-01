# -*- coding: utf-8 -*-	
from django.db import models
from django.utils import timezone

class Place(models.Model):
	title = models.TextField()
	text = models.TextField()
	addr = models.TextField()
	specialty = models.TextField()
	cash = models.TextField()
	schedule = models.TextField()
	place_type = models.CharField(max_length=200)
	first_photo = models.CharField(max_length=200)
	second_photo = models.CharField(max_length=200) 
	published_date = models.DateTimeField(blank=True, null=True)


	def __str__(self):
  		return self.title

def publish(self):
    self.published_date = timezone.now()
    self.save()


	


	

# Create your models here.
