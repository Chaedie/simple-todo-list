import { Box, ListItem, ListItemButton, Typography } from '@mui/material';
import { TodoWithInfo } from 'src/model/Todo';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface Props {
  todoItem: TodoWithInfo;
}

function TodoItem({ todoItem }: Props) {
  const { todo, isCompleted } = todoItem;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: 6,
        flexWrap: 'wrap',
      }}
    >
      <ListItem>
        <ListItemButton sx={{ wordWrap: 'wrap' }}>
          {isCompleted ? (
            <CheckBoxIcon color="primary" />
          ) : (
            <CheckBoxOutlineBlankIcon />
          )}
          <Box m={1} />
          <Typography
            sx={{ textDecoration: isCompleted ? 'line-through' : '' }}
          >
            {todo}
          </Typography>
        </ListItemButton>
        <UpdateTodo todoItem={todoItem} />
        <DeleteTodo todoItem={todoItem} />
      </ListItem>
    </Box>
  );
}

export default TodoItem;
