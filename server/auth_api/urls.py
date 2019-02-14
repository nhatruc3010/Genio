from django.urls import include, path

from . import views, api

urlpatterns = [
    path('', views.index, name='index'),
    path('register', api.register, name='register'),
    path('login', api.login, name='login')
]