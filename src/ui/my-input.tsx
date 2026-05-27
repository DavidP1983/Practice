import { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const MyInput = (props: Props) => {
  return (
    <input
      type="text"
      {...props}
      autoFocus
    />
  );
};
