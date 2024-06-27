import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { taskGuard } from './guards/task.guard';
import { ViewTaskComponent } from './view-task/view-task.component';
import { GithubUsersComponent } from './github-users/github-users.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"signin", component: SignInComponent},
  {path:"signup", component: SignUpComponent},
  {path:"addtask", component: AddTaskComponent, canActivate: [taskGuard]},
  {path:"addtask/:id", component:ViewTaskComponent},
  {path:"githubusers", component:GithubUsersComponent},

  {path:"**", component: WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
