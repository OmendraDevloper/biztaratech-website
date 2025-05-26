'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Syllabus page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6 text-center">
        We encountered an error while loading the course syllabus. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
