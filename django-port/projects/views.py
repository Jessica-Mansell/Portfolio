from http.client import HTTPResponse
from projects.models import Project
from django.shortcuts import render


# Create your views here.
def all_projects(request):
    # query the db to return all project objects
    projects = Project.objects.all()
    return render(request, 'projects/all_projects.html', 
                    {'projects': projects})

def project_detail(request, pk):
    project = project.objects.get(pk=pk)
    return render(request, 'projects/detail.html', 
                    {'project': project})