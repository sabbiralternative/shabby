import { MdSportsCricket, MdSportsKabaddi } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";
import { GiBasketballBall, GiVolleyballBall } from "react-icons/gi";
import { TbClover } from "react-icons/tb";
import { IoGameController, IoFootballOutline } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";

export const tabPanel = [
  {
    label: "In-Play",
    icon: MdSportsCricket,
    to: "",
    id: 0,
  },
  {
    label: "Cricket",
    icon: FaPlayCircle,
    to: "",
    id: 4,
  },
  {
    label: "Football",
    icon: FaPlayCircle,
    to: "football",
    id: 1,
  },
  {
    label: "Tennis",
    icon: FaPlayCircle,
    to: "tennis",
    id: 2,
  },
  {
    label: "Table Tennis",
    icon: FaPlayCircle,
    to: "tableTennis",
    id: 8,
  },
  {
    label: "Basketball",
    icon: GiBasketballBall,
    to: "basketball",
    id: 15,
  },
  {
    label: "Volleyball",
    icon: GiVolleyballBall,
    to: "volleyball",
    id: 18,
  },
  {
    label: "Snooker",
    icon: TbClover,
    to: "snooker",
    id: 59,
  },
  {
    label: "E Games",
    icon: IoGameController,
    to: "eGames",
    id: 11,
  },
  {
    label: "Futsal",
    icon: IoFootballOutline,
    to: "futsal",
    id: 9,
  },
  {
    label: "Handball",
    icon: BiBasketball,
    to: "handball",
    id: 85,
  },
  {
    label: "Kabaddi",
    icon: MdSportsKabaddi,
    to: "kabaddi",
    id: 99,
  },
];
