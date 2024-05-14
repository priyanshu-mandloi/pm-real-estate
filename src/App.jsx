import "./layout.scss";

import HomePage from "./routes/homePage/homePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
