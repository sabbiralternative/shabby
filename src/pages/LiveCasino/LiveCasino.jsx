import { settings } from "../../utils";
import DiamondCasino from "./Diamond/DiamondCasino";
import UltraLobby from "./UltraLobby/UltraLobby";

const LiveCasino = () => {
  return (
    <>
      {settings.liveCasinoType === "ultrawin" ? (
        <UltraLobby />
      ) : (
        <DiamondCasino />
      )}
    </>
  );
};

export default LiveCasino;
