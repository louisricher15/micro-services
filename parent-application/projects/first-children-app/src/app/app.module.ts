import {ModuleWithProviders, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { ViewBridgeComponent } from './view-bridge/view-bridge.component';

const providers: any[] = [];

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SecondViewComponent,
    ViewBridgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers,
  exports: [
    ViewBridgeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class FirstChildrenAppSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers
    }
  }
}
