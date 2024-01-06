import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/Login/Login";
import SingleCasino from "../pages/CasinoList/SingleCasino";
import Cricket from "../pages/Cricket/Cricket";
import Football from "../pages/Football/Football";
import Tennis from "../pages/Tennis/Tennis.jsx";
import TableTennis from "../pages/TableTennis/TableTennis";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import ChangePasswordLogin from "../pages/ChangePasswordLogin/ChangePasswordLogin";
import ActivityLogs from "../pages/ActivityLogs/ActivityLogs";
import CurrentBet from "../pages/CurrentBet/CurrentBet";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import GameDetails from "../pages/GameDetails/GameDetails";
import FantasyGames from "../pages/FantasyGames/FantasyGames";
import LiveCasino from "../pages/LiveCasino/LiveCasino";
import OurVirtual from "../pages/OurVirtual/OurVirtual";
import SlotGames from "../pages/SlotGames/SlotGames";
import OurCasino from "../pages/OurCasino/OurCasino";
import PlaceBetDiamond from "../pages/OurCasino/PlaceBetDiamond/PlaceBetDiamond";
import LiveCasinoVideo from "../pages/LiveCasino/LiveCasinoVideo";
import SlotGamesVideo from "../pages/SlotGames/SlotGamesVideo.jsx";
import SecureAuth from "../pages/SecureAuth/SecureAuth";
import Register from "../components/Register/Register.jsx";
import Deposit from "../pages/Deposit/Deposit";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/casino/:name",
          element: <SingleCasino />,
        },
        {
          path: "/cricket",
          element: <Cricket />,
        },
        {
          path: "/football",
          element: <Football />,
        },
        {
          path: "/tennis",
          element: <Tennis />,
        },
        {
          path: "/table-tennis",
          element: <TableTennis />,
        },
        {
          path: "game-details/:id/:eventId",
          element: <GameDetails />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/activity-logs",
          element: <ActivityLogs />,
        },
        {
          path: "/current-bet",
          element: <CurrentBet />,
        },
        {
          path: "/account-statement",
          element: <AccountStatement />,
        },
        {
          path: "/fantasy-games",
          element: <FantasyGames />,
        },
        {
          path: "/live-casino",
          element: <LiveCasino />,
        },
        {
          path: "/live-casino/:eventId/:providerId",
          element: <LiveCasinoVideo />,
        },
        {
          path: "/our-virtual",
          element: <OurVirtual />,
        },

        {
          path: "/slot-games",
          element: <SlotGames />,
        },
        {
          path: "/slot-games/:eventId/:providerId",
          element: <SlotGamesVideo />,
        },
        {
          path: "/our-casino",
          element: <OurCasino />,
        },
        {
          path: "/our-casino/:slug",
          element: <PlaceBetDiamond />,
        },
        {
          path: "/secure-auth",
          element: <SecureAuth />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/change-Password-login",
      element: <ChangePasswordLogin />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);

export default router;
