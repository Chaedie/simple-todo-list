import { ChangeEvent, useMemo, useState } from 'react';

function useForm(isLoginPage: boolean) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const { email, password, passwordConfirm } = inputs;

  const isValid = useMemo(() => {
    const isValidLogin = email.includes('@') && password.length >= 8;
    const isValidSignin = isValidLogin && password === passwordConfirm;

    return isLoginPage ? isValidLogin : isValidSignin;
  }, [email, password, passwordConfirm, isLoginPage]);

  return { inputs, handleChangeInputs, isValid };
}

export default useForm;
