import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import blueIcon from '../../resources/images/marker-blue.png';
import redIcon from '../../resources/images/marker-red.png';
import '../../../node_modules/leaflet/dist/leaflet.css';
import './Map.css';

const POSITION = [-23.6, -46.67];
const { mapBlueIcon, mapRedIcon } = getMapIcons();

function getMapIcons() {
  const mapBlueIcon = L.icon({
    iconUrl: blueIcon,
    iconSize: [15, 15],
  });
  const mapRedIcon = L.icon({
    iconUrl: redIcon,
    iconSize: [15, 15],
  });
  return { mapBlueIcon, mapRedIcon };
}

function MapCreate({ stores, minValue }) {
  const currentMinValue = minValue || 15000;

  return (
    <div className='map-style'>
      <Map center={POSITION} zoom={12} id='map'>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {stores.map(({ latitude, longitude, revenue, name }) => {
          const currentIcon =
            revenue < currentMinValue ? mapRedIcon : mapBlueIcon;
          return (
            <Marker
              key={name}
              position={[latitude, longitude]}
              icon={currentIcon}
            />
          );
        })}
      </Map>
    </div>
  );
}

export default MapCreate;
