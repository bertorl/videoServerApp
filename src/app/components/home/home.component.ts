import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login() {

    const dialogRef = this.dialog.open(LoginComponent, {
      height: '32vh',
      width: '42vw',
    });
    dialogRef.afterClosed().subscribe(() => { });

  }

  signUp() {

  }

}
