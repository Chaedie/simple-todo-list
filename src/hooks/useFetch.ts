import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

type SetState = Dispatch<SetStateAction<any>>;

const useFetch = (setState: SetState, apiCallback: Function) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleFetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await apiCallback();
      setState(data);
    } catch (error) {
      setErrors(true);
    } finally {
      setIsLoading(false);
    }
  }, [setState, apiCallback]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return { isLoading, errors };
};

export default useFetch;
