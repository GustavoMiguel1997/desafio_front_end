import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Mao() {
  const position = [-23.6, -46.67];
  return (
    <div className="map-style">
      <Map center={position} zoom={12} id="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {}
      </Map>
    </div>
  );
}
