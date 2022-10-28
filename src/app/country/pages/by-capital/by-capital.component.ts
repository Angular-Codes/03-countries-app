import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

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
    this.countryService.searchCapital(this.searchText)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
        }, 
        error: (_) => {
          this.isError = true;
          this.countries = [];
        }
      })
  }

  suggestions( searchText: string ) {
    this.isError = false;
  }
}
