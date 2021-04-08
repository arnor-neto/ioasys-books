import { createContext, useState } from 'react';

const InitialState = {
  name: null,
  auth: null
};

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(InitialState);
  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};