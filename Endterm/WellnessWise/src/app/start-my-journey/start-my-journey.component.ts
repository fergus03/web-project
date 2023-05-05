import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-start-my-journey',
  templateUrl: './start-my-journey.component.html',
  styleUrls: ['./start-my-journey.component.css']
})
export class StartMyJourneyComponent  implements  OnInit{

  username:string;
  password:string;
  email:string;

  isRegistered:boolean;

  constructor(public authService:AuthService) {
    this.username=""
    this.password=""
    this.email=""
    this.isRegistered = false
  }
  ngOnInit(){
  }
  signUp(){
    if (this.username &&  this.email && this.password) {
      this.authService.signUp(this.username,this.email, this.password).subscribe((data) => {
        console.log(data);
        this.isRegistered = true;
      });
    }
  }

}
