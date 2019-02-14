from django.contrib.auth import models
from django.contrib.postgres.fields import ArrayField
from django.db import models as db_models
import uuid

class User(models.User):
    # add more fields such as stock tickers
    tickers = ArrayField(db_models.CharField(max_length=255, blank=True, default=''), default=list, null=True)


