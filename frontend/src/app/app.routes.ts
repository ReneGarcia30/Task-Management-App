import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewTabComponent } from './new-tab/new-tab.component';
import { TodoComponent } from './todo/todo.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-tab', component: NewTabComponent },
  { path: 'todo', component: TodoComponent }
];
