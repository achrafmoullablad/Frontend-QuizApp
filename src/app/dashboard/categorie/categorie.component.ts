import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Categorie } from 'src/app/models/categorie';
import { Question } from 'src/app/models/question';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public categorie:any;
  public question:any;
  public reponse:any;
  submitted = false;
  quest:Question=new Question();
  cat:Categorie=new Categorie();
  constructor(private service:CategorieService,private questionservice:QuestionService,private reponseservice:ReponseService,private router: Router) {
   }
  ngOnInit(): void {
    this.service.getCategorie().subscribe(
      data=>{
        this.categorie=data;
        console.log(data)
      },err=>{console.log(err);}
    );
    this.cat=new Categorie();
    this.quest=new Question();
    this.submitted=false;
  }
  onGetQuestion(id:number){
    this.service.getQuestionbyIdCategorie(id).subscribe(
      data=>{
        this.question=data,
        console.log(data)
      },err=>{console.log(err);}
    )
  }
  //for the question:
  saveQuestion() {
    this.questionservice.onCreateQuestion(this.quest).pipe(first()).
      subscribe(data => {
       console.log(data);
      },
    error => console.log(error));
  }
  onSubmit() {
    this.saveQuestion();
    this.submitted = true;
  }
  gotoList() {
    this.router.navigate(['dashboard']);
  }
  //SweetAlert
  confirmDeleting(){
    Swal.fire({
      title:'Are you sur',
      text:'You will not be able to recover this file!',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes Delete it',
      cancelButtonText:'No Keep it'
      }).then((result) => {
        if(result.value) {
          Swal.fire("Deleted","Your file has been deleted","success")
        }
    })
  }

  deleteQuestion(id: number){
    this.questionservice.onDeleteQuestion(id).subscribe(
      data => {
        console.log(data);
        this.confirmDeleting();
        this.gotoList()
      },
      error => console.log(error));
  }
  updateQuestion(id:number){
    this.router.navigate(['update', id]);
  }

  onCreateCategorie(){
    this.service.CreateCategorie(this.cat).pipe(first()).
    subscribe(
      data => {console.log(data);}, error => console.log("erreur.."+error));

  }
  onSubmitCategorie(){
    this.submitted = true;
    this.onCreateCategorie();
    this.gotoList();
  }
  updatequestion(id: number){
    this.router.navigate(['updatequestion', id]);
  }
  saveReponse(){
    this.reponseservice.onCreateReponse(this.reponse).pipe(first()).
    subscribe(data => {
     console.log(data);
    },
  error => console.log(error));
  }
  OndeleteCategorie(id:number){
    this.service.deleteCategorie(id).subscribe(
      data => {console.log(data);}, error => console.log("erreur.."+error));
    this.router.navigate(['categorie']);
  }
}
