// import "./homePage.scss";

// import AuthContext from "../../context/AuthContext";
// import SearchBar from "../../components/searchBar/searchBar";

// function HomePage() {
//   const { currentUser } = useContext(AuthContext);
//   return (
//     <div className="homePage">
//       <div className="textContainer">
//         <div className="wrapper">
//           <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
//           <p>
// Welcome to Find Real Estate & Get Your Dream Place, your ultimate
// destination for discovering the perfect home. Whether you're
// searching for a cozy apartment, a spacious family house, or a
// luxurious estate, our platform provides a seamless and personalized
// experience to help you find your dream place.
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
//               <h1>1200+</h1>
//               <h2>Property Ready</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="imgContainer">
//         <img src="/bg.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import "./homePage.scss";

import { AuthContext } from "../../context/AuthContext";
import SearchBar from "../../components/searchBar/searchBar";
import { useContext } from "react";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Welcome to Find Real Estate & Get Your Dream Place, your ultimate
            destination for discovering the perfect home. Whether you're
            searching for a cozy apartment, a spacious family house, or a
            luxurious estate, our platform provides a seamless and personalized
            experience to help you find your dream place.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
