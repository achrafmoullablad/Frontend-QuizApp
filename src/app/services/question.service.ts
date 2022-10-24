import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url=environment.host;
  constructor(private httpClient:HttpClient) { }

  onCreateQuestion(question:Question):Observable<Object>{
    return this.httpClient.post(`${this.url}/addquestion/${question.categorie.id}`,question);
  }

  onUpdateQuestion(id: number, value: any): Observable<Object>{
    return this.httpClient.put(`${this.url}/updatequestion/${id}/${value.categorie.id}`, value);
  }

  onDeleteQuestion(id: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/deletequestion/${id}`,{ responseType: 'text' })
  }

  onGetQuestion(id: number): Observable<Object>{
    return this.httpClient.get(`${this.url}/getquestion/${id}`);
  }
  getAllQuestion(): Observable<Object>{
    return this.httpClient.get(`${this.url}/getallquestion`);
  }
  onAffecttedQuestion(id: number,value: any){
    return this.httpClient.post(`${this.url}/affection/${id}/${value.questionnaire.id}`,value);
  }
}
