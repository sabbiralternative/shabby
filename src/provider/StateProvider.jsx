import { createContext, useState } from "react";

export const StateContext = createContext(null);
const StateProvider = ({ children }) => {
  const [sports, setSports] = useState(4);
  const [buttonValue, SetButtonValue] = useState(false);
  const [placeBetValue,setPlaceBetValue] = useState({})
  const [filterGames, setFilterGames] = useState("all");

  const stateInfo = {
    sports,setSports,buttonValue, SetButtonValue,placeBetValue,setPlaceBetValue,filterGames, setFilterGames
  };
  return (
    <StateContext.Provider value={stateInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
