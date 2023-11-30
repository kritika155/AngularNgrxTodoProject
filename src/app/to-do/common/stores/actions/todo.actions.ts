import { Action } from '@ngrx/store';
import { Todo } from '../../models/todo';

export enum TodosActionType {
  GET_TODOS = 'GET_TODOS',
  GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
  GET_TODOS_FAILED = 'GET_TODOS_FAILED',
}

export class GetTodos implements Action {
  readonly type = TodosActionType.GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = TodosActionType.GET_TODOS_SUCCESS;
  constructor(public payload: Array<Todo>) {}
}

export class GetTodosFailed implements Action {
  readonly type = TodosActionType.GET_TODOS_FAILED;
  constructor(public payload: string) {}
}

export type TodosActions = GetTodos | GetTodosSuccess | GetTodosFailed;
