import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { PostsComponent } from './components/posts/posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostsComponent,
    SinglePostComponent,
    LoginComponent,
    AddPostComponent,
    NavbarComponent,
    ProfileComponent,
    LogoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
