import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }



  

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/employees']); // Redirect to employee list page
        } else {
          alert('Invalid credentials');
        }
      });
  }
}
