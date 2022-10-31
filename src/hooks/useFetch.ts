import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

const useFetch = (
  setState: Dispatch<SetStateAction<any>>,
  apiCallback: Function
) => {
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
