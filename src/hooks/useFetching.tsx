import { useState } from 'react';

type CallbackType = () => Promise<void>;
type FetchingReturnType = [() => Promise<void>, boolean, Error | null];

export const useFetching = (callback: CallbackType): FetchingReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Error | null>(null);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      if (e instanceof Error) {
        setIsError(new Error(`${e.name} ${e.message}`));
      } else {
        setIsError(new Error('An unknown error occurred.'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, isError];
};
