import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealTime } from './models';

@Injectable({
  providedIn: 'root'
})
export class MealTimeService {

  constructor(private http: HttpClient) { }

  getMealTimes(): Observable<MealTime[]> {
    return this.http.get<MealTime[]>('http://127.0.0.1:8000/api/meal-times/');
  }
}
