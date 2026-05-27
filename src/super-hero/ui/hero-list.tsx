import { useHeroes } from '../bll/useHeroes';
import { HeroItem } from './hero-item';

interface Props {
  selectedHeroId: number;
  onSelect: (id: number) => void;
}

export const HeroList = ({ onSelect, selectedHeroId }: Props) => {
  const { heroList, status } = useHeroes();

  if (status === 'loading') {
    return <span style={{ fontSize: '40px', color: 'red' }}>Loading...</span>;
  } else if (status === 'error') {
    return <span>Error</span>;
  }

  if (heroList?.length === 0) {
    return <span>No Heroes</span>;
  }

  const handleSelectItem = (id: number) => {
    onSelect?.(id);
  };

  const handleResetSelection = () => {
    onSelect?.(0);
  };

  return (
    <div>
      <button onClick={handleResetSelection}>Reset</button>
      <hr />
      <h1>Hero List</h1>
      <HeroItem
        heroList={heroList}
        selectedHeroId={selectedHeroId}
        onSelect={handleSelectItem}
      />
    </div>
  );
};
