import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { TitleComponent } from './title/title.component';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TitleComponent,
  ]
})
export class SharedModule { }
