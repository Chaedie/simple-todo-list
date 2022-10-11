import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../api/todo';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function Todo() {
  const token = localStorage.getItem('token');
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  const todoInputRef = useRef();

  const navigate = useNavigate();

  console.log(token);
  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const data = await API.getTodoList(token);
        setTodoList([...data]);
      };
      fetchData();
    }
    if (token === null) {
      navigate('/');
    }
  }, [token, navigate]);

  const appendTodo = e => {
    e.preventDefault();
    todoInputRef.current.focus();
    if (todoInput === '') return;

    const fetchData = async () => {
      const data = await API.postTodo(token, { todo: todoInput });
      setTodoList([...todoList, data]);
    };
    fetchData();
    setTodoInput('');
  };

  return (
    <div className="TodoList modal">
      <header>
        <h1 className="mg-0_5rem">TodoList</h1>
      </header>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        appendTodo={appendTodo}
        todoInputRef={todoInputRef}
      />
      <div className="TodoList">
        {todoList.map(todoItem => {
          return <TodoItem key={todoItem.id} todoList={todoList} setTodoList={setTodoList} todoItem={todoItem} />;
        })}
      </div>
    </div>
  );
}
export default Todo;
