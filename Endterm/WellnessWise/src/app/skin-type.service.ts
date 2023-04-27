import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkinType } from './models';

@Injectable({
  providedIn: 'root'
})
export class SkinTypeService {

  constructor(private http: HttpClient) { }

  getSkinTypes(): Observable<SkinType[]> {
    return this.http.get<SkinType[]>('http://127.0.0.1:8000/api/skin-types/');
  }

  getSkinType(id:number): Observable<SkinType> {
    return this.http.get<SkinType>(`http://127.0.0.1:8000/api/skin-types/${id}`);
  }
}
