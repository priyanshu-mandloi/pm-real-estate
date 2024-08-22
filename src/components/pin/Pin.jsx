import "./pin.scss";

import { Marker, Popup } from "react-leaflet";

import L from "leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  const icon = L.icon({
    iconUrl: "/pin.png", // Use the URL relative to the public directory
    iconSize: [25, 41], // Adjust size to fit your icon
    iconAnchor: [12.5, 41], // Adjust anchor to place icon correctly on the map
  });

  return (
    <Marker position={[item.latitude, item.longitude]} icon={icon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
