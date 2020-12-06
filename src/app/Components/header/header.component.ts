import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  InputSearch: string;

  constructor() { }

  ngOnInit(): void {
  }
  search(Search: string) {
    console.log(Search);
  }

}
