import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  imports: [NavDashboardComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent {

  router = inject(Router);

  goBack(){
    this.router.navigate(['/dashboardll']);
  }

}
