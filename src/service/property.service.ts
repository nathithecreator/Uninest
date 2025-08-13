import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/Property.model';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Create a new property
  createProperty(propertyData: Property): Observable<Property> {
  return this.http.post<Property>(`${this.apiUrl}/properties`, propertyData);
}


  // Get all properties
  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}/properties`);
  }

  // Get property by ID
  getPropertyById(id: number): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/properties/${id}`);
  }

  updateProperty(id: number, updates: Partial<Property>): Observable<Property> {
  return this.http.patch<Property>(`${this.apiUrl}/properties/${id}`, updates);
}

  uploadImage(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>(`${this.apiUrl}/upload`, formData);
  }

  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/properties/${id}`);
  }
}