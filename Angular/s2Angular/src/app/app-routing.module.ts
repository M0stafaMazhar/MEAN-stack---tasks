import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SwitchComponent } from './components/switch/switch.component';

const routes: Routes = [
  {path:"" , component: SwitchComponent},
  {path:"pipes" , component:PipesComponent},
  {path:"posts" , component:PostsComponent},
  {path:"projects" , component:ProjectsComponent},

  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
