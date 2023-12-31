import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './common/services/todos.service';
import { TodoListComponent } from './common/components/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todosReducer } from './common/stores/reducers/todo.reducer';
import { TodosEffects } from './common/stores/effects/todo.effect';
@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    StoreModule.forFeature('todos', todosReducer),

    EffectsModule.forFeature([TodosEffects]),
  ],
  providers: [TodosService],
})
export class ToDoModule {}
