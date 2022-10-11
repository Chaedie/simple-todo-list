import { useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { API } from '../../api/todo';
import './TodoItem.scss';
import TodoUpdate from './TodoUpdate';

function TodoItem({ todoItem, todoList, setTodoList }) {
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
      await API.deleteTodo(token, {
        id: todoItem.id,
      });
      const newTodoList = todoList.filter(x => x.id !== todoItem.id);
      setTodoList([...newTodoList]);
    };
    fetchData();
    setIsClickedDelete(false);
  };

  return (
    <div className="TodoItem mg-0_5rem">
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

export default TodoItem;
