export interface Maintenance {
  maintenanceName: string;
  address: string;
  description: string;
  type: string;
  dateReported: Date;
  tenantName: string;
  tenantSurname: string;
  tenantEmail: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  action: 'Assign Technician' | 'Mark as resolved';
  landlordEmail: string;
}
