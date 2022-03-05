import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import './Map.css';

const POSITION = [-23.6, -46.67];
const blueIcon = getIcon('marker-blue');
const redIcon = getIcon('marker-red');

function getIcon(iconName) {
  return L.icon({
    iconUrl: require(`../../resources/images/${iconName}.png`),
    iconSize: [15, 15],
  });
}

function getMarker(name, [latitude, longitude], icon) {
  return <Marker key={name} position={[latitude, longitude]} icon={icon} />;
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
          const currentIcon = revenue < currentMinValue ? redIcon : blueIcon;
          return getMarker(name, [latitude, longitude], currentIcon);
        })}
      </Map>
    </div>
  );
}

export default MapCreate;
