import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: "" , component:LoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"logout", component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
