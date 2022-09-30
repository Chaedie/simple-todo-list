import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import TodoList from './Todo/TodoList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/todo" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
