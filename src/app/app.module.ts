import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';

import 'hammerjs';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('/assets/github-mark.svg'));
    iconRegistry.addSvgIcon('github-white', sanitizer.bypassSecurityTrustResourceUrl('/assets/github-mark-white.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('/assets/twitter-mark.svg'));
  }
}
