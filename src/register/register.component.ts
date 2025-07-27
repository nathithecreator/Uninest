import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router = inject(Router);

  goBackHome(){
    this.router.navigate(['/LandingPage']);
  }

  gotoLogin(){
    this.router.navigate(['/login']);
  }

  universities = 
  [
    { value: 'uct', name: 'University of Cape Town' },
    { value: 'wits', name: 'University of the Witwatersrand' },
    
  ];

}
