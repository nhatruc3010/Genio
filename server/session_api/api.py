from session_api.models import Session
from auth_api.models import Tutee, Tutor
import json
from django.http import JSONResponse

"""
    PUT
    Create a new session 
"""
def create_session(request):
    body = json.loads(request.body.decode('utf-8'))

    tutor_id = body.get('tutorID', None)
    tutee_id = body.get('tuteeID', None)
    price = body.get('price', None)
    address = body.get('address', None)
    start_time = body.get('startTime', None)
    end_time = body.get('endTime', None)

    tutor = Tutor.objects.filter(id=tutor_id)
    tutee = Tutor.objects.filter(id=tutee_id)

    if tutor_id and tutee_id and price and address and start_time and end_time and tutor and tutee:
        session = Session(tutor, tutee, price, address, start_time, end_time)
        session.save()

        return JSONResponse({
            'success': True,
            'msg': 'Successfully created a new session!',
            'session': json.dumps(session)
        })
    
    return JSONResponse({
        'success': False,
        'msg': 'Invalid request fields sent to server please try again'
    })
