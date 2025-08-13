import { Component, inject, OnInit } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router, RouterLink } from '@angular/router';
import { PropertyService } from '../service/property.service';
import { Property } from '../models/Property.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landlord-properties',
  standalone: true,
  imports: [NavDashboardComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './landlord-properties.component.html',
  styleUrls: ['./landlord-properties.component.css']
})
export class LandlordPropertiesComponent implements OnInit {
  propertyService = inject(PropertyService);
  router = inject(Router);
  selectedFilter: string = 'All';
  searchQuery: string = '';

  totalCountProperties: number = 0;
  Revenue: number = 0;

  propertyItems: Property[] = [];
  filteredProperties: Property[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.loadProperties();
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.applyFilters();
  }

  onSearchInput() {
    this.applyFilters();
  }

  applyFilters() {
    // First filter by status
    let filtered = this.selectedFilter === 'All' 
      ? [...this.propertyItems] 
      : this.propertyItems.filter(p => p.status === this.selectedFilter);
    
    // Then filter by search query if it exists
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(property => 
        property.propertyName.toLowerCase().includes(query) ||
        property.streetAddress.toLowerCase().includes(query) ||
        property.suburb.toLowerCase().includes(query) ||
        property.city.toLowerCase().includes(query) ||
        (property.university && property.university.toLowerCase().includes(query)) ||
        (property.college && property.college.toLowerCase().includes(query)) ||
        (property.rentAmount && property.rentAmount.toString().includes(query))
      );
    }
    
    this.filteredProperties = filtered;
    this.updateStats();
  }

  loadProperties() {
    this.isLoading = true;
    this.propertyService.getAllProperties().subscribe({
      next: (data) => {
        this.propertyItems = Array.isArray(data) ? data : [];
        this.filteredProperties = [...this.propertyItems];
        this.isLoading = false;
        this.updateStats();
      },
      error: (error) => {
        console.error('Failed to fetch properties:', error);
        this.isLoading = false;
      }
    });
  }

  getFilteredProperties(): Property[] {
    return this.filteredProperties;
  }

  updateStats() {
    this.totalCountProperties = this.filteredProperties.length;
    this.Revenue = this.filteredProperties.reduce((sum, property) => sum + (property.rentAmount || 0), 0);
  }

  gotoAddProperty() {
    this.router.navigate(['/addpropertyll']);
  }
}