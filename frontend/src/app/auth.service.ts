import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  isLoggedIn: boolean;

  constructor(private router: Router) {

    this.isLoggedIn = false;

  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }

  loggedIn() {
    return this.isLoggedIn;
  }

  activeRoute() {
    return (this.isLoggedIn) ? 'active' : 'disabled';
  }
}
