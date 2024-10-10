

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const AdviceList = ({ onFavorite }) => {
  const [advices, setAdvices] = useState([]);

  useEffect(() => {     
    const advicesFetch = async () => {
      const res = await fetch("https://api.adviceslip.com/advice/search/life");
      const data = await res.json();
      setAdvices(data.slips || []);
    };
    advicesFetch();
  }, []);

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-200 to-blue-200">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-white drop-shadow-lg">
        Advice App
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {advices.length > 0 ? (
          advices.map((advice) => (
            <div
              key={advice.id}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 flex flex-col items-center justify-between transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
<Link href={`/advice/${advice.id}`}>
<p className="text-lg text-gray-800 mb-4 text-center animate-fadeIn">{advice.advice}</p>
</Link> 
              <div className="text-sm text-gray-400 mb-4">Advice #{advice.id}</div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-110 duration-200"
                onClick={() => onFavorite(advice)}
              >
                Add To Favorites
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-white">No advices found.</div>
        )}
      </div>
      <Link href='/faviouries'>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-transform transform hover:scale-110 duration-200">View Fav</button>
      </Link>
    </div>
  );
};

export default AdviceList;
