import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UsersComponent } from './components/users/users.component';
import { UserRouteComponent } from './components/user-route/user-route.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { GalaryComponent } from './components/galary/galary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent,
    UsersComponent,
    UserRouteComponent,
    IndexComponent,
    LoginComponent,
    GalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
