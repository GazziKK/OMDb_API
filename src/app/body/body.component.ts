import { Component, OnInit } from '@angular/core';
import {SearchService} from '../shared/service/search.service';
import {log} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  InputSearch: string;
  respons: [];

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchService.getMoviesByTitle('batman').subscribe(data => {
      this.respons = data.Search}
    );
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

  movieDetails(imdbID: string) {
    this.router.navigate([`searchDetails/${imdbID}`])

  }
}
