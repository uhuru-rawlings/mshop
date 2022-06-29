import { Component, OnInit } from '@angular/core';
import { PupolarService } from '../services/pupolar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any;
  display:any = "hide";
  ids:any;
  constructor(private PupolarService:PupolarService) { }

  ngOnInit(): void {
    this.showMovies()
  }

  showMovies( ){
    let item_vars = localStorage.getItem("movies");
    if(item_vars){
      let data_obje = JSON.parse(item_vars)
      this.movies = data_obje.results;
      console.log(this.movies);
    }else{
      this.PupolarService.getMovies().subscribe((data:any) => {
        // this.movies = data;
        localStorage.setItem("movies", JSON.stringify(data));
      })
    }
  }


  toggleDetails(id:any){
    this.ids = id;
    if(this.display == "hide"){
      this.display = "show"
    }else{
      this.display = "hide"
    }
  }
}
