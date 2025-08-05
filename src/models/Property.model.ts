

// Update your property.model.ts
export interface Property {
  id: number;
  propertyName: string;
  mainImage: string;
  streetAddress: string;
  apartmentNumber: string;
  suburb: string;
  city: string;
  postalCode: string;
  province: string;
  type: string; // e.g., "Studio", "Apartment"
  bedrooms: number;
  rentAmount: number;
  status: string; // e.g., "Available", "Occupied", "Partially Occupied"
  occupation: string;
  listingFee: number;
  description: string;
  transports: Transport[];
  shops: Shop[];
  university: string;
  college: string;
  reviewsList: Review[];
  landlordEmail: string;
  createdAt?: string; 
  updatedAt?: string; 
}

export interface Review {
  tenantName: string;
  comment: string;
  rating: number; // Consider adding a rating system
  createdAt?: string;
}

// transport.model.ts
export interface Transport {
  name: string;
  description: string;
}

// shop.model.ts
export interface Shop {
  name: string;
  description: string;
}