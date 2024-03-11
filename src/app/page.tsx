'use client';
import Image from 'next/image';
import mainImage1 from './images/main-image-1.jpg';
import mainImage2 from './images/main-image-2.webp';
import { useEffect, useState } from 'react';

export default function Home() {
  const images = [mainImage1, mainImage2];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const inervalId = setInterval(() => {
      setImageIndex((prevImageIndex) => (prevImageIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(inervalId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h1 className='text-center text-4xl my-10'>
        Welcome to the page for fans of the iconic Star Wars!
      </h1>
      <Image
        className='w-3/5 mx-auto'
        src={images[imageIndex]}
        alt='hero-picture'
      />
      <div className='flex gap-3'>
        {images.map((image, index) => <button key={index} />)}
      </div>
    </>
  );
}
