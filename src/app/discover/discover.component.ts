import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faMagnifyingGlass,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  @ViewChild('searchForm') shoppingListForm: NgForm;

  searchTerm: string;

  faMagnifyingGlass = faMagnifyingGlass;
  faShuffle = faShuffle;

  constructor() {}

  ngOnInit(): void {}

  onSearch(form: NgForm) {
    const formData = form.value;
    this.searchTerm = formData.search;
    console.log(this.searchTerm);
  }

  findRandom() {}
}
