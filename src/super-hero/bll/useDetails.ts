/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHttp } from '../services/useHttp';
import { Data } from '../ui/hero-item';

// bll - Busies logic

export const useDetails = (heroId: number) => {
  const [heroSelected, setHeroSelected] = useState<Data | null>(null);
  const { fetchingData, status } = useHttp<Data>(`id/${heroId}.json`);

  useEffect(() => {
    if (!heroId) {
      setHeroSelected(null);
      return;
    }
    fetchingData().then((res) => {
      if (res) {
        setHeroSelected(res);
      }
    });
  }, [heroId]);

  return { heroSelected, status };
};
