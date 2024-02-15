import { useContext } from "react";
import { StateContext } from "../provider/StateProvider";

const UseState = () => {
  /* state hook */
  const state = useContext(StateContext);
  return state;
};

export default UseState;
