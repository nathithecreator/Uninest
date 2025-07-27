import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent implements OnInit {
  activeNav: string = 'Overview'; // Default active tab
  router = inject(Router);

  ngOnInit() { 
    this.setActiveBasedOnRoute(this.router.url);
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveBasedOnRoute(event.url);
      });
  }

  private setActiveBasedOnRoute(url: string) {
    if (url.includes('/propertiesll') 
      || (url.includes('/propertydetailsll')) 
    || (url.includes('/addpropertyll'))
      || (url.includes('/editproperty'))) {
      this.activeNav = 'Properties';
    } else if (url.includes('/dashboardll')) {
      this.activeNav = 'Overview';
    } else if (url.includes('/studentapplicationsll') || (url.includes('/application'))) {
      this.activeNav = 'Applications';
    } else if (url.includes('/maintenancetable') || (url.includes('/maintenance'))) {
      this.activeNav = 'Maintenance';
    } else if (url.includes('/tenants') || (url.includes('/tenant'))) {
      this.activeNav = 'Tenants';
    } else if (url.includes('/notifications')) {
      this.activeNav = 'Notification';
    } else if (url.includes('/profile')) {
      this.activeNav = 'Profile';
    }else{
      this.activeNav = 'Profile';
    }
    // Add more routes as needed in the future
  }

  setActive(navItem: string) {
    this.activeNav = navItem;
  }

   logout() {
    this.router.navigate(['/LandingPage']);
  }

  gotoProperties() {
    this.activeNav = 'Properties';
    this.router.navigate(['/propertiesll']);
  }

  gotoDashboard() {
    this.activeNav = 'Overview';
    this.router.navigate(['/dashboardll']);
  }

  gotoApplications(){
    this.activeNav = 'Applications';
    this.router.navigate(['/studentapplicationsll']);
  }

  gotoMaintenance(){
    this.activeNav = 'Maintenance';
    this.router.navigate(['/maintenancetable']);
  }

  gotoTenants(){
    this.activeNav = 'Tenants';
    this.router.navigate(['/tenants']);
  }

  gotoNotification(){
    this.activeNav = 'Notification';
    this.router.navigate(['/notifications']);
  }

  gotoProfile(){
    this.activeNav = 'Profile';
    this.router.navigate(['/profile']);
  }
}