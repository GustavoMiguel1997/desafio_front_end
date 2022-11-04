import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MapConfig from './config';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const { mapBlueIcon, mapRedIcon } = MapConfig.icons;

function MapCreate({ stores, minValue }) {
  const currentMinValue = minValue || 15000;

  function getIcon(revenue) {
    return revenue < currentMinValue ? mapRedIcon : mapBlueIcon;
  }

  return (
    <div className="map-style">
      <Map id="map" center={MapConfig.view.position} zoom={MapConfig.view.zoom}>
        <TileLayer
          url={MapConfig.tileLayer.url}
          attribution={MapConfig.tileLayer.attribution}
        />
        {stores.map(({ latitude, longitude, revenue, name }) => (
          <Marker
            key={name}
            position={[latitude, longitude]}
            icon={getIcon(revenue)}
            /* eventHandlers={{
              mouseover: (event) => console.log('Hover'),
            }} */
          >
            <Popup>Hello</Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

MapCreate.propTypes = {
  minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

MapCreate.defaultProps = {
  minValue: 15000,
};

export default MapCreate;
