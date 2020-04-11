import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DashjsPlayerModule } from 'angular-dashjs-player';
import { HeaderComponent } from './commons/header/header.component';
import { MoviesLayoutComponent } from './components/movies-layout/movies-layout.component';
import { FooterComponent } from './commons/footer/footer.component';
import { Authentication } from './core/auth/authentication';
import { SeriesLayoutComponent } from './components/series-layout/series-layout.component';
import { MovieComponent } from './components/movies-layout/movie/movie.component';
import { AddContentComponent } from './components/add-content/add-content.component';
import { ActorChipInputComponent } from './commons/actor-chip-input/actor-chip-input.component';
import { UploadFileComponent } from './commons/upload-file/upload-file.component';
import { FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MoviesLayoutComponent,
    FooterComponent,
    SeriesLayoutComponent,
    MovieComponent,
    AddContentComponent,
    ActorChipInputComponent,
    UploadFileComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    DashjsPlayerModule,
    MaterialFileInputModule
  ],
  providers: [
    Authentication,
  ],
  bootstrap: [AppComponent],
  exports: [MaterialModule],
  entryComponents: [HomeComponent]

})
export class AppModule { }
