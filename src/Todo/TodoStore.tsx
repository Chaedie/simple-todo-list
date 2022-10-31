import { PropsWithChildren, useContext, useState } from 'react';
import TodoInput from './TodoInput';
import useRedirectToMain from '../hooks/useRedirectToMain';
import TodoList from './TodoList';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { TodoContext } from '../contexts/TodoContext';
import { TodoItem } from '../models/TodoItem';
import useFetch from '../hooks/useFetch';
import TodoService from '../api/TodoService';

function TodoProvider({ children }: PropsWithChildren) {
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const { isLoading, errors } = useFetch(setTodoList, TodoService.get);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        todoInput,
        setTodoInput,
        isLoading,
        errors,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function TodoStore() {
  const { isLoading, errors } = useContext(TodoContext);
  const token = localStorage.getItem('token');
  useRedirectToMain(token);

  if (errors) {
    return <Error />;
  }

  return (
    <TodoProvider>
      <div className="TodoList modal">
        <Header />

        <TodoInput />

        {isLoading ? <Loading /> : <TodoList />}
      </div>
    </TodoProvider>
  );
}
export default TodoStore;
