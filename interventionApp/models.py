from django.db import models

class Intervention(models.Model):
    
    states_value = (
    ('draft','DRAFT'),
    ('validate', 'VALIDATE'),
    ('done','DOne'),
)

    label = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    place = models.CharField(max_length=50)
    date = models.DateField()
    state = models.CharField(max_length=10, choices=states_value, default='draft')