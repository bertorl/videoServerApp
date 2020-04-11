import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/core/services/token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoader: boolean;

  constructor(private fb: FormBuilder, private tokenService: TokenService, private route: ActivatedRoute) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login() {
    // this.isLoader = true;
    // this.tokenService.getToken(this.loginForm.value.username, this.loginForm.value.password)
    //  .pipe(finalize(() => this.isLoader = false))
    //  .subscribe(token => this.redirectWithToken(token));
    this.redirectWithToken('token');
  }

  /**
   * Guarda el token y redirije al usuario a la url indicada como query param
   */
  private redirectWithToken(token: string): void {
    // const url = this.route.snapshot.queryParamMap.get('/home');
    // this.saveToken(token);
    location.href = '/home';
  }
  saveToken(token: string) {
    throw new Error('Method not implemented.');
  }


}
