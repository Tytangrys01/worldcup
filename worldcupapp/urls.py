from django.urls import path
from worldcupapp import views


urlpatterns = [
    path('', views.home),
    path('about', views.about),
    path('project', views.project),
    path('contact', views.contact),
    path('student', views.students)
]