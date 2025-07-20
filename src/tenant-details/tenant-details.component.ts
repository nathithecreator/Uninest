import { Component } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';

@Component({
  selector: 'app-tenant-details',
  imports: [NavDashboardComponent],
  templateUrl: './tenant-details.component.html',
  styleUrl: './tenant-details.component.css'
})
export class TenantDetailsComponent {
  goBack() {
    // Implement back navigation logic
    window.history.back();
  }

  sendPaymentReminder() {
    // Implement payment reminder logic
    console.log('Sending payment reminder');
  }

  sendRenewalOffer() {
    // Implement renewal offer logic
    console.log('Sending renewal offer');
  }

  markLeaseRenewed() {
    // Implement lease renewed logic
    console.log('Marking lease as renewed');
  }
}
