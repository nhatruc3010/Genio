from django.contrib.auth import authenticate
from auth_api.models import User
from django.http import JsonResponse
import json
from rest_framework_jwt.settings import api_settings

def register(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))
        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)

        if username and email and password:
            user = User.objects.create_user(username, email, password, tickers=[])

            jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
            jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)

            user.save()

            return JsonResponse({
                'success': True,
                'user': {
                    'username': username,
                    'email': email,
                },
                'token': 'JWT ' + token,
                'msg': 'Successfully created a new user'
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })

def login(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        username = body.get('username', None)
        password = body.get('password', None)

        if username and password:
            user = authenticate(username=username, password=password)
            if user is None:
                return JsonResponse({
                    'success': False,
                    'msg': 'Invalid credentials, try again'
                });
            else:
                jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

                payload = jwt_payload_handler(user)
                token = jwt_encode_handler(payload)
                
                return JsonResponse({
                    'success': True,
                    'msg': 'User successfully logged in',
                    'token': 'JWT ' + token
                })
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })