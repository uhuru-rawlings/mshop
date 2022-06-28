import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PupolarService {
  api_key:string = "0922b153db69d52a188dfe55a4c24708"
  url:string = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=120`
  constructor() { }
}
