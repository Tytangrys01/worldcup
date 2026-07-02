from django.db import models

# Create your models here.


# class Student:
#     def __init__(self, first_name, last_name, role, status):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.role = role
#         self.status = status

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    i_d = models.IntegerField()
    department = models.CharField(max_length=50)
    matric_number = models.CharField(max_length=50, default="")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"