import React, { createContext } from 'react';
import { TodoItem } from '../models/TodoItem';

interface TodoContextInterface {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  errors: boolean;
}

const initValues = {
  todoList: [],
  setTodoList: () => {},
  todoInput: '',
  setTodoInput: () => {},
  isLoading: false,
  errors: false,
};

export const TodoContext = createContext<TodoContextInterface>(initValues);
