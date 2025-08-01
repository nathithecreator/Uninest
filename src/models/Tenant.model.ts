export interface Tenant {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  propertyAddress: string;
  rentAmount: number;
  rentDueDate: Date;
  leaseEndDate: Date;
  leaseStatus: string;
  paymentsList: Payment[];
  activeStatus: boolean;

  personalStreetName: string;
  personalSuburb: string;
  personalProvince: string;
  personalPostalCode: string;
  personalCountry: 'South Africa';
  
  bio: string;
  race: string;
  gender: string;
  studentID: string;
  university: string;
  password: string;
  appliedPropertyAddress: string;

  idCopy: File | string;
  avadavat: File | string;

  landlordEmail: string;
}

export interface Payment {
  amount: number;
  date: Date;
}
