import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent implements OnInit {
  title: String ;
  constructor(public heading: ConfigService) {}

  ngOnInit() {
    this.title = this.heading.getHeading();
  }
}
