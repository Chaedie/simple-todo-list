import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useRedirectToMain(token: string | null) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);
}

export default useRedirectToMain;
