from rest_framework import serializers
from .models import Meals, DietCategory, MealTime, SkincareProduct, SportVideo, SkinType, ProductType


class DietCategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)

    def create(self, validated_data):
        return DietCategory.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class SkinTypeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)

    def create(self, validated_data):
        return SkinType.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class MealTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MealTime
        fields = ['id', 'name']

class DietCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DietCategory
        fields = ['id', 'name']

class MealsSerializer(serializers.ModelSerializer):
    diet_category = DietCategorySerializer()
    meal_time = MealTimeSerializer()

    class Meta:
        model = Meals
        fields = '__all__'

class  SkincareProductTypeSerializer(serializers.ModelSerializer):
        class Meta:
            model = ProductType
            fields = '__all__'

class SkincareProductSerializer(serializers.ModelSerializer):
    skin_type = SkinTypeSerializer()

    class Meta:
        model = SkincareProduct
        fields = '__all__'

class SportVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SportVideo
        fields = ['id', 'title', 'link', 'image']