import "./layout.scss";

import { Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import Chatbot from "../../components/Chats/Chatbot";
import Navbar from "../../components/navbar/Navbar";

function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`layout ${isDarkMode ? "darkMode" : ""}`}>
      <div className="navbar">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="content">
        <Outlet context={{ isDarkMode }} />
      </div>
      <Chatbot />
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
