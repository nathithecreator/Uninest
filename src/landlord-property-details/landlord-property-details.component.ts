import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landlord-property-details',
  imports: [NavDashboardComponent, CommonModule],
  templateUrl: './landlord-property-details.component.html',
  styleUrl: './landlord-property-details.component.css'
})
export class LandlordPropertyDetailsComponent {
  router = inject(Router);

  // Sample transport options data
  transportOptions = [
    {
      name: 'Braamfontein Station',
      description: '5 min walk'
    },
    {
      name: 'Metro Bus Stop',
      description: '2 min walk'
    },
    {
      name: 'Uber Zone',
      description: 'Always available'
    }
  ];

  // Sample shops & services data
  shopsServices = [
    {
      name: 'Pick n Pay',
      description: '10 min walk'
    },
    {
      name: 'Wits University',
      description: '15 min walk'
    },
    {
      name: 'Coffee Shop',
      description: 'Next door'
    },
    {
      name: '24/7 Pharmacy',
      description: '5 min walk'
    }
  ];

  gotoProperties() {
    this.router.navigate(['/propertiesll']);
  }

  editProperty() {
    this.router.navigate(['/editproperty']);
  }
}