import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../shared/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  InputSearch: string;
  respons: [];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(Search: string) {
    if (Search === undefined){
      alert('Search input Empty');
    }
    else {
      this.searchService.getMoviesByTitle(this.InputSearch.toLowerCase()).subscribe( data => {
        if (data.Search === undefined){
          alert('not found')
        }
        else {
          this.respons = data.Search;
          console.log(this.respons);
        }
      });
      this.InputSearch = '';
    }
  }

}
