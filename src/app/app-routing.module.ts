import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoModule } from './to-do/to-do.module';
import { TodoListComponent } from './to-do/common/components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
