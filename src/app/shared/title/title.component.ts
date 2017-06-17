import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'af-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  backgroundString: string;
  @Input() set background(val){
    this.backgroundString = `url(${val})`;
  }
  constructor() { }

  ngOnInit() {
  }

}
