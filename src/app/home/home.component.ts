import { Component, OnInit } from '@angular/core';
import { PupolarService } from '../services/pupolar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any;
  constructor(private PupolarService:PupolarService) { }

  ngOnInit(): void {
    this.showMovies()
  }

  showMovies( ){
    let item_vars = localStorage.getItem("movies");
    if(item_vars){
      this.movies = JSON.parse(item_vars);
    }else{
      this.PupolarService.getMovies().subscribe((data:any) => {
        // this.movies = data;
        localStorage.setItem("movies", JSON.stringify(data));
      })
    }
  }

}
