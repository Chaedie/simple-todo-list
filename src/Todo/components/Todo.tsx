import { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { todoAPI } from '../../api/todo';
import { TodoItem } from '../../models/TodoItem';
import './Todo.scss';
import TodoUpdate from './TodoUpdate';

function Todo({
  todoItem,
  todoList,
  setTodoList,
}: {
  todoItem: TodoItem;
  todoList: TodoItem[];
  setTodoList: Function;
}) {
  const token = localStorage.getItem('token');
  const [isClickedUpdate, setIsClickedUpdate] = useState(false);
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const [updateTodoInfo, setUpdateTodoInfo] = useState({
    id: todoItem.id,
    todo: todoItem.todo,
    isCompleted: todoItem.isCompleted,
  });

  const toggleUpdate = () => setIsClickedUpdate(prev => !prev);
  const toggleDelete = () => setIsClickedDelete(prev => !prev);

  const deleteTodo = () => {
    const fetchData = async () => {
      if (token) {
        await todoAPI.deleteTodo(token, {
          id: todoItem.id,
        });
        const newTodoList = todoList.filter(x => x.id !== todoItem.id);
        setTodoList([...newTodoList]);
      }
    };

    fetchData();
    setIsClickedDelete(false);
  };

  return (
    <div className="Todo mg-0_5rem">
      <span>{todoItem.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</span>
      <span className={todoItem.isCompleted ? 'completed' : ''}>할일: {todoItem.todo}</span>
      <div className="buttons">
        <button onClick={toggleUpdate}>수정</button>
        <button onClick={toggleDelete}>삭제</button>
      </div>
      {isClickedUpdate && (
        <TodoUpdate
          token={token}
          todoList={todoList}
          setTodoList={setTodoList}
          updateTodoInfo={updateTodoInfo}
          setUpdateTodoInfo={setUpdateTodoInfo}
          setIsClickedUpdate={setIsClickedUpdate}
        />
      )}
      {isClickedDelete && (
        <div>
          <button onClick={deleteTodo}>정말로 삭제하시겠어요?</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
