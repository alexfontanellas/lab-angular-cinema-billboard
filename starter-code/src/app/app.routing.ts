import { Routes } from '@angular/router';

import { MoviesComponent } from './compoments-movies/movies/movies.component';
import { MoviesDetailsComponent } from './compoments-movies/movies-details/movies-details.component';

export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MoviesDetailsComponent },
  { path: '**', redirectTo: '' }
];
