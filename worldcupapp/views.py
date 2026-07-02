from django.shortcuts import render, redirect
from django.http import HttpResponse
from worldcupapp.models import Student

# Create your views here.
def home(request):
    return render(request, "index.html")

def about(request):
    return render(request, "about.html")

def project(request):
    return render(request, "project.html")

def contact(request):
    return render(request, "contact.html")

def students(request):
    students = Student.objects.all()
    context = {"students": students, "programmer_name":"Tytan"}
    return render(request, "student.html", context) 