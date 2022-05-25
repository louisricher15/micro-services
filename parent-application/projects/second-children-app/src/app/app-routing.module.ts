import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstViewComponent} from "./first-view/first-view.component";
import {SecondViewComponent} from "./second-view/second-view.component";

const routes: Routes = [
  { path: 'second/first', component: FirstViewComponent },
  { path: 'second/second', component: SecondViewComponent },
  { path: 'second', redirectTo: 'second/first' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
