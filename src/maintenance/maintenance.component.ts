import { Component, inject } from '@angular/core';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  imports: [NavDashboardComponent,CommonModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

  router = inject(Router);

   requests = [
    {
      id: 1,
      issue: 'Leaking Kitchen Faucet',
      description: 'The kitchen faucet has been leaking constantly, wasting water',
      propertyAddress: '22 Park Avenue, Apt 4B',
      tenantName: 'James Wonders',
      reportedDate: new Date('2024-06-07'),
      status: 'Open'
    },
    {
      id: 2,
      issue: 'Broken Heating System',
      description: 'Heating not working in living room during cold weather',
      propertyAddress: '15 River Side, Unit 12',
      tenantName: 'Sarah Johnson',
      reportedDate: new Date('2024-12-18'),
      status: 'In Progress'
    },
    {
      id: 3,
      issue: 'Clogged Bathroom Drain',
      description: 'Water drains very slowly in the master bathroom',
      propertyAddress: '89 Mountain View',
      tenantName: 'Michael Chen',
      reportedDate: new Date('2024-11-20'),
      status: 'Completed'
    },
    // Add more sample data as needed...
  ];

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 5;
  paginatedRequests: any[] = [];

  ngOnInit() {
    this.updatePaginatedData();
  }

  get totalPages(): number {
    return Math.ceil(this.requests.length / this.itemsPerPage);
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
    this.paginatedRequests = this.requests.slice(startIndex, startIndex + this.itemsPerPage);
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

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'open': return 'status-open';
      case 'in progress': return 'status-in-progress';
      case 'completed': return 'status-completed';
      default: return 'status-pending';
    }
  }

  viewDetails() {
    this.router.navigate(['maintenance']);
  }


}
