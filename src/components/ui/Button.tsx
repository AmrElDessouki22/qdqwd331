Here is the complete modified code:

```jsx
'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ label, variant = 'primary', ...props }: ButtonProps) => {
  let buttonClass = '';

  switch (variant) {
    case 'primary':
      buttonClass = 'bg-blue-500 hover:bg-blue-600 text-white';
      break;
    case 'secondary':
      buttonClass = 'bg-gray-500 hover:bg-gray-600 text-white';
      break;
    case 'danger':
      buttonClass = 'bg-red-500 hover:bg-red-600 text-white';
      break;
  }

  return (
    <button
      {...props}
      className={`px-4 py-2 rounded ${buttonClass} transition-colors duration-200 ease-in-out`}
    >
      {label}
    </button>
  );
};

export default Button;
```

This code has been updated to include a `variant` prop in the `ButtonProps` interface, which allows the button to have different styles based on the variant. The `Button` component now includes a switch statement to determine the button's class based on the variant. The button's class is then used in the `className` prop to style the button.

Please ensure that the 'use client' directive is at the top of the file, and that all imported files exist in the project. If you are adding any React hooks or event handlers, make sure to add them after the 'use client' directive.