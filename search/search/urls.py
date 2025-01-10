from django.contrib import admin
from django.urls import path
from myapp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'), 
    path('get-auth-token/', get_auth_token, name='get_auth_token'),
]
