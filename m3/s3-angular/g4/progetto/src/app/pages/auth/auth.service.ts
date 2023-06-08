import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Accessdata } from './interfaces/accessdata';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Register } from './interfaces/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;

  private authSubject = new BehaviorSubject<null | Accessdata>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((dato: any) => Boolean(dato)));

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(data:Register){
    return this.http.post<Accessdata>(this.apiUrl + '/register', data);
  }
}
