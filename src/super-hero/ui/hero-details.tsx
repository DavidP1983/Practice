import { useDetails } from '../bll/useDetails';
import styles from './HeroDetails.module.css';

interface Props {
  heroId: number;
}

export const HeroDetails = ({ heroId }: Props) => {
  const { heroSelected, status } = useDetails(heroId);

  if (status === 'error') {
    return <span>Error</span>;
  }

  return (
    <div>
      <h3>Hero Details</h3>
      {!heroSelected && !heroId && 'Hero is not selected'}
      {!heroSelected && !!heroId && 'Loading...'}
      {heroSelected && !!heroId && heroSelected.id !== heroId && 'Loading...'}
      {heroSelected && (
        <div>
          <img
            alt={heroSelected?.name}
            src={heroSelected.images.md}
            className={styles.heroesderails}></img>
        </div>
      )}
    </div>
  );
};
