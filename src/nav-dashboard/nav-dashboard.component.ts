import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent {
  setActive(event: Event) {
    const navItems = document.querySelectorAll('.a-nav');
    navItems.forEach(item => item.classList.remove('active'));
    
    
    const clickedItem = event.target as HTMLElement;
    clickedItem.classList.add('active');
  }
}