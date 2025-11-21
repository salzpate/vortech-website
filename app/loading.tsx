import { JSX } from 'react';

export default function Loading(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" aria-label="Lädt">
          <span className="sr-only">Lädt...</span>
        </div>
        <p className="mt-4 text-paragraph dark:text-paragraph-dark">Lädt...</p>
      </div>
    </div>
  );
}
