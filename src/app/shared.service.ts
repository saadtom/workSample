import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
  //weatherURL1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
  weatherURL1="http://api.apixu.com/v1/current.json?key=0e70beed6cfb4e4dbb6153029172608 &q=";
  //weatherURL3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  weatherURL2="";
  movieURL1 = "http://api.themoviedb.org/3/search/movie?api_key=5aa2924101cb102ea40ead255bcadd62&query=";
  movieURL2="http://api.themoviedb.org/3/movie/";
  movieURL3= "?api_key=5aa2924101cb102ea40ead255bcadd62";
  movieURL4="/images";
  total_ReqsMade: number = 0; 
  
  constructor(private _http: Http) { }

  findWeather(city) {
    this.total_ReqsMade = this.total_ReqsMade + 1;
    return this._http.get(this.weatherURL1 + city  + this.weatherURL2)
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
