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
    bedrooms: 0,
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

  newTransport = { name: '', description: '' };
  newShop = { name: '', description: '' };

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

        if (!this.property.transports) {
          this.property.transports = [];
        }
        if (!this.property.shops) {
          this.property.shops = [];
        }

        this.imagePreview = this.property.mainImage
          ? (this.property.mainImage.startsWith('data:')
            ? this.property.mainImage
            : `https://your-api.com/images/${this.property.mainImage}`) // adjust URL
          : null;

        this.calculateFee();
      },
      error: (err) => {
        console.error('Error loading property:', err);
      }
    });
  }

  // Transport methods
  addTransport(): void {
    if (this.newTransport.name && this.newTransport.description) {
      this.property.transports.push({ ...this.newTransport });
      this.newTransport = { name: '', description: '' };
      this.cdRef.detectChanges();
    }
  }

  removeTransport(index: number): void {
    this.property.transports.splice(index, 1);
    this.cdRef.detectChanges();
  }

  // Shop methods
  addShop(): void {
    if (this.newShop.name && this.newShop.description) {
      this.property.shops.push({ ...this.newShop });
      this.newShop = { name: '', description: '' };
      this.cdRef.detectChanges();
    }
  }

  removeShop(index: number): void {
    this.property.shops.splice(index, 1);
    this.cdRef.detectChanges();
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

  removeImage(): void {
    this.imagePreview = null;
    this.selectedFile = null;
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
        this.router.navigate(['/propertiesll']);
      },
      error: (err) => {
        console.error('Error updating property:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/propertiesll']);
  }
}
