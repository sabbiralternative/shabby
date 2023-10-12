import { useContext } from "react";
import { StateContext } from "../provider/StateProvider";

const UseState = () => {
  const state = useContext(StateContext);
  return state;
};

export default UseState;
