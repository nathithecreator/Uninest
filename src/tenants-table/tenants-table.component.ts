import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenants-table',
  imports: [NavDashboardComponent,CommonModule],
  templateUrl: './tenants-table.component.html',
  styleUrl: './tenants-table.component.css'
})
export class TenantsTableComponent {

   router = inject(Router);
   
  tenants = [
    {
      id: 1,
      name: 'James Wonders',
      email: 'james.w@example.com',
      propertyAddress: '22 Park Avenue, Apt 4B',
      rentAmount: 5500,
      dueDate: new Date('2023-11-05'),
      leaseEndDate: new Date('2024-06-30'),
      phone: '+27 83 456 7890'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      propertyAddress: '15 River Side, Unit 12',
      rentAmount: 7500,
      dueDate: new Date('2023-11-01'),
      leaseEndDate: new Date('2023-12-15'), // Expiring soon
      phone: '+27 82 123 4567'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      propertyAddress: '89 Mountain View',
      rentAmount: 6200,
      dueDate: new Date('2023-10-01'), // Overdue
      leaseEndDate: new Date('2024-09-30'),
      phone: '+27 81 987 6543'
    },
    // Add more tenants as needed...
  ];

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 5;
  paginatedTenants: any[] = [];

  ngOnInit() {
    this.updatePaginatedData();
  }

  get totalPages(): number {
    return Math.ceil(this.tenants.length / this.itemsPerPage);
  }

  getPages(): number[] {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedTenants = this.tenants.slice(startIndex, startIndex + this.itemsPerPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  isExpiringSoon(endDate: Date): boolean {
    const today = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(today.getMonth() + 3);
    return new Date(endDate) <= threeMonthsFromNow;
  }

  isOverdue(dueDate: Date): boolean {
    const today = new Date();
    return new Date(dueDate) < today;
  }

  viewTenant() {
    this.router.navigate(['/tenant']);
  }

  messageTenant(tenant: any) {
    console.log('Messaging tenant:', tenant);
  }

  goBack() {
    this.router.navigate(['/tenants']);
  }
}
