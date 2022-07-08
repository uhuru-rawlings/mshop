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
  search:any;
  search_item:string = '';
  constructor(private PupolarService:PupolarService) { }

  ngOnInit(): void {
    this.showMovies()
  }

  showMovies( ){
    let item_vars = localStorage.getItem("movies");
    if(item_vars){
      let data_obje = JSON.parse(item_vars)
      this.movies = data_obje;
      console.log(this.movies);
    }else{
      this.PupolarService.getMovies().subscribe((data:any) => {
        // this.movies = data;
        localStorage.setItem("movies", JSON.stringify(data.results));
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
  searchMovies(){
    this.PupolarService.searchmovies(this.search_item).subscribe((data)=>{
      this.search = data.results
      console.log(this.search);
      let movies:any = localStorage.getItem("movies");
      // let movie_obj = JSON.parse(movies);
      let movies_array:any = []
      if(movies){
      for(let i = 0; i < this.search.length; i++){
        movies_array.push(this.search[i])
      }
      for(let j = 0; j < this.movies.length; j++){
        movies_array.push(this.movies[j])
      }
      if(movies_array.length > 0){
        localStorage.setItem("movies", JSON.stringify(movies_array));
        console.log(movies_array.length);
      }
      }
    })
  }
  scrollToTop(){
    window.scroll({top : 0, behavior: "smooth"});
  }
}
