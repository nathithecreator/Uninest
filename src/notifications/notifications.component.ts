import { Component } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  imports: [NavDashboardComponent, CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

}
