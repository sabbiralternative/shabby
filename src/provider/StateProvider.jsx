import { createContext, useState } from "react";

export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  const [sports, setSports] = useState(4);

  const stateInfo = {
    sports,setSports
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
