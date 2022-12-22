from django.urls import path
from projects import views

from .views import ProjectDetailView

app_name = 'projects'

urlpatterns = [
    path('', views.all_projects, name='all_projects'),
    path('projects/<int:pk>', ProjectDetailView.as_view(), name='ProjectDetailView'),
    path('about_me', views.about_me, name='about_me'),
    path('home', views.home, name='home'),
]
