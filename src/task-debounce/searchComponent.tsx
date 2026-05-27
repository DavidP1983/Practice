import { useEffect, useState } from 'react';

const useDebounce = (searchTerm: string, duration: number) => {
  const [state, setState] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(searchTerm);
    }, duration);

    return () => clearTimeout(timer);
  }, [searchTerm, duration]);

  return state;
};

export const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearchTerm = useDebounce(searchTerm, 4000);

  useEffect(() => {
    if (debounceSearchTerm) {
      // console.log('Поиск:', debounceSearchTerm);
    }
  }, [debounceSearchTerm]);

  return (
    <input
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Поиск"
    />
  );
};
