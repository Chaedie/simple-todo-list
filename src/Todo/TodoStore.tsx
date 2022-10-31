import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
}

const initValues = {
  todoList: [],
  setTodoList: () => {},
  todoInput: '',
  setTodoInput: () => {},
};

export const TodoContext =
  React.createContext<TodoContextInterface>(initValues);

function TodoStore() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const { isLoading, errors } = useFetch(setTodoList, TodoService.get);

  const todoInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useRedirectToMain(token, navigate);

  const appendTodo = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (todoInputRef.current !== null) {
        todoInputRef.current.focus();
      }
      if (todoInput === '') return;

      const data = await TodoService.post({ todo: todoInput });
      setTodoList(prev => [...prev, data]);
      setTodoInput('');
    },
    [todoInputRef, todoInput]
  );

  if (errors) {
    return <Error />;
  }

  return (
    <TodoContext.Provider
      value={{ todoList, setTodoList, todoInput, setTodoInput }}
    >
      <div className="TodoList modal">
        <Header />

        <TodoInput appendTodo={appendTodo} todoInputRef={todoInputRef} />

        {isLoading ? <Loading /> : <TodoList />}
      </div>
    </TodoContext.Provider>
  );
}
export default TodoStore;
