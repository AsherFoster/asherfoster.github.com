import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'af-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideNav = false;
  constructor(router: Router) {
    router.events.subscribe(event => {
      this.hideNav = event instanceof NavigationEnd && event.url.startsWith('/experiments/');
    })
  }
}
