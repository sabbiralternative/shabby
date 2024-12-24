import { settings } from "../../utils";
import DiamondCasino from "./Diamond/DiamondCasino";
import UltraLobby from "./UltraLobby/UltraLobby";

const LiveCasino = () => {
  return (
    <>
      {settings.liveCasinoType === "diamond" ? (
        <DiamondCasino />
      ) : (
        <UltraLobby />
      )}
    </>
  );
};

export default LiveCasino;
