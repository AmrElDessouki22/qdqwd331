'use client';

import { useEffect } from 'react';

const ErrorBoundary = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-red-500">Something went wrong!</h1>
    </div>
  );
};

export default ErrorBoundary;
