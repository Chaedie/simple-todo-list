import { ChangeEvent, useState } from 'react';

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

  // TODO: 밸리데이션 후 Error 케이스에 맞게 helper Text 생성하기
  const isValid = () => {
    const isValidLogin = email.includes('@') && password.length >= 8;
    const isValidSignin = isValidLogin && password === passwordConfirm;

    return isLoginPage ? isValidLogin : isValidSignin;
  };

  return { inputs, handleChangeInputs, isValid: isValid() };
}

export default useForm;
