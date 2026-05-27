import { useEffect, useRef } from 'react';
import { useSetupCount } from './setup-counter';

export const Main = () => {
  const { counter, increment, decrement, state } = useSetupCount(0);
  const unscribe = useRef<(() => void)[]>([]);

  useEffect(() => {
    const log = () => console.log(counter.state, 'Log1');
    const unsubscribe = counter.subscribe(log);
    unscribe.current.push(unsubscribe);

    return () => unsubscribe();
  }, [counter]);

  const handleDeleteLog = () => {
    unscribe.current.forEach((fn) => fn());
    unscribe.current = [];
  };

  const handleAddLog = () => {
    const log2 = () => console.log(counter.state, 'Log2');
    const unsubscribe = counter.subscribe(log2);
    unscribe.current.push(unsubscribe);
  };

  return (
    <div className="observer">
      <div className="observer-center">
        <div
          id="content"
          className="observer-counter">
          {state}
        </div>

        <div className="observer-btn">
          <button
            id="dec"
            className="dec"
            onClick={decrement}>
            -
          </button>
          <button
            id="inc"
            className="inc"
            onClick={increment}>
            +
          </button>
        </div>

        <button
          id="logger"
          className="observer-log"
          onClick={handleDeleteLog}>
          Отключить лог
        </button>
        <button
          id="addLogger"
          className="observer-log"
          onClick={handleAddLog}>
          Добавить лог
        </button>
      </div>
    </div>
  );
};
