import { useEffect, useState } from 'react';
import { API } from '../api/todo';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function Todo() {
  const token = localStorage.getItem('token');
  const [todoInput, setTodoInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.getTodoList(token);
      setTodoList([...data]);
    };
    fetchData();
  }, [token]);

  const appendTodo = e => {
    e.preventDefault();
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
      />
      <div className="TodoList">
        {todoList.map(todoItem => {
          return (
            <TodoItem
              key={todoItem.id}
              todoList={todoList}
              setTodoList={setTodoList}
              todoItem={todoItem}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Todo;
