import { clsx } from 'clsx';
import styles from './HeroItem.module.css';
// Все типы будут храниться в компоненте Hero-Item и он не будет зависеть от чего-либо, так как в нем нет никаких импортов
type ImageSize = {
  lg: string;
  xs: string;
  sm: string;
  md: string;
};

export interface Data {
  id: number;
  name: string;
  firstAppearance: string;
  images: ImageSize;
}

interface PropsItem {
  heroList: Data[] | null;
  selectedHeroId: number;
  onSelect: (id: number) => void;
}

export const HeroItem = ({ heroList, selectedHeroId, onSelect }: PropsItem) => {
  // Clsx - библиотека как classNames
  // const className = clsx({
  //     [styles.heroes_item]: true,
  //     [styles.selected]: false
  // })

  return (
    <ul className={styles.heroes}>
      {heroList?.map((item) => (
        <li
          className={clsx(
            styles.heroes_item,
            selectedHeroId === item.id && styles.selected
          )}
          key={item.id}>
          <a
            href="#"
            onClick={() => onSelect(item.id)}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

// { selectedHeroId === item.id ? `${styles.heroes_item} ${styles.selected}` : styles.heroes_item } - заменили на clsx
// className = clsx(styles.heroes_item, selectedHeroId === item.id && styles.selected)
