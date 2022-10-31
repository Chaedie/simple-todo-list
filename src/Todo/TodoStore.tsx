import React, { useCallback, useRef, useState } from 'react';
import TodoService from '../api/TodoService';
import TodoInput from './TodoInput';
import { TodoItem } from '../models/TodoItem';
import useRedirectToMain from '../hooks/useRedirectToMain';
import TodoList from './TodoList';
import Header from '../components/Header';
import Error from '../components/Error';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';

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

export const TodoContext =
  React.createContext<TodoContextInterface>(initValues);

function TodoStore() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const { isLoading, errors } = useFetch(setTodoList, TodoService.get);


  const token = localStorage.getItem('token');
  useRedirectToMain(token);

  if (errors) {
    return <Error />;
  }

  return (
    <TodoContext.Provider
      value={{ todoList, setTodoList, todoInput, setTodoInput }}
    >
      <div className="TodoList modal">
        <Header />

        <TodoInput />

        {isLoading ? <Loading /> : <TodoList />}
      </div>
    </TodoContext.Provider>
  );
}
export default TodoStore;
