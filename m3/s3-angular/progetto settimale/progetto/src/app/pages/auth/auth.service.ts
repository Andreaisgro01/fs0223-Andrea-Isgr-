import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Accessdata } from './interfaces/accessdata';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Register } from './interfaces/register';
import { Login } from './interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl = environment.apiUrl;

  private authSubject = new BehaviorSubject<null | Accessdata>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((dato) => Boolean(dato)));

  authLogoutTimer:any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser()
   }
  login(data:Login){
    return this.http.post<Accessdata>(this.apiUrl + '/login', data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data))
      const expDate = this.jwtHelper
      .getTokenExpirationDate(data.accessToken) as Date;
    }),
    )
  }
  restoreUser(){
    const userJson = localStorage.getItem('user');
    if(!userJson){
      return
    }
    const user:Accessdata = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }
    this.authSubject.next(user);
  }



  signUp(data:Register){
    return this.http.post<Accessdata>(this.apiUrl + '/register', data);
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(()=>{
      this.logout();
    }, expMs)
  }
}
