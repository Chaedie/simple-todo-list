import { useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';

function useRedirectToMain(token: string | null, navigate: NavigateFunction) {
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);
}

export default useRedirectToMain;
