import {NgModule} from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import {RouterModule,Routes} from '@angular/router';

const Menuroutes:Routes=[
    { path:'' ,redirectTo:'/weather' ,pathMatch:'full'},
    { path:'weather' ,component: WeatherComponent},
    { path:'movie' ,component: MovieComponent},

]; 

@NgModule({
    imports:[RouterModule.forRoot(Menuroutes)
    ],
    exports:[RouterModule]
})

export class ApproutingModule{}
export const routingComponents=[WeatherComponent,MovieComponent]