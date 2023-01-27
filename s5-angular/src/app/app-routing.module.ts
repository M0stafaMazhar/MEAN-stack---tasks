import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaryComponent } from './components/galary/galary.component';
import { IndexComponent } from './components/index/index.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path:"galary", component:GalaryComponent},
  {path:"count" , component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
