import { Injectable } from '@angular/core';

const TOKEN_KEY='AuthToken';
const USERNAME_KEY='AuthUsername';
const AUTHORITIES_KEY='AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  public saveToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public saveUsername(username:string){
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,username);
  }
  public saveAuthorities(authorities:string[]){
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
  }

  public getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public getUsername(){
    return sessionStorage.getItem(USERNAME_KEY);
  }
  public getAuthorities(){
    return sessionStorage.getItem(AUTHORITIES_KEY);
  }
}
