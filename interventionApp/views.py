from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from interventionApp.serializers import InterventionSerializer
from interventionApp.models import Intervention
class InterventionListView(APIView):
    
    def get(self, request):
        interventions = Intervention.objects.all()
        serializer = InterventionSerializer(interventions, many=True)
        return Response(serializer.data)
    
    def put(self, request):
        serializer = InterventionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
        
    