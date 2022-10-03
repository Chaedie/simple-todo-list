import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Todo from './Todo/Todo';

function Router() {
  return (
    <BrowserRouter basename="/wanted-pre-onboarding-fe-7">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
