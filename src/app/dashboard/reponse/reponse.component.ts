import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  question:any;
  reponse:Reponse=new Reponse();
  constructor(private servicequestion:QuestionService,private servicereponse:ReponseService) { }

  ngOnInit(): void {
    this.servicequestion.getAllQuestion().subscribe(
      data=>{
        this.question=data;
        console.log(data)
      },err=>{console.log(err);}
    );
    this.reponse=new Reponse();
  }
  onSubmit(){
    this.servicereponse.onCreateReponse(this.reponse).subscribe(
      data=>{
        console.log(data);
      },err=>{console.log(err);}
    );
  }
}
