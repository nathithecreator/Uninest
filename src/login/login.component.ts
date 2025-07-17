import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavLandlordComponent } from "../nav-landlord/nav-landlord.component";

@Component({
  selector: 'app-login',
  imports: [NavLandlordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);

  gotoRegister(){
    this.router.navigate(['/register']);
  }

  gotoDashboardLL(){
    this.router.navigate(['/dashboardll']);
  }

}
