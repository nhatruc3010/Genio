from django.urls import include, path

from . import views, api

urlpatterns = [
    path('', views.index, name='index'),
    path('register/tutor', api.register_tutor, name='register_tutor'),
    path('register/tutee', api.register_tutee, name='register_tutee'),
    path('login', api.login, name='login')
]