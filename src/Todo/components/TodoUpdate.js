import { API } from '../../api/todo';

function TodoUpdate({
  token,
  todoList,
  setTodoList,
  updateTodoInfo,
  setUpdateTodoInfo,
  setIsClickedUpdate,
}) {
  const handleChangeRadio = e => {
    let isCompleted = e.target.value === 'true' ? true : false;
    setUpdateTodoInfo({ ...updateTodoInfo, isCompleted });
  };

  const updateTodo = e => {
    e.preventDefault();
    const fetchData = async () => {
      const data = await API.putTodo(token, {
        id: updateTodoInfo.id,
        todo: updateTodoInfo.todo,
        isCompleted: updateTodoInfo.isCompleted,
      });
      const newTodoList = todoList.map(x => (x.id === data.id ? data : x));
      setTodoList([...newTodoList]);
    };
    fetchData();
    setIsClickedUpdate(false);
  };

  return (
    <div className="mg-0_5rem updateContainer">
      <form onSubmit={updateTodo}>
        <input
          type="text"
          placeholder="할일"
          onChange={e =>
            setUpdateTodoInfo({ ...updateTodoInfo, todo: e.target.value })
          }
          value={updateTodoInfo.todo}
        />
        <br />
        <input
          type="radio"
          onChange={handleChangeRadio}
          checked={updateTodoInfo.isCompleted === true}
          value={true}
        />
        <label>완료</label>
        <input
          type="radio"
          onChange={handleChangeRadio}
          checked={updateTodoInfo.isCompleted === false}
          value={false}
        />
        <label>미완료</label>
        <input type="submit" value="수정!!" />
      </form>
    </div>
  );
}

export default TodoUpdate;
