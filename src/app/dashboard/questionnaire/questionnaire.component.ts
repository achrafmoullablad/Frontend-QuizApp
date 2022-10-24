import { Component, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/models/questionnaire';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { first } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  public categorie:any;
  public quest:any;
  submitted = false;
  public questions:any;
  public questionnaire:Questionnaire=new Questionnaire();
  public question:Question=new Question();
  constructor(private service:CategorieService,private servicequest:QuestionnaireService,private servicequestion:QuestionService,private router:Router) { }

  ngOnInit(): void {
    this.service.getCategorie().subscribe(
      data=>{
        this.categorie=data;
        console.log(data)
      },err=>{console.log(err);}
    );
    this.servicequest.OnGetAll().subscribe(
      data=>{
        this.quest=data;
      },
      err=>console.log(err)
    );
    this.servicequestion.getAllQuestion().subscribe(
      data =>{
        this.questions=data
      },err=>console.log(err))
    this.questionnaire=new Questionnaire();
    this.question=new Question();
  }
  onSubmit(){
    this.servicequest.Oncreate(this.questionnaire).pipe(first()).
    subscribe(
      data => {console.log(data);this.submitted=true}, error => console.log("erreur.."+error));
  }
  affectionToQuestionnaire(){
    this.servicequestion.onAffecttedQuestion(this.question.id,this.question.questionnaire.id).subscribe(
      data => {console.log(data)}, error => console.log("erreur.."+error));
  }
  passTest(id:number){
    this.router.navigate(['test', id]);
  }
}
