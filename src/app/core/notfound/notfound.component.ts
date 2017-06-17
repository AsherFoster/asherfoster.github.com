import { Component } from '@angular/core';

@Component({
  selector: 'af-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
  constructor() { }

  back() {
    history.back();
  }

}
