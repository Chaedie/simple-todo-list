import { FormEventHandler, RefObject, useContext } from 'react';
import { TodoContext } from './TodoStore';

interface Props {
  appendTodo: FormEventHandler;
  todoInputRef: RefObject<HTMLInputElement>;
}

function TodoInput({ appendTodo, todoInputRef }: Props) {
  const { todoInput, setTodoInput } = useContext(TodoContext)!;

  return (
    <div className="TodoInput">
      <h3>TodoInput: {todoInput}</h3>
      <br />
      <form onSubmit={appendTodo}>
        <input
          type="text"
          onChange={e => setTodoInput(e.target.value)}
          placeholder="추가할 Todo를 입력해주세요."
          value={todoInput}
          ref={todoInputRef}
          autoFocus
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default TodoInput;
