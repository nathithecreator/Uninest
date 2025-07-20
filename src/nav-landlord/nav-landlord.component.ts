import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-landlord',
  imports: [CommonModule],
  templateUrl: './nav-landlord.component.html',
  styleUrl: './nav-landlord.component.css'
})
export class NavLandlordComponent {


  router = inject(Router);


  gotoLogin() {
    this.router.navigate(['/addpropertyll']);
  };


}
