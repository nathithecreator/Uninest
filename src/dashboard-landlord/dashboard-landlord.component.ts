import { Component, OnInit } from '@angular/core';
import { NavDashboardComponent } from "../nav-dashboard/nav-dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-landlord',
  imports: [NavDashboardComponent,CommonModule],
  templateUrl: './dashboard-landlord.component.html',
  styleUrl: './dashboard-landlord.component.css'
})
export class DashboardLandlordComponent implements OnInit {

   currentTime: string = '';
  currentDate: string = '';
  timeOfDay: string = 'day';
  username: string = 'Ndivho';

   openMaintenance: number = 1;
   pendingApplications: number = 1;

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.setTimeOfDay();
  }

  updateTime() {
    const now = new Date();
    
    // Format time (4:35 PM)
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    // Format date (Tuesday, July 15, 2025)
    this.currentDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  setTimeOfDay() {
    const hour = new Date().getHours();
    const welcomeBanner = document.querySelector('.welcome-banner');
    
    if (welcomeBanner) {
      welcomeBanner.classList.remove('Morning', 'Afternoon', 'Evening', 'Night');
      
      if (hour >= 5 && hour < 12) {
        this.timeOfDay = 'Morning';
        welcomeBanner.classList.add('Morning');
      } else if (hour >= 12 && hour < 17) {
        this.timeOfDay = 'Afternoon';
        welcomeBanner.classList.add('Afternoon');
      } else if (hour >= 17 && hour < 21) {
        this.timeOfDay = 'Evening';
        welcomeBanner.classList.add('Evening');
      } else {
        this.timeOfDay = 'Night';
        welcomeBanner.classList.add('Night');
      }
    }
  }

}
