import { useEffect, useMemo, useState } from 'react';
import { Observable } from './observable';

export const useSetupCount = (data: number) => {
  const [state, setState] = useState(data);

  const counter = useMemo(() => new Observable(data), [data]);

  useEffect(() => {
    let isEffect = false;
    if (!isEffect) {
      counter.subscribe(() => {
        setState(counter.state);
      });
    }
    return () => {
      isEffect = true;
    };
  }, [counter]);

  const increment = () => {
    counter.state++;
    counter.notify();
  };

  const decrement = () => {
    counter.state--;
    counter.notify();
  };

  return { counter, increment, decrement, state };
};
