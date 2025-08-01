import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments';
import {Property} from '../model/property.model';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  API: string = environment.apiUrl;

  constructor(private http: HttpClient) 
  { 
    
  }
}
