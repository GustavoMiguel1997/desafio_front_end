import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import "./Map.css";

export default function MapCreate({ storesList, userText, userRevenue }) {
  userText = userText ? userText.value : "";
  userRevenue = userRevenue ? userRevenue.value : 15000;

  const blueIcon = L.icon({
    iconUrl: require("../../resources/images/marker-blue.png"),
    iconSize: [15, 15]
  });

  const redIcon = L.icon({
    iconUrl: require("../../resources/images/marker-red.png"),
    iconSize: [15, 15]
  });

  const position = [-23.6, -46.67];
  return (
    <div className="map-style">
      <Map center={position} zoom={12} id="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {storesList.map(({ latitude, longitude, revenue, name }) => {
          userRevenue = userRevenue ? userRevenue : 15000;
          if (
            name.toLowerCase().includes(userText.toLowerCase()) &&
            revenue > userRevenue
          ) {
            return (
              <Marker
                position={[latitude, longitude]}
                icon={blueIcon}
                key={revenue}
              />
            );
          } else if (
            name.toLowerCase().includes(userText.toLowerCase()) &&
            revenue < userRevenue
          ) {
            return (
              <Marker
                position={[latitude, longitude]}
                icon={redIcon}
                key={revenue}
              />
            );
          }
        })}
      </Map>
    </div>
  );
}
