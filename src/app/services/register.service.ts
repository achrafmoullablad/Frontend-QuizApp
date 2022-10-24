import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/admin';
import { JwtResponse } from '../models/jwt-response';
import { Logininfo } from '../models/logininfo';
import { TokenStorageService } from './token-storage.service';
const TOKEN_KEY="AuthToken";

@Injectable({
  providedIn: 'root',

})
export class RegisterService {
  private currentUserSubject!:BehaviorSubject<any>;
  private currentUser!:Observable<any>;
  public jwtHelp: JwtHelperService = new JwtHelperService();
  url=environment.host;
  constructor(private httpClient:HttpClient,private jwtHelper:JwtHelperService,private tokenStorage:TokenStorageService,private router:Router) {
    this.currentUserSubject=new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    this.currentUser=this.currentUserSubject.asObservable();
  }
  public get CurrentValue():any{
    return this.currentUserSubject.value;
  }

  RegisterAdmin(admin: Admin): Observable<Object>{
    return this.httpClient.post<JwtResponse>(`${this.url}`+'/api/auth/register',admin).pipe(map((data) => {
      this.saveUserData(data);
      return data;
    }))
  }
  saveUserData(data:any){
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveUsername(data.username);
    this.tokenStorage.saveAuthorities(data.authorities);
    this.currentUserSubject.next(data.accessToken);
  }

  LoginAdmin(logininfo:Logininfo){
    return this.httpClient.post<JwtResponse>(`${this.url}`+'/api/auth/login',logininfo).pipe(map((data) => {
      this.saveUserData(data);
      return data;
    }))
  }
}
