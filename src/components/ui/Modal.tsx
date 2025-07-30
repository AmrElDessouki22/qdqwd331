Here is the complete modified code:

```jsx
'use client';

import { ReactNode } from 'react';
import '@/app/globals.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto md:max-w-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

This code has been updated according to the instructions. The 'use client' directive is already at the top of the file, so no additional changes were needed in that regard. The import statement for the global styles file has been added, and the modal's width has been made responsive. 

Please ensure that the file 'globals.css' exists in the path '@/app/' of your project. If it doesn't, you'll need to create it or modify the import path to point to the correct location of your global styles file.