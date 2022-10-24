import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/service/token-storage.service';
import { Email } from 'src/app/models/email';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { SendemailService } from 'src/app/services/sendemail.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  public quest:any;
  currentUser: any;
  public mails:any;
  public questionnaire:Questionnaire=new Questionnaire();
  public email:Email=new Email();
  constructor(private servicequest:QuestionnaireService,private servicemail:SendemailService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.servicequest.OnGetAll().subscribe(data=>{this.quest=data;},err=>console.log(err));
    this.email=new Email();
    this.currentUser = this.token.getUser();
    this.mails=this.servicemail.getallmails().subscribe(data=>{this.mails=data;},err=>console.log(err));
  }
  sendEmail(){
    this.email.fromuser=this.currentUser.email;
    this.servicemail.sendmail(this.email).subscribe(data=>{console.log(data);},err=>console.log(err));
    this.confirm();
  }
  confirm(){
    Swal.fire({
      title:'Are you sur to send this mail?',
      text:'You will not be able to recover this mail !',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Yes Send it',
      cancelButtonText:'No Keep it'
      }).then((result) => {
        if(result.value) {
          Swal.fire("Send","Your mail has been submited","success")
        }
    })
  }
}
