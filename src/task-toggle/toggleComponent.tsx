import { useToggle } from './useToggle';

export const ToggleComponent = () => {
  const [isToggle, toggle, setToggle] = useToggle(false);
  return (
    <div>
      <p>Состояние: {isToggle ? 'Включено' : 'Выключено'} </p>
      <button onClick={toggle}>Переключить</button>
      <button onClick={() => setToggle(true)}>Включить</button>
      <button onClick={() => setToggle(false)}>Выключить</button>
    </div>
  );
};
