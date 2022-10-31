import { useCallback, useContext, useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import TodoService from '../api/TodoService';
import { TodoItem } from '../models/TodoItem';
import { toggleState } from '../utils/utils';
import './Todo.scss';
import { TodoContext } from './TodoStore';
import TodoUpdate from './TodoUpdate';

interface Props {
  todoItem: TodoItem;
}

function Item({ todoItem }: Props) {
  const { todoList, setTodoList } = useContext(TodoContext)!;
  const { id, todo, isCompleted } = todoItem;
  const [isClickedUpdate, setIsClickedUpdate] = useState(false);
  const [isClickedDelete, setIsClickedDelete] = useState(false);
  const [updateTodoInfo, setUpdateTodoInfo] = useState({
    id,
    todo,
    isCompleted,
  });

  const handleDeleteTodo = useCallback(async () => {
    await TodoService.delete({ id: todoItem.id });
    const newTodoList = todoList.filter(x => x.id !== todoItem.id);
    setTodoList([...newTodoList]);

    setIsClickedDelete(false);
  }, [todoItem, todoList, setTodoList]);

  return (
    <div className="Todo mg-0_5rem">
      <span>
        {todoItem.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </span>
      <span className={todoItem.isCompleted ? 'completed' : ''}>
        할일: {todoItem.todo}
      </span>
      <div className="buttons">
        <button onClick={() => toggleState(setIsClickedUpdate)}>수정</button>
        <button onClick={() => toggleState(setIsClickedDelete)}>삭제</button>
      </div>
      {isClickedUpdate && (
        <TodoUpdate
          updateTodoInfo={updateTodoInfo}
          setUpdateTodoInfo={setUpdateTodoInfo}
          setIsClickedUpdate={setIsClickedUpdate}
        />
      )}
      {isClickedDelete && (
        <div>
          <button onClick={handleDeleteTodo}>정말로 삭제하시겠어요?</button>
        </div>
      )}
    </div>
  );
}

export default Item;
