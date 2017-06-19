import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'af-experiment-view',
  templateUrl: './experiment-view.component.html',
  styleUrls: ['./experiment-view.component.scss']
})
export class ExperimentViewComponent implements OnInit {
  url: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('/experimentSource/' + this.route.snapshot.params['id']);
  }

}
