import { ChangeEvent, useState } from 'react';

function useForm(isSignIn: boolean) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { email, password, passwordConfirm } = inputs;

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = { email: '', password: '', passwordConfirm: '' };

    if (isSignIn) {
      if (!email.includes('@')) {
        errors.email = 'email 형식에 맞게입력해주세요.';
      }
      if (password.length < 8) {
        errors.password = '8자리 이상으로 입력해주세요.';
      }
    } else {
      if (!isSignIn && passwordConfirm !== password) {
        errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
      }
    }

    return errors;
  };

  const errors = validate();

  const hasError = {
    email: email.length > 0 && !!errors.email,
    password: password.length > 0 && !!errors.password,
    passwordConfirm: passwordConfirm.length > 0 && !!errors.passwordConfirm,
    inputs: !Object.values(errors).some(error => error !== ''),
  };

  const helperTexts = {
    email: hasError.email && errors.email,
    password: hasError.password && errors.password,
    passwordConfirm: hasError.passwordConfirm && errors.passwordConfirm,
  };

  return { inputs, handleChangeInputs, hasError, helperTexts };
}

export default useForm;
