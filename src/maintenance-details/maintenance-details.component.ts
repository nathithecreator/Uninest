import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-details',
  imports: [NavDashboardComponent,CommonModule],
  templateUrl: './maintenance-details.component.html',
  styleUrl: './maintenance-details.component.css'
})
export class MaintenanceDetailsComponent {

  router = inject(Router);

  selectedStatus = 'open'; // Default status

  // Sample data - in a real app this would come from a service
  maintenanceRequest = {
    id: 'MR-2025-0142',
    title: 'Kitchen Faucet Leak',
    property: 'Modern Studio Apartment, 22 Park Avenue',
    type: 'Plumbing',
    reportedDate: new Date('2025-07-08T14:45:00'),
    tenant: 'James Wonders',
    contact: '+27 83 456 7890',
    status: 'Open',
    description: `The kitchen sink faucet has a persistent drip, and the water pressure seems lower than usual. It's been dripping for about two days now. The leak appears to be coming from the base of the faucet when the water is turned on.\n\nThis is causing water to pool under the sink and has started to damage the cabinet floor. The dripping is also quite loud at night.`,
    attachments: 3
  };

  goBack() {
    this.router.navigate(['/maintenancetable']);
  }

  changeStatus(status: string) {
    this.selectedStatus = status;
  }

}
