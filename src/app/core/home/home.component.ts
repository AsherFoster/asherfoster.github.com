import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const repoApiUrl = 'https://api.github.com/users/asherfoster/repos?sort=updated';

interface GithubRepo {
  id: string;
  html_url: string;
  name: string;
  description: string;
  shortenedDescription: string;
}

@Component({
  selector: 'af-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repoObservable: Observable<GithubRepo[]>;
  constructor(private http: Http) { }

  ngOnInit() {
    this.repoObservable = this.http.get(repoApiUrl)
      .map(res => {
        const repoList = res.json();
        repoList.forEach(repo => {
          if (repo.description && repo.description.length > 80) {
            repo.shortenedDescription = repo.description.substr(0, 80) + '...';
          }
        }
        );
        return repoList;
      });
  }

}
