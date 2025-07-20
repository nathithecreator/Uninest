import { Component } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';

@Component({
  selector: 'app-student-application-details',
  imports: [NavDashboardComponent],
  templateUrl: './student-application-details.component.html',
  styleUrl: './student-application-details.component.css'
})
export class StudentApplicationDetailsComponent {


  goBack() {
    window.history.back();
  }

}
