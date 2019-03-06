from django.contrib.auth            import models
from django.contrib.postgres.fields import ArrayField, CITextField
from django.db                      import models as db_models
from django.db.models               import CharField, BooleanField, IntegerField, FloatField

from auth_api.models import Tutee, Tutor

class Session():
    tutee = db_models.ForeignKey(Tutee, on_delete=db_models.DO_NOTHING)
    tutor = db_models.ForeignKey(Tutor, on_delete=db_models.DO_NOTHING)
    address = CharField(max_length=50, default="", editable=True, null=False)
    price = FloatField(editable=False, max_length=10)
