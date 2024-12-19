import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserApp} from "../models/userApp";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticatedUser! : UserApp;

  private apiUrl = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  login(username: string, password: string, userType: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('userType', userType);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');


    return this.http.post<any>(this.apiUrl, body.toString(), { headers }).pipe(

    );
  }


  saveTokens(accessToken: string, refreshToken: string ,
             username : string , password : string , userType : string): void {
    this.authenticatedUser = {
      userType: userType,
      accessToken: accessToken,
      refreshToken: refreshToken,
      username : username,
      password : password
    };

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }


  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }


  isAuthenticated(): boolean {
    return this.authenticatedUser !== null;
  }


  private handleError(error: any): Observable<never> {
    console.error('Login failed:', error);
    throw new Error('Login failed');
  }

  public hasRole(role : string) : boolean{

    return this.authenticatedUser.userType.includes(role);
  }
}
