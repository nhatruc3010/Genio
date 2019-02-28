from django.contrib.auth            import models
from django.contrib.postgres.fields import ArrayField, CITextField 
from django.db                      import models as db_models
from django.db.models               import CharField, BooleanField, IntegerField
import uuid

class User(models.User):
    first_name      = CharField(max_length=30, null=False)
    last_name       = CharField(max_length=30, null=False)
    is_college      = BooleanField(default=False, null=False)
    courses_taken   = ArrayField(CharField(max_length=30))
    grade_level     = IntegerField(max_length=2, editable=True, null=False)

class Tutor(User):
    rating          = IntegerField(max_length=1, default=0)
    old_rating      = IntegerField(max_length=0, default=0)
    old_count       = IntegerField(max_length=10, default=0)

class Course():
    code                = CharField(max_length=30)
    name                = CharField(max_length=30, null=False)
    institution_name    = CharField(max_length=30, null=False)

    


