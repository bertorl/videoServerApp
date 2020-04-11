import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/model/movie-model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: MovieModel;

  movieURL: string;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieURL = this.movieService.getPosterURL(this.movie);
  }

}
