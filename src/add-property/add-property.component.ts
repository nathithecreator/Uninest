import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [NavDashboardComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  propertyForm: FormGroup;
  selectedFiles: File[] = [];
  listingFee = 0;
  propertyTypes = ['Apartment', 'House', 'Townhouse', 'Studio', 'Cottage'];

  // Add to your component class
newTransport = { name: '', description: '' };
transportOptions: any[] = [];

newShop = { name: '', description: '' };
shopsServices: any[] = [];

addTransport() {
  if (this.newTransport.name && this.newTransport.description) {
    this.transportOptions.push({...this.newTransport});
    this.newTransport = { name: '', description: '' };
    // Update form control if needed
  }
}

removeTransport(index: number) {
  this.transportOptions.splice(index, 1);
}

addShop() {
  if (this.newShop.name && this.newShop.description) {
    this.shopsServices.push({...this.newShop});
    this.newShop = { name: '', description: '' };
    // Update form control if needed
  }
}

removeShop(index: number) {
  this.shopsServices.splice(index, 1);
}

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      propertyName: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      propertyType: ['', Validators.required],
      monthlyRent: ['', [Validators.required, Validators.min(1), Validators.max(100000)]],
      bedrooms: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]]
    });
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
    URL.revokeObjectURL(this.getPreview(this.selectedFiles[index]));
  }

  onSubmit() {
    if (this.propertyForm.valid && this.selectedFiles.length >= 3) { // Changed minimum to 3 for testing
      const formData = new FormData();
      
      // Append form values
      Object.keys(this.propertyForm.value).forEach(key => {
        formData.append(key, this.propertyForm.value[key]);
      });
      
      // Append files
      this.selectedFiles.forEach(file => {
        formData.append('images', file);
      });
      
      console.log('Form submitted', formData);
      // Here you would typically send formData to your backend
      // this.propertyService.addProperty(formData).subscribe(...);
      
      // Reset form after submission
      this.propertyForm.reset();
      this.selectedFiles = [];
      this.listingFee = 0;
    }
  }

  goBack() {
    window.history.back();
  }
}