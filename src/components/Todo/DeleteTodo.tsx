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

function DeleteTodo({ todoItem }: Props) {
  const { setTodoList } = useContext(TodoListContext);
  const [open, setOpen] = useState(false);

  const handleDeleteTodo = async (e: FormEvent) => {
    e.preventDefault();
    await TodoService.deleteTodo(todoItem.id);
    setTodoList(prev => prev.filter(todo => todo.id !== todoItem.id));
    setOpen(false);
  };

  return (
    <>
      <Button name="delete" onClick={() => setOpen(true)} color="warning">
        삭제
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleDeleteTodo} style={{ display: 'flex' }}>
            <Button variant="outlined" type="submit" color="error">
              정말 삭제하시겠습니까? (YES)
            </Button>
            <Box m={1} />
            <Button variant="outlined" onClick={() => setOpen(false)}>
              취소
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteTodo;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
