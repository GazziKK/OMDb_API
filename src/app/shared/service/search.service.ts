import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IallResultInterface} from '../interface/allResult.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string;
  constructor( private http: HttpClient) {
    this.url = 'http://www.omdbapi.com/?apikey=a99892de&s=';
  }

  getMoviesByTitle(name): Observable<any>{
    return this.http.get<any>(`${this.url}${name}`);
  }


}
