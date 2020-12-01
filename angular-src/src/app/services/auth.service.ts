import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
providedIn: 'root'
})
export class AuthService {
authToken: any;
  user: User;


constructor(private http: HttpClient,
public jwtHelper: JwtHelperService
) { }

  registerUser(user): Observable<any> {
    const registerUrl = 'http://localhost:3000/users/register';
    return this.http.post(registerUrl, user, httpOptions);
  }

  authenticateUser(login): Observable<any> {
    const loginUrl = 'http://localhost:3000/users/authenticate';
    return this.http.post(loginUrl, login, httpOptions);
  }

getProfile(): Observable<any> {
    this.authToken = localStorage.getItem('id_token');
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    };
    const profileUrl = 'http://localhost:3000/users/profile';
    return this.http.get(profileUrl, httpOptions1);
  }
 loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }


  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}


}
