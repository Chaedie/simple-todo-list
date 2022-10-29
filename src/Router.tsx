import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import TodoStore from './Todo/TodoStore';

function Router() {
  return (
    <BrowserRouter basename="/simple-todo-list">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<TodoStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
