import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-contact-faq',
  imports: [],
  templateUrl: './about-contact-faq.component.html',
  styleUrl: './about-contact-faq.component.css'
})
export class AboutContactFaqComponent {

  router = inject(Router);

  gotoabout(){
    this.router.navigate(['/aboutus']);
  }

  gotocontact(){
    this.router.navigate(['/contactus']);
  }

  gotofaq(){
    this.router.navigate(['/faq']);
  }

}
