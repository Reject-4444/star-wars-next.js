'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex align-center flex-col">
      <h2 className='text-center text-4xl my-10'>{error.name}</h2>
      <p className='text-center text-2xl'>{error.message}</p>
      <button
        className='my-5 px-2 py-1 bg-purple-800 text-white hover:scale-110 transition duration-300'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
