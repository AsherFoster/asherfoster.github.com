import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TitleComponent,
  ]
})
export class SharedModule { }
