import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import SingleCasino from "../pages/CasinoList/SingleCasino";
import Cricket from '../pages/Cricket/Cricket'
import Football from '../pages/Football/Football'
import Tennis from '../pages/Tennis/Tennis.jsx'
import TableTennis from '../pages/TableTennis/TableTennis'
import ChangePassword from '../pages/ChangePassword/ChangePassword.jsx'
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
        path: "/change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
