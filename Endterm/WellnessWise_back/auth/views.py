from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.http import  Http404
from .serializers import UserSerializer
from rest_framework.decorators import api_view

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

User = get_user_model()


class UserView(APIView):

    def get_object(self,username):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise Http404
        return user

    def get(self, request, username):
        profile = self.get_object(username)

        serializer = UserSerializer(profile)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def put(self, request, username):
        profile = self.get_object(username)
        serializer = UserSerializer(profile, data=request.data)

        if serializer.is_valid():

            serializer.save()
            # print("Request data:", request.data)  # Add this line everything is fine here
            # print("Serializer data:", serializer.data)  # Add this line
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, username):
        profile = self.get_object(username)
        profile.delete()
        return Response({'deleted': True})
