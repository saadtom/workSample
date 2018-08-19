import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
  // Let's define the api url
  weatherURL1="http://api.apixu.com/v1/current.json?key=0e70beed6cfb4e4dbb6153029172608 &q=";
  movieURL1 = "http://api.themoviedb.org/3/search/movie?api_key=5aa2924101cb102ea40ead255bcadd62&query=";
  movieURL2="http://api.themoviedb.org/3/movie/";
  movieURL3= "?api_key=5aa2924101cb102ea40ead255bcadd62";
  movieURL4="/images";
  total_ReqsMade: number = 0;

  constructor(private _http: Http) { }

  // Fetch the data from the url 
  findWeather(city) {
    this.total_ReqsMade = this.total_ReqsMade + 1;
    return this._http.get(this.weatherURL1 + city  + this.weatherURL1)
      .map(response => {
        {
          return response.json()
        };
      })
      .catch(error => Observable.throw(error.json()));
  }

  findMovie(movie) {
    this.total_ReqsMade = this.total_ReqsMade + 1;
    return this._http.get(this.movieURL1 + movie )
      .map(response => {
        {
          return response.json()
        };
      })
      .catch(error => Observable.throw(error.json()));
  }

  getMovie(movie_id){
    return this._http.get(this.movieURL2 + movie_id + this.movieURL3)
    .map(response => {
      {
        return response.json()
      };
    })
    .catch(error => Observable.throw(error.json()));
  }

  getImage(movie_id){
    return this._http.get(this.movieURL2 + movie_id + this.movieURL4 + this.movieURL3)
    .map(response => {
      {
        return response.json()
      };
    })
    .catch(error => Observable.throw(error.json()));
  }
}
