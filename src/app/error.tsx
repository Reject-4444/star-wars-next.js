'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="relative">
      <h2 className='text-center text-4xl my-10'>{error.name}</h2>
      <p className='text-center text-2xl'>{error.message}</p>
      <button
        className='absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 my-5 px-2 py-1 bg-purple-800 text-white hover:scale-110 transition duration-300'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
