import { Box, ListItem, ListItemButton } from '@mui/material';
import { Todo } from 'src/model/Todo';

interface Props {
  todoItem: Todo;
}

function TodoItem({ todoItem }: Props) {
  const { id, todo, isCompleted } = todoItem;
  return (
      <ListItem>
        <ListItemButton>
          {id} {todo} {isCompleted}
        </ListItemButton>
      </ListItem>
  );
}

export default TodoItem;
