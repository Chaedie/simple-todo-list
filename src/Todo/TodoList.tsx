import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { todoAPI } from '../api/todo';
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';
import { TodoItem } from '../models/TodoItem';

function TodoList() {
  const token = localStorage.getItem('token');
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const data = await todoAPI.getTodoList(token);
        setTodoList([...data]);
      };
      fetchData();
    } else {
      navigate('/');
    }
  }, [token, navigate]);

  const appendTodo = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    todoInputRef.current!.focus();
    if (todoInput === '') return;

    const fetchData = async () => {
      const data = await todoAPI.postTodo(token, { todo: todoInput });
      setTodoList([...todoList, data]);
    };
    fetchData();
    setTodoInput('');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="TodoList modal">
      <header>
        <h1 className="mg-0_5rem">TodoList</h1>
        <button className="mg-0_5rem" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        appendTodo={appendTodo}
        todoInputRef={todoInputRef}
      />
      <div className="TodoList">
        {todoList.map(todoItem => {
          return <Todo key={todoItem.id} todoList={todoList} setTodoList={setTodoList} todoItem={todoItem} />;
        })}
      </div>
    </div>
  );
}
export default TodoList;
