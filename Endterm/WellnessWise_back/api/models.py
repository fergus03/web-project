from django.db import models
from django.urls import reverse


class DietCategory(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.id}: {self.name}'

    class Meta:
        verbose_name = 'Diet Category'
        verbose_name_plural = 'Diet Categories'


class MealTime(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Meals(models.Model):
    diet_category = models.ForeignKey(DietCategory, on_delete=models.CASCADE)
    meal_time = models.ForeignKey(MealTime, on_delete=models.CASCADE)
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    image_url = models.CharField(max_length=255)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
            verbose_name = 'Meals'
            verbose_name_plural = 'Meals'


class SkinType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class ProductType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class SkincareProduct(models.Model):
    skin_type = models.ForeignKey(SkinType, on_delete=models.CASCADE)
    product_type =  models.ForeignKey(ProductType,on_delete= models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image_link = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title



class SportVideo(models.Model):
    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return self.title
