import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: CountryResponse[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  activateRegion(region: string) {
    if ( region === this.activeRegion ) return;
    this.activeRegion = region;
    this.getCountryByRegion(region);
  }

  getCountryByRegion(region: string) {
    this.countryService.getCountryByRegion(region)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
        },
        error: (_) => {
          this.countries = [];
        },
        complete: () => {
          console.log('Complete');
        }
      })
  }

}
