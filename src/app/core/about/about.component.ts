import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'af-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  toast(message: string) {
    this.snackbar.open(message, '', {duration: 1000})
  }

  ngOnInit() {
  }

}
