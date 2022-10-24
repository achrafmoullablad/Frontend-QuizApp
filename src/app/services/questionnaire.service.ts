import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../models/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  url=environment.host;
  constructor(private httpClient:HttpClient) { }

  Oncreate(questionnaire:Questionnaire):Observable<Object>{
    return this.httpClient.post(`${this.url}/addquestionnaire/${questionnaire.Categorie.id}`,questionnaire);
  }
  Onupdate(id:number,value:any):Observable<Object>{
    return this.httpClient.put(`${this.url}/updatequestionnaire/${id}/${value.categorie.id}`, value);
  }
  OnGetById(id:number):Observable<Object>{
    return this.httpClient.get(`${this.url}/getquestionnaire/${id}`);
  }
  Ondelete(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.url}/deletequestionnaire/${id}`,{ responseType: 'text' })
  }
  OnGetAll():Observable<Object>{
    return this.httpClient.get(`${this.url}/getallquestionnaire`);
  }
}
