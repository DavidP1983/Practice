import { useHeroesSelection } from './bll/useHeroesSelection';
import styles from './Main.module.css';
import { HeroDetails } from './ui/hero-details';
import { HeroList } from './ui/hero-list';

export const MainPage = () => {
  const { selectedHeroId, handleSelection } = useHeroesSelection();

  return (
    <div className={styles.main}>
      <HeroList
        selectedHeroId={selectedHeroId}
        onSelect={handleSelection}
      />
      <HeroDetails heroId={selectedHeroId} />
    </div>
  );
};
