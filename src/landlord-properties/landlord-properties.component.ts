import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlord-properties',
  imports: [NavDashboardComponent],
  templateUrl: './landlord-properties.component.html',
  styleUrl: './landlord-properties.component.css'
})
export class LandlordPropertiesComponent {

  router = inject(Router);

  propertyImageUrl: string = 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg';

  gotoAddProperty(){
    this.router.navigate(['/addpropertyll']);
  }

  gotoPropertyDetails(){
    this.router.navigate(['/propertydetailsll']);
  }

}
