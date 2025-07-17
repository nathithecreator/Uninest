import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavLandlordComponent } from '../nav-landlord/nav-landlord.component';

@Component({
  selector: 'app-register',
  imports: [NavLandlordComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router);

  gotoLogin(){
    this.router.navigate(['/login']);
  }

}
