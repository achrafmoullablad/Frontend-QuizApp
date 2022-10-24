import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {
  host=environment.host;
  constructor(private httpClient:HttpClient) { }

  sendmail(email :Email): Observable<any> {
    return this.httpClient.post(`${this.host}`+'/sendemail', email);
  }
  getallmails(): Observable<any>{
    return this.httpClient.get(`${this.host}/getallmailsender`);
  }
}
