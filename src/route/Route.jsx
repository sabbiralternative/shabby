import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import SingleCasino from "../pages/CasinoList/SingleCasino";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
