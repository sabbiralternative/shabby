import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "rsuite/Pagination/styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Route.jsx";
import StateProvider from "./provider/StateProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LanguageProvider from "./provider/LanguageProvider.jsx";
import SettingsWrapper from "./layout/SettingsWrapper.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <SettingsWrapper>
          <LanguageProvider>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </LanguageProvider>
        </SettingsWrapper>
      </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
