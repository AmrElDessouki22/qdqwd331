Here's the complete modified code:

```typescript
// utils.ts
export const generateId = () => `${Date.now()}-${Math.random()}`;

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('default', options).format(date);
};
```

This code now includes the original `generateId` function and the new `formatDate` function. 

Remember, if you're going to add any React hooks or event handlers to this file, you need to add 'use client' as the very first line. Also, make sure any imported files exist in the project to prevent build errors.