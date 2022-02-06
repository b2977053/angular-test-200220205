import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TravelTaipei } from './travel-taipei';

@Injectable({
  providedIn: 'root'
})
export class TravelTaipeiService {

  constructor(private http: HttpClient) {}

  getAttractionsAll() {
    // No 'Access-Control-Allow-Origin' header is present on the requested resource.
    return this.http.get<TravelTaipei>('https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1', { headers:{
      'accept': 'application/json'
    }});
  }
}

