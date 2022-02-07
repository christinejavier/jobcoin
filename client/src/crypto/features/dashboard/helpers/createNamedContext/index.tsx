import { createContext } from 'react';

const createNamedContext = (name: string, initialValue: any = {}) => {
  const context = createContext(initialValue);
  context.displayName = name;

  return context;
};

export { createNamedContext };
