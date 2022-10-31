import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Item from './Item';

function TodoList() {
  const { todoList } = useContext(TodoContext)!;

  return (
    <div className="TodoList">
      {todoList.map(todoItem => {
        return <Item key={todoItem.id} todoItem={todoItem} />;
      })}
    </div>
  );
}

export default TodoList;
