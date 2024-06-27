import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {
  constructor (public http:  HttpClient) {};

  public githubUsersArray:any = [];

  ngOnInit (): void {
   let getGitHubUsers = this.http.get<any>("https://api.github.com/users");
   getGitHubUsers.subscribe(data => {
    this.githubUsersArray = data;
   })
  }
}
