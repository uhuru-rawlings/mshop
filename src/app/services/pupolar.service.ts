import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupolarService {
  api_key:string = "0922b153db69d52a188dfe55a4c24708"
  url_searc:string = `https://api.themoviedb.org/3/search/company?api_key=${this.api_key}&page=`
  url:string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=120`
  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get(this.url);
  }

  searchmovies(items:any):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=0922b153db69d52a188dfe55a4c24708&language=en-US&query=${items}&page=1&include_adult=true`)
  }
}
