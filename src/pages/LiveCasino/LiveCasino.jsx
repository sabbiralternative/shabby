import { settings } from "../../utils";
import DiamondCasino from "./Diamond/DiamondCasino";
import Mac88 from "./Mac88/Mac88";
import UltraLobby from "./UltraLobby/UltraLobby";

const LiveCasino = () => {
  return (
    <>
      {settings.liveCasinoType === "ultrawin" && <UltraLobby />}
      {settings.liveCasinoType === "diamond" && <DiamondCasino />}
      {settings.liveCasinoType === "mac88" && <Mac88 />}
    </>
  );
};

export default LiveCasino;
