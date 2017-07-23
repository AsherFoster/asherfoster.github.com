import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss']
})
export class ExperimentsComponent implements OnInit {
  experiments = new Array(7);

  constructor() { }

  ngOnInit() {
  }

}
