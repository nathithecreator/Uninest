import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { NavDashboardComponent } from '../nav-dashboard/nav-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-applications-table',
  imports: [NavDashboardComponent,CommonModule, DatePipe],
  templateUrl: './student-applications-table.component.html',
  styleUrl: './student-applications-table.component.css'
})
export class StudentApplicationsTableComponent implements OnInit {
   tableData = [
    { property: '123 Main St, Apt 4B', applicant: 'John Smith', dateApplied: new Date('2023-10-15'), status: 'Pending' },
    { property: '456 Oak Ave, Unit 12', applicant: 'Sarah Johnson', dateApplied: new Date('2025-04-18'), status: 'Approved' },
    { property: '789 Pine Rd', applicant: 'Michael Chen', dateApplied: new Date('2024-08-11'), status: 'Rejected' },
    // Add more data as needed...
  ];

  router = inject(Router);

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 5;
  paginatedData: any[] = [];

  ngOnInit() {
    this.updatePaginatedData();
  }

  gotoApplication(){
    this.router.navigate(['/application'])
  }

  get totalPages(): number {
    return Math.ceil(this.tableData.length / this.itemsPerPage);
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedData = this.tableData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  prevPage() {
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
}
