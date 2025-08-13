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
  router = inject(Router);


    goToLogin() {
         this.router.navigate(['/login']);
    }

    goToHome() {
         this.router.navigate(['/LandingPage']);
    }

    goToLoader() {
         this.router.navigate(['/loader']);
    }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


   scrollToAbout() {
    const element = document.getElementById('about-us');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    }

    scrollToContact() {
    const element = document.getElementById('contact-us-link');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    }

    scrollToFAQ() {
    const element = document.getElementById('faq-link');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    }
}
