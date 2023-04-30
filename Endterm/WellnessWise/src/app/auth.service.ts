import { Injectable } from '@angular/core';
import {AuthToken, SignUpToken} from './models';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // In order to be notified when setLoggedIn() method is called
  private loggedin = new BehaviorSubject<boolean>(false);

  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private http : HttpClient) {

  }

  // isLoggedIn() : Observable<boolean>{
  //   return this.loggedin.asObservable();
  // }
  isLoggedIn():Boolean{
    return  this.loggedin.getValue()
  }

  setLoggedIn(val : boolean){
    this.loggedin.next(val);
  }

  login(username: string, password: string) : Observable<AuthToken> {
    return this.http.post<AuthToken>(
      `${this.BASE_URL}/auth/login/`,
      {
        username,password
      }
    )
  }
  signUp(username: string, email: string, password: string): Observable<SignUpToken> {
    return this.http.post<SignUpToken>(`${this.BASE_URL}/auth/signup/`, { username, email, password });
  }
}
