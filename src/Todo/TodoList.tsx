import { useContext } from 'react';
import Item from './Item';
import { TodoContext } from './TodoStore';

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
