import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

   router = inject(Router);


    goToLogin() {
         this.router.navigate(['/login']);
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
