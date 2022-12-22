from http.client import HTTPResponse
from projects.models import Project
from django.shortcuts import render
from django.views.generic import DetailView

def about_me(request):
    return render(request, 'projects/about_me.html')

def all_projects(request):
    # query the db to return all project objects
    projects = Project.objects.all()
    return render(request, 'projects/all_projects.html', 
                    {'projects': projects})

class ProjectDetailView(DetailView):
    model = Project
    template_name = 'all_projects.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ProjectDetailView, self).get_context_data(*args, **kwargs)
        return context

def home(request):
    return render(request, 'projects/home.html')


