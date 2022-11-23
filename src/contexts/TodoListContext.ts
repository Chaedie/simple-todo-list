import { createContext } from 'react';
import { Todo } from 'src/model/Todo';

interface TodoListContextInterface {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  isLoading: boolean;
  errors: boolean;
}

const initValues = {
  todoList: [],
  setTodoList: () => {},
  isLoading: false,
  errors: false,
};

export const TodoListContext =
  createContext<TodoListContextInterface>(initValues);
