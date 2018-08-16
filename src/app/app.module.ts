import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpModule} from '@angular/http';
import {ApproutingModule} from './app-routing.module';
import { MenuComponent } from './menu.component';
import { AppComponent } from './app.component';
import {routingComponents} from './app-routing.module';
import { SharedService } from "./shared.service";

@NgModule({
  declarations: [
    AppComponent,routingComponents,MenuComponent
   ],
  imports: [
    BrowserModule,FormsModule,HttpModule,ApproutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
