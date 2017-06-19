import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentViewComponent } from './experiment-view/experiment-view.component';
import {ExperimentsRoutingModule} from './experiments-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ExperimentsRoutingModule
  ],
  declarations: [ExperimentsComponent, ExperimentViewComponent]
})
export class ExperimentsModule { }
