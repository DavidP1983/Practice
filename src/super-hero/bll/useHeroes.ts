import { useEffect, useState } from 'react';
import { useHttp } from '../services/useHttp';
import { Data } from '../ui/hero-item';

export const useHeroes = () => {
  const [heroList, setHeroList] = useState<Data[] | null>(null);
  const { fetchingData, status } = useHttp<Data[]>('all.json');

  useEffect(() => {
    fetchingData().then((res) => {
      if (res) {
        const tranckData = res.slice(0, 10);
        setHeroList(tranckData);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { heroList, status };
};
