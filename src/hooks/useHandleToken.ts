import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useHandleToken() {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return setToken;
}

export default useHandleToken;
