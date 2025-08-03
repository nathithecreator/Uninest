import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../models/Property.model';
import { PropertyService } from '../service/property.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';

@Component({
  selector: 'app-edit-property',
  standalone: true,
  imports: [FormsModule, CommonModule, NavDashboardComponent],
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  propertyId!: number;
  property: Property = {
    id: 0,
    propertyName: '',
    streetAddress: '',
    type: '',
    rentAmount: 0,
    bedrooms: '',
    description: '',
    mainImage: '',
    transports: [],
    shops: [],
    apartmentNumber: '',
    suburb: '',
    city: '',
    postalCode: '',
    province: '',
    status: '',
    occupation: '',
    listingFee: 0,
    university: '',
    college: '',
    reviewsList: [],
    landlordEmail: ''
  };
  imagePreview: string | null = null;
  selectedFile: File | null = null;
  listingFee = 0;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProperty();
  }

  loadProperty(): void {
    this.propertyService.getPropertyById(this.propertyId).subscribe({
      next: (prop) => {
        this.property = prop;
        this.imagePreview = this.property.mainImage;
        this.calculateFee();
      },
      error: (err) => {
        console.error('Error loading property:', err);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.cdRef.detectChanges();
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  calculateFee(): void {
    this.listingFee = this.property.rentAmount * 0.05;
  }

  updateProperty(): void {
    if (!this.imagePreview) return;

    const updatedProperty: Property = {
      ...this.property,
      mainImage: this.imagePreview
    };

    this.propertyService.updateProperty(this.propertyId, updatedProperty).subscribe({
      next: () => {
        this.router.navigate(['/dashboard/properties']);
      },
      error: (err) => {
        console.error('Error updating property:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard/properties']);
  }
}