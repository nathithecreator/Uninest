export interface Application {
  status: string;
  name: string;
  surname: string;
  email: string;
  propertyAddress: string;
  rentAmount: number;
  phoneNumber: string;

  id: string;
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
  proofOfAddress: File | string;
  affidavit: File | string;

  landlordEmail: string;
}
