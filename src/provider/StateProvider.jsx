import { createContext, useState } from "react";

export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  const [sports, setSports] = useState(4);
  const [buttonValue, SetButtonValue] = useState(false);
  const [placeBetValue,setPlaceBetValue] = useState({})

  const stateInfo = {
    sports,setSports,buttonValue, SetButtonValue,placeBetValue,setPlaceBetValue
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
