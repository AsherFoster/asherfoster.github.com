import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {SharedModule} from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpModule} from '@angular/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [HomeComponent, AboutComponent, HeaderComponent, FooterComponent, NotfoundComponent],
  exports: [
    SharedModule,
    CommonModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
