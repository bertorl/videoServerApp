import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/model/movie-model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'http://localhost:8080/api/v1';
  movieAPI: string;


  constructor(private http: HttpClient) {
    this.movieAPI = this.baseUrl + '/films';
  }

  getAllMovies(): Observable<Array<MovieModel>> {
    const requestUrl = this.movieAPI + '/all';
    return this.http.get<Array<MovieModel>>(requestUrl);
  }

  getPosterURL(movie: MovieModel): string {
    return this.movieAPI + '/poster/' + movie.posterID;
  }

  postNewMovie(movie: MovieModel, poster: FormData): Observable<MovieModel> {
    const requestUrlMovie = this.movieAPI + '/one';
    const requestUrlPoster = this.movieAPI + '/poster';

    this.http.post<MovieModel>(requestUrlMovie, movie).subscribe(
      movieResponse => {
        console.log(movieResponse)
        if (movieResponse.posterID !== '') {

          let headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
          // headers = headers.set('header-name-2', 'header-value-2');
          console.log(2)
           this.http.post<MovieModel>(requestUrlPoster, poster).subscribe( mov => {
            console.log(mov);
          }
            );

        }
      });
    return null;
  }
}
