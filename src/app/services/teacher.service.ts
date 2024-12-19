import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly urlAPI = 'http://localhost:8888';
   token: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.token = this.authService.authenticatedUser.accessToken;
  }

  getStudents(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`${this.urlAPI}/TEACHER-SERVICE/Teachers`, { headers });
  }
}
