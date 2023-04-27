from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import DietCategory, MealTime, Meals, SkinType, SkincareProduct, SportVideo, ProductType
from .serializers import DietCategorySerializer, MealTimeSerializer, MealsSerializer, SkinTypeSerializer, \
    SkincareProductSerializer, SportVideoSerializer, SkincareProductTypeSerializer


@csrf_exempt
@api_view(['GET'])
def diet_category_list(request):
    diet_categories = DietCategory.objects.all()
    serializer = DietCategorySerializer(diet_categories, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def diet_category(request,id):
    diet_category = DietCategory.objects.get(pk=id)
    serializer = DietCategorySerializer(diet_category)
    return Response(serializer.data)

@csrf_exempt
@api_view(['GET'])
def meal_time_list(request):
    meal_times = MealTime.objects.all()
    serializer = MealTimeSerializer(meal_times, many=True)
    return Response(serializer.data)

class MealsAPIView(APIView):
    def get(self, request,id):
        #id - diet category id
        meals = Meals.objects.filter(diet_category_id  = id)
        serializer = MealsSerializer(meals, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MealsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class MealsByTime(APIView):
    def get(self, request,diet_category_id,meal_time_id):
        #id - diet category id
        meals = Meals.objects.filter(diet_category_id  = diet_category_id).filter(meal_time_id = meal_time_id)
        serializer = MealsSerializer(meals, many=True)
        return Response(serializer.data,  )


class SkinTypeListAPIView(APIView):
    def get(self, request):
        skin_types = SkinType.objects.all()
        serializer = SkinTypeSerializer(skin_types, many=True)
        return Response(serializer.data)

class SkinTypeAPIView(APIView):
    def get(self,request,id):
        skin_type = SkinType.objects.get(id = id)
        serializer = SkinTypeSerializer(skin_type)
        return Response(serializer.data)



class ProductTypes(APIView):
    def get(self,request):
        product_types = ProductType.objects.all()
        serializer = SkincareProductTypeSerializer(product_types, many=True)
        return Response(serializer.data)

class SkincareProductsAPIView(APIView):
    def get(self, request,skin_type_id,product_type_id):
        skincare_products = SkincareProduct.objects.filter(skin_type_id = skin_type_id).filter(product_type_id = product_type_id)
        serializer = SkincareProductSerializer(skincare_products, many=True)
        return Response(serializer.data, )

    def post(self, request):
        serializer = SkincareProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class SportVideoAPIView(APIView):
    def get(self, request):
        sport_videos = SportVideo.objects.all()
        serializer = SportVideoSerializer(sport_videos, many=True)
        return Response(serializer.data, )

    def post(self, request):
        serializer = SportVideoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)