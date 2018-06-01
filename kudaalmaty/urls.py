from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$', views.places, name='places'),
	url(r'^restorans/', views.restorans, name='restorans'),
	url(r'^relax/', views.relax, name='relax'),
	url(r'^place/(?P<pk>\d+)/$', views.detail, name='detail'),
	#url(r'^place/addcomment/(?P<pk>\d+)/$', views.addcomment, name='addcomment'),
	url(r'^contacts/', views.contacts, name='contacts'),
	url(r'^register/', views.register, name= 'register'),
	url(r'^login/', views.login, name= 'login'),
	url(r'^logout/', views.logout, name= 'logout'),
	
]

