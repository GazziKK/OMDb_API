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
  totalResults: number;
  pageNumber: number;


  constructor(
    private searchService: SearchService,
    private router: Router
  ) {
    if (sessionStorage.getItem('paginator')){
      this.pageNumber = +sessionStorage.getItem('paginator');
    }
    else if (sessionStorage.getItem('paginator') === null)
    this.pageNumber = 1;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('name') === null){
      return;
    }else if (sessionStorage.getItem('name')){
      this.searchService.paginator().subscribe(data => {
        this.response = data.Search;
        this.totalResults = Math.round( data.totalResults / 10);
      });
    }
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
          this.totalResults = Math.round( data.totalResults / 10);
        }
      });
      this.InputSearch = '';
    }
  }

  movieDetails(id: string) {
    this.router.navigate([`searchDetails/${id}`]);
  }

  paginator(b: boolean) {
    if (b === false){
      if (this.pageNumber >= 2) {
      this.pageNumber--;
      sessionStorage.setItem('paginator', this.pageNumber.toString());
      this.searchService.paginator().subscribe(data => {
        this.response = data.Search;
      });
      }
    }
    else if (b === true){
      if (this.pageNumber <= this.totalResults - 1) {
        this.pageNumber++;
        sessionStorage.setItem('paginator', this.pageNumber.toString());
        this.searchService.paginator().subscribe(data => {
          this.response = data.Search;
        });
      }
    }
  }
}
