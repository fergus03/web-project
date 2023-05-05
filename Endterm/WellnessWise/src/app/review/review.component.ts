import { Component, OnInit } from '@angular/core';
import { Review } from '../models';
import { ReviewService} from "../review.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Review[] = [];
  username: string = '';
  newReview: string = '';

  constructor(private reviewService: ReviewService, public authService :AuthService) {
    this.username = localStorage.getItem('username') !
  }

  ngOnInit() {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  addReview() {

    this.reviewService.createReview(this.username, this.newReview).subscribe((review) => {
      this.reviews.push(review);
      this.newReview = '';
    })
  }

  deleteReview(review_id: number,review_username:string) {
    console.log(review_username, typeof (review_username))
    console.log(this.username,typeof (this.username))
    if(review_username == this.username){

    this.reviewService.deleteReview(review_id).subscribe(() => {
      this.reviews = this.reviews.filter((review) => review.id !== review_id);
    });
  }}


}
