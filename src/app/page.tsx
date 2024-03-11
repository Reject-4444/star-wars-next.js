import Image from 'next/image';
import mainImage from '../images/main-image.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Star wars website',
  description: 'Website for funs Star wars',
};

export default function Home() {
  return (
    <>
      <h1 className='text-center text-4xl my-10'>
        Welcome to the page for fans of the iconic Star Wars!
      </h1>
      <Image
        className='w-3/5 mx-auto'
        src={mainImage}
        alt='hero-picture'
      />
    </>
  );
}
