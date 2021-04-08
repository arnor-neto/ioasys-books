import { createContext, useEffect, useState } from "react";

const InitialState = {
  name: sessionStorage.getItem("userName") || null,
  auth: sessionStorage.getItem("userAuth") || null,
};

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(InitialState);

  useEffect(() => {
    sessionStorage.setItem("userName", user.name);
    sessionStorage.setItem("userAuth", user.auth);
  }, [user]);

  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};
