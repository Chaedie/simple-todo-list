import { Backdrop, CircularProgress, List } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { TodoListContext } from 'src/contexts/TodoListContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { todoList, isLoading } = useContext(TodoListContext);

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Box display="flex" flexDirection="column" width="30rem">
      {todoList.map(todoItem => (
        <List sx={style} key={todoItem.id} aria-label="basic-list">
          <TodoItem todoItem={todoItem} />
        </List>
      ))}
    </Box>
  );
}

export default TodoList;

const style = {
  width: '100%',
  justifyContents: 'left',
};
