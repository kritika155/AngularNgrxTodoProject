import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { TodosService } from '../../services/todos.service';

import {
  TodosActionType,
  GetTodosSuccess,
  GetTodosFailed,
} from '../actions/todo.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { Todo } from '../../models/todo';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodosService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActionType.GET_TODOS),
      switchMap(() =>
        this.todoService.getAPITodos().pipe(
          map((todos: any) => new GetTodosSuccess(todos)),
          catchError((error) => of(new GetTodosFailed(error)))
        )
      )
    )
  );
}
