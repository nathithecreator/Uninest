import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';

@Component({
  selector: 'app-edit-property',
  imports: [NavDashboardComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './edit-property.component.html',
  styleUrl: './edit-property.component.css'
})
export class EditPropertyComponent {
  propertyForm: FormGroup;
  selectedFiles: File[] = [];
  listingFee = 0;

  // Transport and Shops data
  newTransport = { name: '', description: '' };
  transportOptions: any[] = [
    { name: 'Braamfontein Station', description: '5 min walk' },
    { name: 'Metro Bus Stop', description: '2 min walk' }
  ];

  newShop = { name: '', description: '' };
  shopsServices: any[] = [
    { name: 'Pick n Pay', description: '10 min walk' },
    { name: 'Wits University', description: '15 min walk' }
  ];

  // For editing existing items
  editingTransportIndex: number | null = null;
  editingShopIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      propertyName: ['Modern Studio Apartment', [Validators.required, Validators.maxLength(100)]],
      address: ['123 Main St, Braamfontein', [Validators.required, Validators.maxLength(200)]],
      propertyType: ['studio', Validators.required],
      monthlyRent: [5500, [Validators.required, Validators.min(1), Validators.max(100000)]],
      bedrooms: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      description: ['This vibrant studio apartment is located in the heart of Braamfontein...', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]]
    });

    this.calculateFee();
  }

  // Transport methods
  addTransport() {
    if (this.newTransport.name && this.newTransport.description) {
      if (this.editingTransportIndex !== null) {
        // Update existing transport
        this.transportOptions[this.editingTransportIndex] = {...this.newTransport};
        this.editingTransportIndex = null;
      } else {
        // Add new transport
        this.transportOptions.push({...this.newTransport});
      }
      this.newTransport = { name: '', description: '' };
    }
  }

  editTransport(index: number) {
    this.editingTransportIndex = index;
    this.newTransport = {...this.transportOptions[index]};
  }

  removeTransport(index: number) {
    this.transportOptions.splice(index, 1);
    if (this.editingTransportIndex === index) {
      this.editingTransportIndex = null;
      this.newTransport = { name: '', description: '' };
    }
  }

  cancelEditTransport() {
    this.editingTransportIndex = null;
    this.newTransport = { name: '', description: '' };
  }

  // Shop methods
  addShop() {
    if (this.newShop.name && this.newShop.description) {
      if (this.editingShopIndex !== null) {
        // Update existing shop
        this.shopsServices[this.editingShopIndex] = {...this.newShop};
        this.editingShopIndex = null;
      } else {
        // Add new shop
        this.shopsServices.push({...this.newShop});
      }
      this.newShop = { name: '', description: '' };
    }
  }

  editShop(index: number) {
    this.editingShopIndex = index;
    this.newShop = {...this.shopsServices[index]};
  }

  removeShop(index: number) {
    this.shopsServices.splice(index, 1);
    if (this.editingShopIndex === index) {
      this.editingShopIndex = null;
      this.newShop = { name: '', description: '' };
    }
  }

  cancelEditShop() {
    this.editingShopIndex = null;
    this.newShop = { name: '', description: '' };
  }

  calculateFee() {
    const rent = this.propertyForm.get('monthlyRent')?.value;
    this.listingFee = rent ? parseFloat((rent * 0.05).toFixed(2)) : 0;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  getPreview(file: File): string {
    return URL.createObjectURL(file);
  }

  removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    if (this.selectedFiles[index]) {
      URL.revokeObjectURL(this.getPreview(this.selectedFiles[index]));
    }
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      const formData = {
        ...this.propertyForm.value,
        transports: this.transportOptions,
        shops: this.shopsServices,
        images: this.selectedFiles
      };
      
      console.log('Form submitted', formData);
      // Here you would typically send the data to your backend
    }
  }

  goBack() {
    window.history.back();
  }
}