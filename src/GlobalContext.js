import { createContext, useEffect, useState } from "react";

const InitialState = {
  name: localStorage.getItem("userName") || "null",
  auth: localStorage.getItem("userAuth") || "null",
};

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(InitialState);

  useEffect(() => {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userAuth", user.auth);
  }, [user]);

  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};
