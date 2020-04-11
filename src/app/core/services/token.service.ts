import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  getToken(username: string, password: string): Observable<string> {
    return new Observable();
  }

  constructor() { }
}
