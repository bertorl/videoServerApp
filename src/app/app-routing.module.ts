import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesLayoutComponent } from './components/movies-layout/movies-layout.component';
import { Authentication } from './core/auth/authentication';
import { AddContentComponent } from './components/add-content/add-content.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [Authentication],
    children: [{
        path: 'movies',
        component: MoviesLayoutComponent,
      },
      {
        path: 'series',
        redirectTo: '',
      },
      {
        path: 'addcontent',
        component: AddContentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
