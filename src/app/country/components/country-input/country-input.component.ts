import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe( value => {
        console.log(value);
        this.onDebounce.emit(value);
      })
  }

  keyPress() {
    this.debouncer.next(this.searchText);
  }

  search() {
    this.onEnter.emit(this.searchText);
  }

}
