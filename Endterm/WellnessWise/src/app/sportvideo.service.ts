import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SportVideo } from './models';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportVideoService {

  constructor(private http: HttpClient) { }

  getSportVideos(): Observable<SportVideo[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<SportVideo[]>('http://127.0.0.1:8000/api/sport-videos/',{headers});
  }
}
