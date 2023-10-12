import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Route.jsx";
import StateProvider from "./provider/StateProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
    <RouterProvider router={router}></RouterProvider>
    </StateProvider>
  </React.StrictMode>
);
