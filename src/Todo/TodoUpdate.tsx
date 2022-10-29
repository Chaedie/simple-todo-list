import { ChangeEvent, FormEvent, useCallback, useContext } from 'react';
import TodoService from '../api/TodoService';

import { TodoItem } from '../models/TodoItem';
import { TodoContext } from './TodoStore';

function TodoUpdate({
  updateTodoInfo,
  setUpdateTodoInfo,
  setIsClickedUpdate,
}: {
  updateTodoInfo: TodoItem;
  setUpdateTodoInfo: React.Dispatch<React.SetStateAction<TodoItem>>;
  setIsClickedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { todoList, setTodoList } = useContext(TodoContext)!;
  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.target.value === 'true' ? true : false;
    setUpdateTodoInfo(prev => ({ ...prev, isCompleted }));
  };

  const updateTodo = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { id, todo, isCompleted } = updateTodoInfo;
      const data = await TodoService.put({ id, todo, isCompleted });
      const newTodoList = todoList.map((todoItem: TodoItem) => (todoItem.id === data.id ? data : todoItem));

      setTodoList([...newTodoList]);
      setIsClickedUpdate(false);
    },
    [updateTodoInfo, todoList, setTodoList, setIsClickedUpdate]
  );

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
