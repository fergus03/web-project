import { Component } from '@angular/core';
import {DietCategory, Meals, MealTime, ProductType, SkincareProduct, SkinType} from "../models";
import {ActivatedRoute} from "@angular/router";
import {DietCategoryService} from "../diet-category-service/diet-category.service";
import {MealsService} from "../meals.service";
import {MealTimeService} from "../meal-time.service";
import {SkinTypeService} from "../skin-type.service";
import {ProductTypesService} from "../product-types.service";
import {SkincareProductService} from "../skincare-product.service";

@Component({
  selector: 'app-skin-care-product',
  templateUrl: './skincare-product.component.html',
  styleUrls: ['./skincare-product.component.css']
})
export class SkincareProductComponent {
  skinType :SkinType={} as SkinType;

  productTypes :ProductType[] = []
  products :SkincareProduct[] = []

  constructor(private  route :ActivatedRoute,private skinTypeService: SkinTypeService,private skincareProductsService:SkincareProductService,
              private productTypesService:ProductTypesService) {
  }
  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.skinTypeService.getSkinType(id).subscribe((skinType)=>{
        this.skinType = skinType
      });
    })
    this.productTypesService.getProductTypes().subscribe((productTypes)=>{
      this.productTypes = productTypes
    })

  }

  getProducts(product_type_id :number){
    this.skincareProductsService.getProducts(this.skinType.id,product_type_id).subscribe((products)=>{
      this.products = products
    })
  }

}
