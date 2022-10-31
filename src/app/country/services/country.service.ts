import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(
    private http: HttpClient
  ) { }

  searchCountry(search: string) {
    return this.http.get<CountryResponse[]>(`${this.apiUrl}/name/${search}`);
  }

  searchCapital(search: string) {
    return this.http.get<CountryResponse[]>(`${this.apiUrl}/capital/${search}`);
  }

  getCountryByAlpha(id: string) {
    return this.http.get<CountryResponse>(`${this.apiUrl}/alpha/${id}`);
  }

}
