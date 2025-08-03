import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PropertyService } from '../service/property.service';
import { Property } from '../models/Property.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [
    NavDashboardComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  router = inject(Router);
  
  private propertyService = inject(PropertyService);
  private cdr = inject(ChangeDetectorRef);

  propertyForm: FormGroup;
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  listingFee = 0;
  isSubmitting = false;

  propertyTypes = ['Apartment', 'House', 'Townhouse', 'Studio', 'Cottage'];

  universityList: string[] = [
    "University of Pretoria", "University of Cape Town", "University of Johannesburg",
    "University of the Witwatersrand", "Stellenbosch University", "University of KwaZulu-Natal",
    "University of the Free State", "North-West University", "Rhodes University", "University of Limpopo"
  ];

  techCollegeList: string[] = [
    "CPUT Cape Town Campus", "TUT Pretoria Campus", "TUT Soshanguve North Campus", 
    "TUT Soshanguve South Campus", "Durban University of Technology", "Vaal University of Technology",
    "University of Johannesburg (APK Campus)", "University of Johannesburg (DFC Campus)",
    "University of Johannesburg (SWC Campus)", "Central University of Technology"
  ];

  newTransport = { name: '', description: '' };
  transportOptions: { name: string; description: string }[] = [];

  newShop = { name: '', description: '' };
  shopsServices: { name: string; description: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      propertyName: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      unitNumber: ['', [Validators.maxLength(20)]],
      suburb: ['', [Validators.required, Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.maxLength(50)]],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      province: ['', [Validators.required]],
      propertyType: ['', [Validators.required]],
      monthlyRent: ['', [Validators.required, Validators.min(1), Validators.max(100000)]],
      bedrooms: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]],
      university: [''],
      college: ['']
    });
  }

  addTransport() {
    if (this.newTransport.name && this.newTransport.description) {
      this.transportOptions.push({ ...this.newTransport });
      this.newTransport = { name: '', description: '' };
    }
  }

  removeTransport(index: number) {
    this.transportOptions.splice(index, 1);
  }

  addShop() {
    if (this.newShop.name && this.newShop.description) {
      this.shopsServices.push({ ...this.newShop });
      this.newShop = { name: '', description: '' };
    }
  }

  removeShop(index: number) {
    this.shopsServices.splice(index, 1);
  }

  calculateFee() {
    const rent = this.propertyForm.get('monthlyRent')?.value;
    this.listingFee = rent ? parseFloat((rent * 0.05).toFixed(2)) : 0;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
        this.selectedFile = file;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file); // convert to base64
    }
  }

  removeImage() {
    this.selectedFile = null;
    this.previewUrl = null;
    this.cdr.detectChanges();
  }

  onSubmit() {
    if (this.propertyForm.valid && this.previewUrl) {
      this.isSubmitting = true;

      const newProperty: Property = {
        id: 0, // JSON Server will override this
        propertyName: this.propertyForm.value.propertyName,
        streetAddress: this.propertyForm.value.address,
        apartmentNumber: this.propertyForm.value.unitNumber || '',
        suburb: this.propertyForm.value.suburb,
        city: this.propertyForm.value.city,
        postalCode: this.propertyForm.value.postalCode,
        province: this.propertyForm.value.province,
        type: this.propertyForm.value.propertyType,
        bedrooms: this.propertyForm.value.bedrooms,
        rentAmount: this.propertyForm.value.monthlyRent,
        listingFee: this.listingFee,
        description: this.propertyForm.value.description,
        university: this.propertyForm.value.university || '',
        college: this.propertyForm.value.college || '',
        status: 'Available',
        occupation: 'Vacant',
        transports: this.transportOptions,
        shops: this.shopsServices,
        mainImage: this.previewUrl, // base64 string
        landlordEmail: 'landlord@example.com',
        reviewsList: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      this.propertyService.createProperty(newProperty).subscribe({
        next: (createdProperty: Property) => {
          console.log('Property created:', createdProperty);
          this.resetForm();
          this.isSubmitting = false;
          alert('Property successfully submitted!');
        },
        error: (error) => {
          console.error('Error creating property:', error);
          this.isSubmitting = false;
          alert('Error submitting property. Please try again.');
        }
      });
    }
  }

  private resetForm() {
    this.propertyForm.reset();
    this.selectedFile = null;
    this.previewUrl = null;
    this.transportOptions = [];
    this.shopsServices = [];
    this.listingFee = 0;
    this.cdr.detectChanges();
  }

  goBack() {
    if (this.propertyForm.dirty) {
      const confirmLeave = confirm('You have unsaved changes. Are you sure you want to leave?');
      if (confirmLeave) {
        this.router.navigate(['/propertiesll']);
      }
    } else {
      this.router.navigate(['/propertiesll']);
    }
  }
}
