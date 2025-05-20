import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { SeoSectionComponent } from './seo-section/seo-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    FeaturesComponent,
    SeoSectionComponent   // add your component here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
