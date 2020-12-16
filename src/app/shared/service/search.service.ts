import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImovieDetails} from '../interface/allResult.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string;
  constructor( private http: HttpClient) {
    this.url = 'http://www.omdbapi.com/?apikey=a99892de&';
  }

  getMoviesByTitle(name): Observable<any>{
    // return this.http.get<any>(`${this.url}s=${name}&page=3`);
    return this.http.get<any>(`${this.url}s=${name}&page=3`);
  }

  getMovieDetails(id): Observable<Array<ImovieDetails>>{
    return this.http.get<Array<ImovieDetails>>(`${this.url}i=${id}`);
  }

}
