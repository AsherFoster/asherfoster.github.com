/**
 * Created by asher on 19/06/17.
 */
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperimentsComponent} from './experiments/experiments.component'
import {ExperimentViewComponent} from './experiment-view/experiment-view.component'

const experimentRoutes: Routes = [
  { path: '',  component: ExperimentsComponent },
  { path: ':id', component: ExperimentViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(experimentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExperimentsRoutingModule { }
