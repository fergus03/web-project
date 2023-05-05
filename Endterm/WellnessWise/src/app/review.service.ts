import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Review, SportVideo} from './models';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private client: HttpClient) { }
  getReviews(): Observable<Review[]> {
    return this.client.get<Review[]>('http://127.0.0.1:8000/api/reviews/');
  }


  createReview(reviewName: string, reviewDesc: string): Observable<Review> {
    return this.client.post<Review>('http://127.0.0.1:8000/api/reviews/',
    {username: reviewName,
      description: reviewDesc}
    )
  }


  deleteReview(review_id: number): Observable<any> {
    return this.client.delete(`http://127.0.0.1:8000/api/reviews/${review_id}/`);
  }
}
