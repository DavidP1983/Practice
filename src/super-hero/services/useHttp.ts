import { useState } from 'react';

export type TStatusOptions = 'idle' | 'loading' | 'error';

// Data access layer - Dal

export const useHttp = <T>(params: string | number) => {
  const [status, setStatus] = useState<TStatusOptions>('idle');

  const fetchingData = async (): Promise<T | undefined> => {
    setStatus('loading');
    try {
      const response = await fetch(
        `https://akabab.github.io/superhero-api/api/${params}`
      );
      if (!response.ok) {
        throw new Error('Error');
      }
      const data = await response.json();
      setStatus('idle');
      return data;
    } catch (e) {
      setStatus('error');
      console.log(e);
    }
  };

  return { fetchingData, status };
};
