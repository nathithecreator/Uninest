import { Component, inject, OnInit } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router, RouterLink } from '@angular/router';
import { PropertyService } from '../service/property.service';
import { Property } from '../models/Property.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landlord-properties',
  standalone: true,
  imports: [NavDashboardComponent, CommonModule, RouterLink],
  templateUrl: './landlord-properties.component.html',
  styleUrls: ['./landlord-properties.component.css']
})
export class LandlordPropertiesComponent implements OnInit {
  propertyService = inject(PropertyService);
  router = inject(Router);
  
  propertyItems: Property[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties() {
    this.isLoading = true;
    this.propertyService.getAllProperties().subscribe({
      next: (data) => {
        this.propertyItems = Array.isArray(data) ? data : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch properties:', error);
        this.isLoading = false;
      }
    });
  }

  gotoAddProperty() {
    this.router.navigate(['/addpropertyll']);
  }
}