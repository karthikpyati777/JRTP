import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }

  isLoggedIn = false;

  // Fake authentication method, replace with actual authentication logic
  login(username: string, password: string): Observable<boolean> {
    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      return of(true); // Simulate successful login
    } else {
      return of(false); // Simulate failed login
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
