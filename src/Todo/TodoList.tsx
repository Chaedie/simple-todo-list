import { useCallback, useContext, useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import TodoService from '../api/TodoService';
import { TodoContext } from '../contexts/TodoContext';
import { toggleState } from '../utils/utils';
import TodoUpdate from './TodoUpdate';
import './Todo.scss';

function TodoList() {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [isClickedUpdate, setIsClickedUpdate] = useState(false);
  const [isClickedDelete, setIsClickedDelete] = useState(false);

  const handleDeleteTodo = useCallback(
    async (id: number) => {
      await TodoService.delete({ id });
      const newTodoList = todoList.filter(x => x.id !== id);
      setTodoList([...newTodoList]);
      setIsClickedDelete(false);
    },
    [todoList, setTodoList]
  );

  return (
    <div className="TodoList">
      {todoList.map(todoItem => {
        const { id, todo, isCompleted } = todoItem;
        return (
          <div key={id} className="Todo mg-0_5rem">
            <span>
              {isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </span>
            <span className={isCompleted ? 'completed' : ''}>할일: {todo}</span>
            <div className="buttons">
              <button onClick={() => toggleState(setIsClickedUpdate)}>
                수정
              </button>
              <button onClick={() => toggleState(setIsClickedDelete)}>
                삭제
              </button>
            </div>
            {isClickedUpdate && (
              <TodoUpdate
                todoItem={todoItem}
                setIsClickedUpdate={setIsClickedUpdate}
              />
            )}
            {isClickedDelete && (
              <div>
                <button onClick={() => handleDeleteTodo(id)}>
                  정말로 삭제하시겠어요?
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
