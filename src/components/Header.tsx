'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

export const Header = () => {
  const path = usePathname();

  return (
    <header className='bg-purple-800 py-4'>
      <nav className='flex justify-center'>
        <ul className='flex gap-5'>
          <li>
            <Link
              href='/'
              className={cn(
                'block text-xl text-white hover:scale-110 transition-transform duration-300',
                { 'text-black': path === '/' }
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/heroes'
              className={cn(
                'block text-xl text-white hover:scale-110 transition-transform duration-300',
                { 'text-black': path.includes('/heroes') }
              )}
            >
              Heroes
            </Link>
          </li>
          <li>
            <Link
              href='/films'
              className={cn(
                'block text-xl text-white hover:scale-110 transition-transform duration-300',
                { 'text-black': path.includes('/films') }
              )}
            >
              Films
            </Link>
          </li>
          <li>
            <Link
              href='/starships'
              className={cn(
                'block text-xl text-white hover:scale-110 transition-transform duration-300',
                { 'text-black': path.includes('/starships') }
              )}
            >
              Starships
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
