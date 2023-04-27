from django.urls import path
from . import views
urlpatterns = [
    path('diet-categories/', views.diet_category_list),
    path('diet-categories/<int:id>',views.diet_category),
    path('meal-times/', views.meal_time_list),
    # path('diet-categories/<int:id>/meals'.views.)
    path('diet-categories/<int:diet_category_id>/meals/meal-times/<int:meal_time_id>/', views.MealsByTime.as_view()),
    path('skin-types/', views.SkinTypeListAPIView.as_view()),
    path('skin-types/<int:id>', views.SkinTypeAPIView.as_view()),
    path('product-types/',views.ProductTypes.as_view()),
    path('skin-types/<int:skin_type_id>/product-types/<int:product_type_id>/',views.SkincareProductsAPIView.as_view()),
    path('sport-videos/', views.SportVideoAPIView.as_view()),
]