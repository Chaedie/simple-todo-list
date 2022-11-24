import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useState } from 'react';
import { TodoService } from 'src/apis/TodoService';
import { TodoListContext } from 'src/contexts/TodoListContext';
import { Todo } from 'src/model/Todo';

interface Props {
  todoItem: Todo;
}

function UpdateTodo({ todoItem }: Props) {
  const { setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState(todoItem.todo);
  const [isCompleted, setIsCompleted] = useState(todoItem.isCompleted);
  const [open, setOpen] = useState(false);

  const handleUpdateTodo = async (e: FormEvent) => {
    e.preventDefault();
    const res = await TodoService.updateTodo(todoItem.id, todo, isCompleted);

    setTodoList(prev =>
      prev.map((todo: Todo) => (todo.id === res.id ? res : todo))
    );
    setOpen(false);
  };

  return (
    <>
      <Button name="update" onClick={() => setOpen(true)} color="secondary">
        수정
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUpdateTodo} style={{ display: 'flex' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isCompleted}
                  onChange={e => setIsCompleted(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="completed"
            />
            <Box m={1} />
            <TextField
              value={todo}
              onChange={e => setTodo(e.target.value)}
              fullWidth
              autoFocus
            />
            <Box m={1} />
            <Button variant="outlined" type="submit" color="secondary">
              수정
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default UpdateTodo;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
