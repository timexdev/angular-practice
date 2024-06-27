import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {HttpClientModule} from '@angular/common/http';
import { GithubUsersComponent } from './github-users/github-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    SignUpComponent,
    SignInComponent,
    WildcardComponent,
    ViewTaskComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
