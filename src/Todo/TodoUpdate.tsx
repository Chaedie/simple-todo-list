import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from 'react';
import TodoService from '../api/TodoService';
import { TodoContext } from '../contexts/TodoContext';
import { TodoItem } from '../models/TodoItem';

interface Props {
  todoItem: TodoItem;
  setIsClickedUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

function TodoUpdate({ todoItem, setIsClickedUpdate }: Props) {
  const { todoList, setTodoList } = useContext(TodoContext);
  const { id, todo, isCompleted } = todoItem;
  const [updateTodo, setUpdateTodo] = useState({
    id,
    todo,
    isCompleted,
  });

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.target.value === 'true' ? true : false;
    setUpdateTodo(prev => ({ ...prev, isCompleted }));
  };

  const handlePutTodo = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { id, todo, isCompleted } = updateTodo;
      const data = await TodoService.put({ id, todo, isCompleted });
      const newTodoList = todoList.map((todoItem: TodoItem) =>
        todoItem.id === data.id ? data : todoItem
      );
      setTodoList([...newTodoList]);
      setIsClickedUpdate(false);
    },
    [updateTodo, todoList, setTodoList, setIsClickedUpdate]
  );

  return (
    <div className="mg-0_5rem updateContainer">
      <form onSubmit={handlePutTodo}>
        <input
          type="text"
          placeholder="할일"
          onChange={e =>
            setUpdateTodo(prev => ({ ...prev, todo: e.target.value }))
          }
          value={updateTodo.todo}
        />
        <br />
        <label>
          <input
            type="radio"
            onChange={handleChangeRadio}
            checked={updateTodo.isCompleted}
            value="true"
          />
          완료
        </label>
        <label>
          <input
            type="radio"
            onChange={handleChangeRadio}
            checked={!updateTodo.isCompleted}
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
