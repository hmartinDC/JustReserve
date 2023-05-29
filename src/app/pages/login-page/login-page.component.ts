import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUserCookie()
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

}