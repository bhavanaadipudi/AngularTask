import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
           
          {path: 'login', component: LoginComponent},
          {path: 'dashboard', component: DashboardComponent},
          { path: 'todo', component: TodoComponent},
          { path: 'task', component: TaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
