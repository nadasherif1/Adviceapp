"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const AdviceDetail = () => {
  const params = useParams();
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    if (params.id) {
      fetch(`https://api.adviceslip.com/advice/${params.id}`)
        .then((res) => res.json())
        .then((data) => setAdvice(data.slip.advice));
    }
  }, [params.id]);
  return (
    <div>
      <p className='text-center text-3xl font-bold p-[100px]'>{advice || "Loading..."}</p>
    </div>
  );
};

export default AdviceDetail;

