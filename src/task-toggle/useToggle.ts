import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isToggle, setIsToggle] = useState(initialState);

  const toggle = () => {
    setIsToggle((prev) => !prev);
  };

  return [isToggle, toggle, setIsToggle] as const;
};
