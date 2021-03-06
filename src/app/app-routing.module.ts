import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './first/first.component';
import {DetailComponent} from "./cv/detail/detail.component";
import {DetailsCvComponent} from "./cv/details-cv/details-cv.component";
import {LoginComponent} from "./login/login.component";
/* color */
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:couleur', component: ColorComponent },
  { path: 'word', component: MiniWordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
