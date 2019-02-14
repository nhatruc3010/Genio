from django import forms
from . import models
class UserForm(forms.ModelForm):
    class Meta:
        model = models.User
        widgets = {
        'password': forms.PasswordInput(),
    }