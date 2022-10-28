import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent implements OnInit {

  searchText: string = '';
  isError: boolean = false;
  countries: CountryResponse[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  search( searchText: string ) {
    this.searchText = searchText;
    if(!this.searchText) return
    this.isError = false;
    this.countryService.searchCountry(this.searchText)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
        },
        error: (_) => {
          this.isError = true;
          this.countries = [];
        },
        complete: () => {
          console.log('Complete');
        }
      })
  }

  suggestions( searchText: string ) {
    this.isError = false;
  }

}
