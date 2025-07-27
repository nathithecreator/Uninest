import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  goBackHome(){
    this.router.navigate(['/LandingPage']);
  }

  gotoRegister(){
    this.router.navigate(['/register']);
  }

  gotoDashboardLL(){
    this.router.navigate(['/dashboardll']);
  }

}
