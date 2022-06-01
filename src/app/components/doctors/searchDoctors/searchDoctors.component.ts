import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './searchDoctors.component.html',
  styleUrls: ['./searchDoctors.component.scss']
})

export class SearchDoctorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  enteredSearchValue: string = '';


  @Output() 
  searchDoctor: EventEmitter<string> = new EventEmitter<string>();

  onSearchDoctor(): void {
    this.searchDoctor.emit(this.enteredSearchValue);
  }
}

