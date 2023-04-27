import { Component } from '@angular/core';
import {DietCategory} from "../models";
import {DietCategoryService} from "../diet-category-service/diet-category.service";

@Component({
  selector: 'app-healthy-diet',
  templateUrl: './healthy-diet.component.html',
  styleUrls: ['./healthy-diet.component.css']
})
export class HealthyDietComponent {
  dietCategories: DietCategory[] = [];

  constructor(private dietCategoryService: DietCategoryService) {
  }
  ngOnInit(){
    this.dietCategoryService.getDietCategories().subscribe((dietCategories)=>{
      this.dietCategories = dietCategories
    });
  }
}
