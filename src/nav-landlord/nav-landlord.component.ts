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
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  gotoLogin() {
    // Replace with your routing logic
    console.log('Redirecting to login...');
  }
}
