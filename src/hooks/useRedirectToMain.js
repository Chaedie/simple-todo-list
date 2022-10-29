import { useEffect } from 'react';

function useRedirectToMain(token, navigate) {
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);
}

export default useRedirectToMain;
