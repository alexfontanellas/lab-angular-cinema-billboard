import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routes } from './app.routing';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { MoviesComponent } from './compoments-movies/movies/movies.component';
import { MoviesDetailsComponent } from './compoments-movies/movies-details/movies-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
