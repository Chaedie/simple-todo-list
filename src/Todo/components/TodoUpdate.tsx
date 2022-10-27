import { ChangeEvent, FormEvent } from 'react';
import { putTodo } from '../../api/todo';
import { TodoItem, TodoItemWithUserId } from '../../models/TodoItem';

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
  updateTodoInfo: TodoItem;
  setUpdateTodoInfo: React.Dispatch<React.SetStateAction<TodoItem>>;
  setIsClickedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.target.value === 'true' ? true : false;
    setUpdateTodoInfo(prev => ({ ...prev, isCompleted }));
  };

  const updateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchData = async () => {
      const { id, todo, isCompleted } = updateTodoInfo;
      const data = await putTodo(token, { id, todo, isCompleted });
      const newTodoList = todoList.map((todoItem: TodoItem) => (todoItem.id === data.id ? data : todoItem));
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
          onChange={e => setUpdateTodoInfo(prev => ({ ...prev, todo: e.target.value }))}
          value={updateTodoInfo.todo}
        />
        <br />
        <label>
          <input type="radio" onChange={handleChangeRadio} checked={updateTodoInfo.isCompleted} value="true" />
          완료
        </label>
        <label>
          <input type="radio" onChange={handleChangeRadio} checked={!updateTodoInfo.isCompleted} value="false" />
          미완료
        </label>
        <input type="submit" value="수정!!" />
      </form>
    </div>
  );
}

export default TodoUpdate;
