import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {ReviewComponent} from "./review/review.component";
import {ContactComponent} from "./contact/contact.component";
import {StartMyJourneyComponent} from "./start-my-journey/start-my-journey.component";
import {ResPageComponent} from "./res-page/res-page.component";
import {HealthyDietComponent} from "./healthy-diet/healthy-diet.component";
import  {DietCategoryComponent} from "./diet-category/diet-category.component";

import {SportComponent} from "./sport/sport.component";
import {SkinCareComponent} from "./skin-care/skin-care.component";
import {SkincareProductComponent} from "./skincare-product/skincare-product.component";


const routes: Routes = [
  {path:'login',component:LogInComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'review', component:ReviewComponent},
  {path:'contact', component:ContactComponent},
  {path:'start-my-journey', component:StartMyJourneyComponent},
  {path:'start-my-journey/res-page', component:ResPageComponent},
  {path:'start-my-journey/res-page/healthy-diet', component:HealthyDietComponent},
  {path:'start-my-journey/res-page/healthy-diet/:id', component:DietCategoryComponent},
  {path:'start-my-journey/res-page/skin-care', component:SkinCareComponent},
  {path:'start-my-journey/res-page/skin-care/:id',component:SkincareProductComponent},
  {path:'start-my-journey/res-page/sport', component:SportComponent},
  {path:'',redirectTo:'aboutus',pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
