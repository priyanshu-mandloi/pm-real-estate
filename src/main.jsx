import "./index.scss";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <ToastContainer />
        <SpeedInsights />
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
