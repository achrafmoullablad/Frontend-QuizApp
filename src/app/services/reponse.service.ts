import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reponse } from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  url=environment.host;
  constructor(private httpClient:HttpClient) { }

  onCreateReponse(reponse:Reponse):Observable<Object>{
    return this.httpClient.post(`${this.url}/addreponse/${reponse.question.id}`,reponse);
  }

  onUpdateReponse(id: number, value: any): Observable<Object>{
    return this.httpClient.put(`${this.url}/updatereponse/${id}/${value.question.id}`, value);
  }

  onDeleteReponse(id: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/deletereponse/${id}`,{ responseType: 'text' })
  }

  onGetReponseAllByQuestion(id: number): Observable<Object>{
    return this.httpClient.get(`${this.url}/getallreponsebyquestion/${id}`);
  }
}
