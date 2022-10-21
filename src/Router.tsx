import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import TodoList from './Todo/TodoList';

function Router() {
  return (
    <BrowserRouter basename="/simple-todo-list">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
