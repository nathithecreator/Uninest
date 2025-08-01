export interface Property {
  propertyName: string;
  mainImage: string;
  otherImages: string[]; // URLs or base64 encoded strings
  address: string;
  type: string; // e.g., "Studio", "Apartment"
  bedroom: string;
  rent: number;
  status: string; // e.g., "Available", "Occupied"
  occupation: string;
  listingFee: number;
  description: string;
  transports: string[];
  shops: string[];
  reviewsList: Review[];
  landlordEmail: string;
}

export interface Review {
  tenantName: string;
  comment: string;
}
