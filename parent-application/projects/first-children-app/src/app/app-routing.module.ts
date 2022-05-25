import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstViewComponent} from "./first-view/first-view.component";
import {SecondViewComponent} from "./second-view/second-view.component";

const routes: Routes = [
  { path: 'first/first', component: FirstViewComponent },
  { path: 'first/second', component: SecondViewComponent },
  { path: 'first', redirectTo: 'first/first' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
