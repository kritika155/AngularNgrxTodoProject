import { NgModule } from '@angular/core';
import { TodoListComponent } from './common/components/todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoRoutingModule {}
