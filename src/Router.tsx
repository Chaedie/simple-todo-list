import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import TodoPage from './pages/TodoPage';

function Router() {
  return (
    <BrowserRouter basename="/simple-todo-list">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
