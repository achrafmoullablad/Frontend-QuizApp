import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {
  id!:number;
  question!:Question|any;
  constructor(private route: ActivatedRoute,private router: Router,private service:QuestionService) { }
  ngOnInit(): void {
    this.question=new Question();
    this.id = this.route.snapshot.params['id'];
    this.service.onGetQuestion(this.id)
    .subscribe(data => {
      console.log(data)
      this.question = data;
    }, error => console.log(error));
  }
  updateQuestion() {
    this.service.onUpdateQuestion(this.id, this.question)
      .subscribe(data => {
        console.log(data);
        this.question=new Question();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateQuestion();
  }
  gotoList() {
    this.router.navigate(['/dashboard']);
  }
}
