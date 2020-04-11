import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActorModel } from 'src/app/model/actor-model';
import { UploadFileComponent } from 'src/app/commons/upload-file/upload-file.component';
import { MovieComponent } from '../movies-layout/movie/movie.component';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieModel } from 'src/app/model/movie-model';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  addForm: FormGroup;

  @ViewChild('fileUploader')
  fileUploader: UploadFileComponent;

  typeUploadMovie = 'Poster de la película';

  actorsList: Array<ActorModel> = [
    {name: 'Test1', age: 20},
    {name: 'Test2', age: 20},
    {name: 'Test3', age: 20},
    {name: 'Test4', age: 20},
    {name: 'Test5', age: 20}];

  constructor(private fb: FormBuilder, private moviesService: MoviesService) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      urlMovie: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  canSave(): boolean {
    return true;
  }

  upload() {
    const file = this.fileUploader.getFile().files[0];
    const formData = new FormData();
    formData.append('file', file);

    const movie = new MovieModel();
    movie.filmExternalURL = this.addForm.value.urlMovie;
    movie.title = this.addForm.value.title;

    this.moviesService.postNewMovie(movie, formData);

  }


}
