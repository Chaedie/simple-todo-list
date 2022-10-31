import { useCallback, useContext, useRef } from 'react';
import TodoService from '../api/TodoService';
import { TodoContext } from '../contexts/TodoContext';

function TodoInput() {
  const { todoInput, setTodoInput, setTodoList } = useContext(TodoContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const appendTodo = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (todoInputRef.current !== null) {
        todoInputRef.current.focus();
      }
      if (todoInput === '') return;

      const data = await TodoService.post({ todo: todoInput });
      setTodoList(prev => [...prev, data]);
      setTodoInput('');
    },
    [todoInputRef, todoInput, setTodoInput, setTodoList]
  );

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
