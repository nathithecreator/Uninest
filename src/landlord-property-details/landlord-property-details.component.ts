import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlord-property-details',
  imports: [NavDashboardComponent],
  templateUrl: './landlord-property-details.component.html',
  styleUrl: './landlord-property-details.component.css'
})
export class LandlordPropertyDetailsComponent {

  router = inject(Router);

  gotoProperties(){
    this.router.navigate(['/propertiesll']);
  }

  editProperty(){
    this.router.navigate(['/editproperty']);
  }

}
