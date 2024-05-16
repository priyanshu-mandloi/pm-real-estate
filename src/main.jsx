import "./index.scss";

import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
