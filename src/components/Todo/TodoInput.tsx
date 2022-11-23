import { Button, TextField } from '@mui/material';
import { FormEvent, useContext, useState } from 'react';
import { TodoService } from 'src/apis/TodoService';
import { TodoListContext } from 'src/contexts/TodoListContext';

function TodoInput() {
  const { setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');
  const createTodo = async (e: FormEvent) => {
    e.preventDefault();
    const data = await TodoService.createTodo(todo);
    setTodoList(prev => [...prev, data]);
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={createTodo}>
      <TextField
        type="text"
        name="todo"
        label="todo"
        variant="outlined"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        autoFocus
      />
      <Button variant="outlined" type="submit">
        할일 추가
      </Button>
    </form>
  );
}

export default TodoInput;
