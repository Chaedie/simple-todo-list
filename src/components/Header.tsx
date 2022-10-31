import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header>
      <h1 className="mg-0_5rem">TodoList</h1>
      <button className="mg-0_5rem" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}

export default Header;
