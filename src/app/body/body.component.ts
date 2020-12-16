import { Component, OnInit } from '@angular/core';
import {SearchService} from '../shared/service/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  InputSearch: string;
  response: [];

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchService.getMoviesByTitle("batman").subscribe( data => {
      this.response = data.Search;
    });
  }

  search(Search: string) {
    if (Search === undefined){
      alert('Search input Empty');
    }
    else {
      this.searchService.getMoviesByTitle(this.InputSearch.toLowerCase()).subscribe( data => {
        if (data.Search === undefined){
          alert('Not Found');
        }
        else {
          this.response = data.Search;
        }
      });
      // this.InputSearch = '';
    }
  }

  movieDetails(id: string) {
    this.router.navigate([`searchDetails/${id}`]).then(error => {
      console.error('not found poster');
    });
  }
}
