import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieModel } from 'src/app/model/movie-model';

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.scss']
})
export class MoviesLayoutComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  moviesArray: Array<MovieModel>;
  testUrl: string;


  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(reqMovs => {
      this.moviesArray = reqMovs;
      this.testUrl = this.movieService.getPosterURL(reqMovs[0]);
    });
  }

}
