import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Todo from './Todo/Todo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
