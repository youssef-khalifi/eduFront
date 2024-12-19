import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-login',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './teacher-login.component.html',
  styleUrl: './teacher-login.component.css'
})
export class TeacherLoginComponent implements OnInit {

  loginForm! : FormGroup;
  registerForm! : FormGroup;

  constructor(private fb : FormBuilder,
              private  authService : AuthService,
              private router : Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: this.fb.control(""),
        password: this.fb.control(""),
        userType: this.fb.control("Teacher")
      }
    )
  }

  onLogin(): void {

    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    let userType = this.loginForm.value.userType;

    this.authService.login(username, password, userType).subscribe({
      next: (response) => {
        const { Access_Token, Refresh_Token } = response;
        this.authService.saveTokens(Access_Token, Refresh_Token , username , password , userType);
        console.log('Login successful! Tokens saved.');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    });
  }

  navigateToStudentLogin(){
    this.router.navigate(['/'])
  }



}
