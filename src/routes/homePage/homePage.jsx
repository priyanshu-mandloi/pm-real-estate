import "./homePage.scss";

import { FaAward, FaClock, FaHome, FaSearch } from "react-icons/fa";

import { AuthContext } from "../../context/AuthContext";
import SearchBar from "../../components/searchBar/searchBar";
import { useContext } from "react";

function HomePage({ isDarkMode }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={`homePage ${isDarkMode ? "darkMode" : ""}`}>
      <div className="hero">
        <div className="imageContainer">
          <img src="/background.jpg" alt="Modern house" />
        </div>
        <div className="heroContent">
          <h1 className="title">PM Real Estate</h1>
          <p className="subtitle">
            Find Better Places to Live, Work and Wonder
          </p>
        </div>
      </div>

      <div className="searchSection">
        <div className="searchBox">
          <SearchBar />
        </div>
      </div>

      <div className="featuredSection">
        <h2>Newly Launched Projects</h2>
        <div className="projectVideo">
          <video autoPlay loop muted>
            <source src="/home.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="infoSection">
        <h2>Why Choose PM Real Estate?</h2>
        <div className="boxes">
          <div className="box">
            <FaClock className="icon" />
            <h3>18+ Years</h3>
            <p>Of Industry Leadership</p>
          </div>
          <div className="box">
            <FaAward className="icon" />
            <h3>250+ Awards</h3>
            <p>For Outstanding Service</p>
          </div>
          <div className="box">
            <FaHome className="icon" />
            <h3>3000+ Properties</h3>
            <p>Handpicked for You</p>
          </div>
        </div>
      </div>

      <div className="ctaSection">
        <div className="ctaBox">
          <h3>Find, Buy & Own Your Dream Home</h3>
          <p>Explore from Apartments, land, builder floors, villas and more</p>
          <button className="ctaButton">Explore Buying</button>
        </div>
        <div className="ctaBox">
          <h3>Rental Homes for Everyone</h3>
          <p>Explore from Apartments, builder floors, villas and more</p>
          <button className="ctaButton">Explore Renting</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// import "./homePage.scss";

// import { AuthContext } from "../../context/AuthContext";
// import SearchBar from "../../components/searchBar/searchBar";
// import { useContext } from "react";

// function HomePage() {
//   const { currentUser } = useContext(AuthContext);

//   return (
//     <div className="homePage">
//       <div className="textContainer">
//         <div className="wrapper">
//           <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
//           <p>
//             Welcome to Find Real Estate & Get Your Dream Place, your ultimate
//             destination for discovering the perfect home. Whether you're
//             searching for a cozy apartment, a spacious family house, or a
//             luxurious estate, our platform provides a seamless and personalized
//             experience to help you find your dream place.
//           </p>
//           <SearchBar />
//           <div className="boxes">
//             <div className="box">
//               <h1>16+</h1>
//               <h2>Years of Experience</h2>
//             </div>
//             <div className="box">
//               <h1>200</h1>
//               <h2>Award Gained</h2>
//             </div>
//             <div className="box">
//               <h1>2000+</h1>
//               <h2>Property Ready</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="imgContainer">
//         <img src="/bg1.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default HomePage;
