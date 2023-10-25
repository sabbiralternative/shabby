import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import SingleCasino from "../pages/CasinoList/SingleCasino";
import Cricket from "../pages/Cricket/Cricket";
import Football from "../pages/Football/Football";
import Tennis from "../pages/Tennis/Tennis.jsx";
import TableTennis from "../pages/TableTennis/TableTennis";
import ChangePassword from "../pages/ChangePassword/ChangePassword.jsx";
import ActivityLogs from "../pages/ActivityLogs/ActivityLogs";
import CurrentBet from "../pages/CurrentBet/CurrentBet";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import GameDetails from '../pages/GameDetails/GameDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
