import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
const repoApiUrl = 'https://api.github.com/users/asherfoster/repos?sort=updated';

interface GithubRepo {
  id: string;
  html_url: string;
  name: string;
  description: string;
  shortenedDescription: string;
}

interface HomepageThing {
  description: string;
  image?: string;
  title: string;
  actions: ([string, string, boolean]|[string, string])[];
}

@Component({
  selector: 'af-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly things: HomepageThing[] = [
    {
      title: 'Crappy physics',
      description: 'I got bored and tried to make a ball bounce up and down with HTML canvas. It didn\'t go well.',
      actions: [
        ['See the horror', '/experiments/7', true]
      ]
    },
    {
      title: 'Minesweeper',
      description: 'I thought making minesweeper might be interesting. Here we are.',
      actions: [
        ['Why would you want to play it?', '/experiments/8', true]
      ]
    },
    {
      title: 'Developster',
      description: 'A while back, I went through quite the journey with an amazing team as we tried building ' +
        'a startup by and for teens. Didn\'t quite take off, because, you know, school, so it\'s currently lying dormant',
      actions: [
        ['Have a look at the blog', 'https://medium.com/developster-archive']
      ]
    }
  ];
  repoObservable: Observable<GithubRepo[]>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.repoObservable = this.http.get<GithubRepo[]>(repoApiUrl).pipe(
      map(repoList => {
        // const repoList = res.json();
        repoList.forEach(repo => {
          if (repo.description && repo.description.length > 80) {
            repo.shortenedDescription = repo.description.substr(0, 80) + '...';
          }
        }
        );
        return repoList;
      })
    );
  }

}
