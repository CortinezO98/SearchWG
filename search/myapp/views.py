from django.shortcuts import render
from .views import *
from django.http import JsonResponse
from django.conf import settings
import jwt
import datetime



def index(request):
    return render(request, 'index.html')

def get_auth_token(request):
    payload = {
        "iss": "tu-client-id",
        "sub": "nelson.gil@iq-online.com",
        "iat": datetime.datetime.utcnow(),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        "aud": "https://cloud.google.com/ai/gen-app-builder"
    }
    secret_key = settings.SECRET_KEY
    token = jwt.encode(payload, secret_key, algorithm="HS256")
    return JsonResponse({"token": token})