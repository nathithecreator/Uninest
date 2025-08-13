import { Component, inject, OnInit } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router, ActivatedRoute,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../service/property.service';
import { Property } from '../models/Property.model';

@Component({
  selector: 'app-landlord-property-details',
  standalone: true,
  imports: [NavDashboardComponent, CommonModule,RouterLink],
  templateUrl: './landlord-property-details.component.html',
  styleUrls: ['./landlord-property-details.component.css']
})
export class LandlordPropertyDetailsComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private propertyService = inject(PropertyService);

  property: Property | null = null;
  isLoading = true;

  ngOnInit(): void {
    this.loadPropertyDetails();
  }

  loadPropertyDetails() {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.propertyService.getPropertyById(+propertyId).subscribe({
        next: (property) => {
          this.property = property;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('In details Failed to load property:', error);
          this.isLoading = false;
        
          this.router.navigate(['/propertiesll']);
        }
      });
    } else {
      this.router.navigate(['/propertiesll']);
    }
  }

  gotoProperties() {
    this.router.navigate(['/propertiesll']);
  }

  editProperty(id: string) {
    this.router.navigate(['/editproperty', id]);
  }

  togglePropertyStatus() {
    if (!this.property) return;
    
    const newStatus = this.property.status === 'Available' ? 'Inactive' : 'Available';
    this.propertyService.updateProperty(this.property.id, { status: newStatus }).subscribe({
      next: () => {
        if (this.property) {
          this.property.status = newStatus;
        }
      },
      error: (error) => {
        console.error('Failed to update status:', error);
      }
    });
  }
}