

"use client";

import { useEffect, useState } from 'react';
import AdviceList from '@/components/AdviceList';

export default function Home() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (advice) => {
    const exists = favorites.find((item) => item.id === advice.id);
    if (exists) return;
    const updatedFavorites = [...favorites, advice];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <AdviceList onFavorite={addFavorite} />
    </div>
  );
}

