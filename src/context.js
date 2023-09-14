import React, { createContext, useState } from "react";
import { data } from "./mock";

export const MovieContext = createContext(data);

export const MovieList = ({ children }) => {
  const [user, setUser] = useState(data);

  return (
    <MovieContext.Provider value={[user, setUser]}>{children}</MovieContext.Provider>
  );
};
