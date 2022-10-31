import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country!: CountryResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit() {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.countryService.getCountryByAlpha(id) )
        )
        .subscribe({
          next: (country) => {
            this.country = country;
          },
          error: (_) => {
            console.log('Error');
          }
        });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countryService.getCountryByAlpha(id)
    //       .subscribe({
    //         next: (countries) => {
    //           console.log(countries);
    //         },
    //         error: (_) => {
    //           console.log('Error');
    //         },
    //       })
    // });
  }

}
