import { TodosActions, TodosActionType } from '../actions/todo.actions';
import { Todo } from '../../models/todo';

export const initialState = {};

export function todosReducer(state = initialState, action: TodosActions) {
  switch (action.type) {
    case TodosActionType.GET_TODOS: {
      return { ...state };
    }

    case TodosActionType.GET_TODOS_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (action.payload.length < 1) {
        msgText = 'No data found';
        bgClass = 'bg-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'bg-info';
      }

      return {
        ...state,
        todoList: action.payload,
        message: msgText,
        infoClass: bgClass,
      };
    }

    case TodosActionType.GET_TODOS_FAILED: {
      return { ...state };
    }
  }
}
