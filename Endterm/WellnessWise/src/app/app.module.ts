import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StartMyJourneyComponent } from './start-my-journey/start-my-journey.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ResPageComponent } from './res-page/res-page.component';
import { HealthyDietComponent } from './healthy-diet/healthy-diet.component';
import { SkinCareComponent } from './skin-care/skin-care.component';
import { SportComponent } from './sport/sport.component';
import { DietCategoryComponent } from './diet-category/diet-category.component';
import { MealsComponent } from './meals/meals.component';
import { SkincareProductComponent } from './skincare-product/skincare-product.component';
import { RouterModule } from '@angular/router';
import {ReviewComponent} from "./review/review.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    LogInComponent,
    AboutusComponent,
    StartMyJourneyComponent,
    ResPageComponent,
    HealthyDietComponent,
    SkinCareComponent,
    SportComponent,
    DietCategoryComponent,
    MealsComponent,
    SkinCareComponent,
    SkincareProductComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     RouterModule,   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
