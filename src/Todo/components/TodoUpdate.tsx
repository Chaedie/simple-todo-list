import { ChangeEvent, FormEvent } from 'react';
import { API } from '../../api/todo';
import { TodoItem, TodoItemWithoutUserId } from '../../models/TodoItem';

function TodoUpdate({
  token,
  todoList,
  setTodoList,
  updateTodoInfo,
  setUpdateTodoInfo,
  setIsClickedUpdate,
}: {
  token: string | null;
  todoList: TodoItem[];
  setTodoList: Function;
  updateTodoInfo: TodoItemWithoutUserId;
  setUpdateTodoInfo: Function;
  setIsClickedUpdate: Function;
}) {
  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    let isCompleted = e.target.value === 'true' ? true : false;
    setUpdateTodoInfo({ ...updateTodoInfo, isCompleted });
  };

  const updateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchData = async () => {
      const data = await API.putTodo(token, {
        id: updateTodoInfo.id,
        todo: updateTodoInfo.todo,
        isCompleted: updateTodoInfo.isCompleted,
      });
      const newTodoList = todoList.map((x: TodoItem) => (x.id === data.id ? data : x));
      setTodoList([...newTodoList]);
    };
    fetchData();
    setIsClickedUpdate(false);
  };

  return (
    <div className="mg-0_5rem updateContainer">
      <form onSubmit={updateTodo}>
        <input
          type="text"
          placeholder="할일"
          onChange={e => setUpdateTodoInfo({ ...updateTodoInfo, todo: e.target.value })}
          value={updateTodoInfo.todo}
        />
        <br />
        <label>
          <input type="radio" onChange={handleChangeRadio} checked={updateTodoInfo.isCompleted === true} value="true" />
          완료
        </label>
        <label>
          <input
            type="radio"
            onChange={handleChangeRadio}
            checked={updateTodoInfo.isCompleted === false}
            value="false"
          />
          미완료
        </label>
        <input type="submit" value="수정!!" />
      </form>
    </div>
  );
}

export default TodoUpdate;
