Here is the complete modified code:

```jsx
// use client
import { useClient } from '@/hooks/useClient';
import { useState } from 'react';
import { useRouter } from 'next/router';
import '@/app/globals.css';

const Footer = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  useClient(() => {
    setIsClient(true);
  });

  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 flex justify-between items-center px-4 lg:px-8">
      <p className="text-center lg:text-left">&copy; {new Date().getFullYear()} Note Taking App</p>
      {isClient && (
        <div className="flex items-center">
          <button
            className="text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => router.push('/privacy')}
          >
            Privacy Policy
          </button>
          <span className="mx-2">|</span>
          <button
            className="text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => router.push('/terms')}
          >
            Terms of Service
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
```

Please ensure that the `useClient` hook and the `globals.css` file exist in the project. The `useClient` hook should be a custom hook that checks if the current environment is a client (browser) or server. If it's a client, it should call the provided callback function. This is used to prevent server-side rendering of components that rely on browser-specific APIs.