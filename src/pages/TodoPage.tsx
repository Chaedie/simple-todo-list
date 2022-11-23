import { Button } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import { TodoService } from 'src/apis/TodoService';
import Layout from 'src/components/Layout/Layout';
import TodoInput from 'src/components/Todo/TodoInput';
import TodoList from 'src/components/Todo/TodoList';
import { TodoListContext } from 'src/contexts/TodoListContext';
import useFetch from 'src/hooks/useFetch';
import useHandleToken from 'src/hooks/useHandleToken';
import { Todo } from 'src/model/Todo';

function TodoProvider({ children }: PropsWithChildren) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { isLoading, errors } = useFetch(setTodoList, TodoService.getTodos);

  return (
    <TodoListContext.Provider
      value={{ todoList, setTodoList, isLoading, errors }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

function TodoPage() {
  const setToken = useHandleToken();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <TodoProvider>
      <Layout>
        <Button variant="outlined" onClick={handleLogOut}>
          로그아웃
        </Button>
        <br />
        <TodoInput />
        <br />
        <TodoList />
      </Layout>
    </TodoProvider>
  );
}

export default TodoPage;
