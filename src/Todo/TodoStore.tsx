import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoService from '../api/TodoService';
import TodoInput from './TodoInput';
import { TodoItem } from '../models/TodoItem';
import useRedirectToMain from '../hooks/useRedirectToMain';
import TodoList from './TodoList';

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

export const TodoContext = React.createContext<TodoContextInterface>(initValues);

function TodoStore() {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const todoInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const getTodoList = useCallback(async () => {
    const data = await TodoService.get();
    setTodoList([...data]);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <TodoContext.Provider value={{ todoList, setTodoList, todoInput, setTodoInput }}>
      <div className="TodoList modal">
        <header>
          <h1 className="mg-0_5rem">TodoList</h1>
          <button className="mg-0_5rem" onClick={handleLogout}>
            Logout
          </button>
        </header>
        <TodoInput appendTodo={appendTodo} todoInputRef={todoInputRef} />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
export default TodoStore;
