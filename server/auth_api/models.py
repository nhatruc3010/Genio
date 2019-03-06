from django.contrib.auth            import models
from django.contrib.postgres.fields import ArrayField, CITextField 
from django.db                      import models as db_models
from django.db.models               import CharField, BooleanField, IntegerField
import uuid

class Tutee(models.User):
    grade_level     = IntegerField(max_length=2, editable=True, null=False)
    address         = CharField(max_length=30, null=False, default="", editable=True)
    # credit card fields, required for tutors for predator protection
    cc_number       = IntegerField(max_length=19, editable=True, null=True)
    cc_exp_date     = CharField(max_length=5, null=True, editable=True)
    cc_holder_name  = CharField(max_length=30, editable=True, null=True)
    cc_security_code = IntegerField(max_length=3, null=True, editable=True)

class Tutor(Tutee):
    rating          = IntegerField(max_length=1, default=0)
    old_rating      = IntegerField(max_length=0, default=0)
    old_count       = IntegerField(max_length=10, default=0)
    # courses taken reference the Course model through code
    courses_taken   = ArrayField(CharField(max_length=10))

class Course():
    code                = CharField(max_length=10)
    name                = CharField(max_length=30, null=False)
    institution_name    = CharField(max_length=30, null=False)


