import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id!:number;
  questionnaire:any;
  page=0;
  correct=false;
  compteur=0;
  constructor(private route:ActivatedRoute,private service:QuestionnaireService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.OnGetById(this.id).subscribe(data => {
      console.log(data)
      this.questionnaire = data;
    },
    error => console.log(error)
    );

  }
  goto(x:number)
  {
    this.page=x;
  }
  score(value:boolean){
    if(value==true){
      this.compteur=this.compteur+1;
    }
    return this.compteur;
  }
}
