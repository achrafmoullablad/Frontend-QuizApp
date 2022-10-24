import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url=environment.host;
  constructor(private httpClient:HttpClient) { }

  getCategorie(): Observable<Object>{
    return this.httpClient.get(`${this.url}/getallcategorie`);
  }

  getQuestionbyIdCategorie(id:number){
    return this.httpClient.get(`${this.url}/getquestionbycategorie/${id}`);
  }

  CreateCategorie(categorie:Object):Observable<Object>{
    return this.httpClient.post(`${this.url}`+"/addcategorie",categorie);
  }
  deleteCategorie(id:number): Observable<any>{
    return this.httpClient.delete(`${this.url}/deletecategorie/${id}`,{ responseType: 'text' })
  }
}
