import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FirstChildrenAppSharedModule} from "../../projects/first-children-app/src/app/app.module";
import {SecondChildrenAppSharedModule} from "../../projects/second-children-app/src/app/app.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstChildrenAppSharedModule.forRoot(),
    SecondChildrenAppSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
