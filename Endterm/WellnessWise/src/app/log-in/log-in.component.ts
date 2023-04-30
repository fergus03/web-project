import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { lastValueFrom } from 'rxjs';
import {AuthToken} from "../models";
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
  username: string;
  password: string;
  email: string;
  registerMode: boolean;



  constructor(public authService: AuthService,

  ) {
    this.username = '';
    this.password = '';
    this.email = '';
    this.registerMode = false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.setLoggedIn(true);

    }
  }



  toggleRegisterMode = () => {
    this.registerMode = !this.registerMode;
  }
  // login to forms itself, using input username and password and if everything is correct then it gives a JWT token that we use for every
  // request using Angular interceptor

  login(){
    this.authService.login(this.username,this.password).subscribe((data)=>{
      localStorage.setItem('token',data.access);
      this.authService.setLoggedIn(true);
    })
  }


}
