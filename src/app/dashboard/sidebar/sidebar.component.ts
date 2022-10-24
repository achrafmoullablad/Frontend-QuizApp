import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/service/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
  logout(){
    this.token.signOut();
    this.router.navigate(['login'])
  }
}
