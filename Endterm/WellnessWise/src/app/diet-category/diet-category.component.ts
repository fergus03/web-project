import { Component } from '@angular/core';
import {DietCategory, Meals, MealTime} from "../models";
import {DietCategoryService} from "../diet-category-service/diet-category.service";
import {ActivatedRoute} from "@angular/router";
import {MealsService} from "../meals.service";
import {MealTimeService} from "../meal-time.service";
@Component({
  selector: 'app-diet-category',
  templateUrl: './diet-category.component.html',
  styleUrls: ['./diet-category.component.css']
})
export class DietCategoryComponent {

  dietCategory :DietCategory ={} as DietCategory;

  mealTimes :MealTime[] = []
  meals :Meals[] = []

  constructor(private  route :ActivatedRoute,private dietCategoryService: DietCategoryService,private mealsService:MealsService,
              private mealTimesService:MealTimeService) {
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.dietCategoryService.getDietCategory(id).subscribe((dietCategory)=>{
        this.dietCategory = dietCategory
      });
    })
    this.mealTimesService.getMealTimes().subscribe((mealTimes)=>{
      this.mealTimes = mealTimes
    })

  }

  getMealsByMealTime(meal_time_id:number){
    this.mealsService.getMeals(this.dietCategory.id,meal_time_id).subscribe((meals)=>{
      this.meals = meals
    })
  }
}
