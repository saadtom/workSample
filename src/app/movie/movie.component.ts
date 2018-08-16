import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //movie properties
  movie: string = "";
  id_movie: number;
  Title: string = "";
  Rating: string = "";
  Released: string = "";
  Director: string = "";
  tagline: string = "";
  public plot;
  adult: string = "";
  genre: string = "";
  public poster;
 

  //creating an instance of sharedservice
  constructor(public _sharedService: SharedService) { }

  ngOnInit() { }

  callMovieService() {
    this._sharedService.findMovie(this.movie)
      .subscribe(resultmovieData => {
        this.Title = resultmovieData.results[0].original_title;
        this.plot = resultmovieData.results[0].overview;
        
        this.id_movie = resultmovieData.results[0].id;
      },
      error => {
        console.log("Error. The Movie result JSON value is as follows:");
        console.log(error);
      });
  }
  MovieDetails() {
    this._sharedService.getMovie(this.id_movie)
      .subscribe(resultmovieDetails => {
        this.Director = resultmovieDetails.production_companies[0].name;
        this.Released = resultmovieDetails.release_date;
        this.genre = resultmovieDetails.genres[0].name;
        this.adult = resultmovieDetails.adult;
        this.tagline = resultmovieDetails.tagline;
      })
  }
  SeeImages() {
    this._sharedService.getImage(this.id_movie)
    .subscribe(image=>{
      this.poster = image.posters[0].file_path;
    })
  };
}
