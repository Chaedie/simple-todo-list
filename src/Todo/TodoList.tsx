import { TodoItem } from '../models/TodoItem';
import Item from './Item';

function TodoList({
  todoList,
  setTodoList,
}: {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}) {
  return (
    <div className="TodoList">
      {todoList.map(todoItem => {
        return <Item key={todoItem.id} todoList={todoList} setTodoList={setTodoList} todoItem={todoItem} />;
      })}
    </div>
  );
}

export default TodoList;
