from django.urls import include, path

from . import views, api

urlpatterns = [
    path('', views.index, name='index'),
    path('get/books', api.get_books, name='get_books')
]