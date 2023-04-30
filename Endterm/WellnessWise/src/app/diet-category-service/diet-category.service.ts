import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DietCategory } from "../models";

@Injectable({
  providedIn: 'root'
})
export class DietCategoryService {

  constructor(private http: HttpClient) {
  }

  getDietCategories(): Observable<DietCategory[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<DietCategory[]>('http://127.0.0.1:8000/api/diet-categories/',{headers});
  }
  getDietCategory(id :number): Observable<DietCategory> {
    return this.http.get<DietCategory>(`http://127.0.0.1:8000/api/diet-categories/${id}`);
  }

}
