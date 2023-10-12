import { MdSportsCricket, MdSportsKabaddi } from "react-icons/md";
import { BiFootball, BiSolidTennisBall, BiBasketball } from "react-icons/bi";
import { GiBasketballBall, GiVolleyballBall } from "react-icons/gi";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { TbClover } from "react-icons/tb";
import { IoGameController, IoFootballOutline } from "react-icons/io5";

export const tabPanel = [
  {
    label: "Cricket",
    icon: MdSportsCricket,
    to: "",
    id: 4,
  },
  {
    label: "Football",
    icon: BiFootball,
    to: "football",
    id: 1,
  },
  {
    label: "Tennis",
    icon: BiSolidTennisBall,
    to: "tennis",
    id: 2,
  },
  {
    label: "Table Tennis",
    icon: FaTableTennisPaddleBall,
    to: "tableTennis",
    id: 5,
  },
  {
    label: "Basketball",
    icon: GiBasketballBall,
    to: "basketball",
    id: 6,
  },
  {
    label: "Volleyball",
    icon: GiVolleyballBall,
    to: "volleyball",
    id: 7,
  },
  {
    label: "Snooker",
    icon: TbClover,
    to: "snooker",
    id: 8,
  },
  {
    label: "E Games",
    icon: IoGameController,
    to: "eGames",
    id: 9,
  },
  {
    label: "Futsal",
    icon: IoFootballOutline,
    to: "futsal",
    id: 10,
  },
  {
    label: "Handball",
    icon: BiBasketball,
    to: "handball",
    id: 11,
  },
  {
    label: "Kabaddi",
    icon: MdSportsKabaddi,
    to: "kabaddi",
    id: 12,
  },
];
