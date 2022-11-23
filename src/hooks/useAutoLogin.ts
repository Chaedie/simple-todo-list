import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function useAutoLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      alert('자동 로그인 되었습니다.');
      navigate('/todo');
    }
  }, [navigate]);

  return navigate;
}

export default useAutoLogin;
