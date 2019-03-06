from django.contrib.auth import authenticate
from models import Tutee, Tutor
from django.http import JsonResponse
import json
from rest_framework_jwt.settings import api_settings

def generate_JWT(user):
    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

    payload = jwt_payload_handler(user)
    token = jwt_encode_handler(payload)

    return token

def register_tutee(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))
        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)

        if username and email and password:
            user = Tutee.objects.create_user(username, email, password)
            user.save()

            token = generate_JWT(user)

            return JsonResponse({
                'success': True,
                'user': {
                    'username': username,
                    'email': email,
                },
                'token': 'JWT ' + token,
                'msg': 'Successfully created a new tutee'
            })
    
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })

def register_tutor(request):
    if request.method == 'POST':
        # body is a bytes object, decoded into string, then loaded into dictionary by Python JSON parser
        body = json.loads(request.body.decode('utf-8'))

        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)

        cc_number = body.get('creditCardNumber', None)
        cc_exp_date = body.get('creditCardEXP', None)
        cc_holder_name = body.get('creditCardName', None)
        cc_security_code = body.get('creditCardCode', None)

        address = body.get('address', None)
    
        if username and email and password and cc_number and cc_exp_date and cc_holder_name and cc_security_code and address:
            user = Tutor.objects.create_user(username, email, password)

            user.cc_number = cc_number
            user.cc_exp_date = cc_exp_date
            user.cc_holder_name = cc_holder_name
            user.cc_security_code = cc_security_code

            user.address = address

            user.save()

            token = generate_JWT(user)

            return JsonResponse({
                'success': True,
                'user': {
                    'username': username,
                    'email': email,
                },
                'token': 'JWT ' + token,
                'msg': 'Successfully created a new tutor'
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
                })
            else:
                token = generate_JWT(user)
                
                return JsonResponse({
                    'success': True,
                    'msg': 'User successfully logged in',
                    'token': 'JWT ' + token
                })
    return JsonResponse({
        'success': False,
        'msg': 'Invalid request made, try again'
    })