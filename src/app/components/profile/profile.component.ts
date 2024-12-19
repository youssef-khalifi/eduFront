import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{


  ngOnInit(): void {
    if (this.authService.authenticatedUser.userType.includes("Teacher")){
        this.getStudents()
    }
  }

  constructor(private teacherService : TeacherService,
              private authService : AuthService) {
  }


  getStudents(){
    this.teacherService.getStudents().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.error('Error fetching Teachers:', err);
      }
    });
  }

}
