from django.contrib import admin
from .models import DietCategory, Meals, SkinType, SportVideo, SkincareProduct, MealTime, ProductType, Review

# Register your models here.
admin.site.register(DietCategory)
admin.site.register(MealTime)
admin.site.register(Meals)
admin.site.register(SkinType)
admin.site.register(SkincareProduct)
admin.site.register(ProductType)
admin.site.register(SportVideo)
admin.site.register(Review)


