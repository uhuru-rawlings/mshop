import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PupolarService {
  api_key:string = "0922b153db69d52a188dfe55a4c24708"
  url:string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=120`
  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get(this.url);
  }
}
