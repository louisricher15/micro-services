import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstChildrenAppSharedModule} from "../../projects/first-children-app/src/app/app.module";
import {SecondChildrenAppSharedModule} from "../../projects/second-children-app/src/app/app.module";

const routes: Routes = [
  { path: 'first', loadChildren: '../../projects/first-children-app/src/app/app.module#FirstChildrenAppSharedModule' },
  { path: 'second', loadChildren: '../../projects/second-children-app/src/app/app.module#SecondChildrenAppSharedModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FirstChildrenAppSharedModule.forRoot(), SecondChildrenAppSharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
