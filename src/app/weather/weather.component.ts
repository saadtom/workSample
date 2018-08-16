import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  //weather properties
  id_city: string = "";
  id_state: string = "";
  city: string = "";
  region: string = "";
  country: string = "";
  date: string = "";
  pre_condition: string = "";
  temp: string = "";
  feel_temp: string = "";
  atm_press: string = "";
  humidity: string = "";
  public imageLink;

  constructor(public _sharedService: SharedService) { }

  ngOnInit() { }
  callWeatherService() {
    this._sharedService.findWeather(this.id_city) //this.id_state)
      .subscribe(
      resultweatherData => {
        /* this.city = resultweatherData["query"]["results"]["channel"]["location"]["city"];
         this.region = resultweatherData["query"]["results"]["channel"]["location"]["region"];
         this.country = resultweatherData["query"]["results"]["channel"]["location"]["country"];
         this.date = resultweatherData["query"]["results"]["channel"]["item"]["condition"]["date"];
         this.pre_condition = resultweatherData["query"]["results"]["channel"]["item"]["condition"]["text"];
         this.temp = resultweatherData["query"]["results"]["channel"]["item"]["condition"]["temp"];*/
        this.city = resultweatherData["location"]["name"];
        this.region = resultweatherData["location"]["region"];
        this.country = resultweatherData["location"]["country"];
        this.date = resultweatherData["location"]["localtime"];
        this.temp = resultweatherData["current"]["temp_c"];
        this.feel_temp = resultweatherData["current"]["feelslike_c"];
        this.pre_condition = resultweatherData["current"]["condition"]["text"];
        this.atm_press = resultweatherData["current"]["pressure_mb"];
        this.humidity = resultweatherData["current"]["humidity"];
        this.imageLink=resultweatherData["current"]["condition"]["icon"];
      },
      error => {
        console.log("Error. The Weather result JSON value is as follows:");
        console.log(error);
      });
  }
}


