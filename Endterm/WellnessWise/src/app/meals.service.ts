import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meals } from './models';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }

  getMeals(diet_category_id:number,meal_time_id :number): Observable<Meals[]> {
    return this.http.get<Meals[]>(`http://127.0.0.1:8000/api/diet-categories/${diet_category_id}/meals/meal-times/${meal_time_id}/`);
  }
}
