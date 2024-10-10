
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-green-600 drop-shadow-lg">
        Favorite Advices
      </h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {favorites.map((advice, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 flex flex-col items-center justify-between transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Link href={`/advice/${advice.id}`}>
                <p className="text-lg text-gray-800 mb-4 text-center cursor-pointer hover:text-blue-500">
                  {advice.advice}
                </p>
              </Link>
              <div className="text-sm text-gray-400 mb-4">Advice #{advice.id}</div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-transform transform hover:scale-110 duration-200"
                onClick={() => removeFavorite(index)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-700">No favorites added yet.</div>
      )}
      <div className="text-center mt-8">
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Back to Advice List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
