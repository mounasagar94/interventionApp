from rest_framework import serializers

from interventionApp.models import Intervention


class InterventionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intervention
        fields = 'id', 'label', 'name', 'description', 'place', 'date', 'state'