import { useState } from 'react';

export const useHeroesSelection = () => {
  const [selectedHeroId, setSelectedHeroId] = useState(0);

  const handleSelection = (id: number): void => {
    setSelectedHeroId(id);
  };

  return {
    selectedHeroId,
    handleSelection,
  };
};
