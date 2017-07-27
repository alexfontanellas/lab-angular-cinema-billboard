import { Component, OnInit, Injectable } from '@angular/core';
import { MovieService } from '../../services/movie.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {


  constructor(private movie: MovieService) { }

  ngOnInit() {
  }

  getMovies() : Array<Object> {
    return this.movie.movies;

  }

  getMovie(id){

  }

}
