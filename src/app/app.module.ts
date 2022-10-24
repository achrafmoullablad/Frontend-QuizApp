import { Component, NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { CategorieComponent } from './dashboard/categorie/categorie.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsComponent } from './dashboard/questions/questions.component';
import { QuestionnaireComponent } from './dashboard/questionnaire/questionnaire.component';
import { UtilisateurComponent } from './dashboard/utilisateur/utilisateur.component';
import { UpdatequestionComponent } from './dashboard/updatequestion/updatequestion.component';
import { ReponseComponent } from './dashboard/reponse/reponse.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BoardUserComponent } from './auth/board-user/board-user.component';
import { BoardModeratorComponent } from './auth/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './auth/board-admin/board-admin.component';
import { authInterceptorProviders } from './auth/service/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/service/auth.service';
import { TestComponent } from './dashboard/test/test.component';

//Add routing:
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent},
  { path: 'categorie', component: CategorieComponent},
  { path: 'questions', component: QuestionsComponent},
  { path: 'questionnaire', component: QuestionnaireComponent},
  { path: 'utilisateur', component: UtilisateurComponent},
  { path: 'dashboard', component: WelcomeComponent},
  { path: 'reponse', component: ReponseComponent},
  { path: 'updatequestion/:id', component: UpdatequestionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'test/:id', component: TestComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    WelcomeComponent,
    CategorieComponent,
    QuestionsComponent,
    QuestionnaireComponent,
    UtilisateurComponent,
    UpdatequestionComponent,
    ReponseComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
