import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  imports: [NavDashboardComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  router = inject(Router);

  goBack() {
    this.router.navigate(['/notifications']);
  }

}
