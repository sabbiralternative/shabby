import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/Login/Login";
import SingleCasino from "../components/Casino/SingleCasino.jsx";
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
import LiveCasinoVideo from "../components/Casino/LiveCasinoVideo.jsx";

import SecureAuth from "../pages/SecureAuth/SecureAuth";
import Register from "../components/Register/Register.jsx";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import DepositStatement from "../pages/DepositStatement/DepositStatement.jsx";
import WithdrawStatement from "../pages/WithdrawStatement/WithdrawStatement.jsx";
import APK from "../pages/APK/APK.jsx";
import Mac88 from "../pages/Mac88/Mac88.jsx";
import BonusStatement from "../pages/BonusStatement/BonusStatement.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import ReferralStatement from "../pages/ReferralStatement/ReferralStatement.jsx";
import Kabaddi from "../pages/Kabaddi/Kabaddi.jsx";
import Greyhound from "../pages/Greyhound/Greyhound.jsx";
import Horse from "../pages/Horse/Horse.jsx";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails.jsx";
import Affiliate from "../pages/Affiliate/Affiliate.jsx";
import AffiliateUserProfitLoss from "../pages/AffiliateUserProfitLoss/AffiliateUserProfitLoss.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
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
          path: "/kabaddi",
          element: <Kabaddi />,
        },
        {
          path: "/tennis",
          element: <Tennis />,
        },
        {
          path: "/greyhound",
          element: <Greyhound />,
        },
        {
          path: "/horse",
          element: <Horse />,
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
          path: "/mac88",
          element: <Mac88 />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/live-casino",
          element: <LiveCasino />,
        },
        {
          path: "/slot-games",
          element: <SlotGames />,
        },

        {
          path: "/our-virtual",
          element: <OurVirtual />,
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
        {
          path: "/deposit-statement",
          element: <DepositStatement />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/withdraw-statement",
          element: <WithdrawStatement />,
        },
        {
          path: "/referral-statement",
          element: <ReferralStatement />,
        },
        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "affiliate/user-profit-loss",
          element: <AffiliateUserProfitLoss />,
        },
      ],
    },
    {
      path: "/:category/:name/:eventId",
      element: <LiveCasinoVideo />,
    },
    {
      path: "/casino/:eventId/:eventTypeId",
      element: <SingleCasino />,
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

    {
      path: "/apk",
      element: <APK />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);

export default router;
