import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SearchService} from '../shared/service/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  movieId: string;
  response = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
  ) {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        this.movieId = this.activateRoute.snapshot.paramMap.get('id');
      }
    });
  }

  ngOnInit(): void {
    this.searchService.getMovieDetails(this.movieId).subscribe(response => {
      this.response.push(response);
    });
  }

}
