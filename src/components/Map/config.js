import L from 'leaflet';
import blueIcon from '../../resources/images/marker-blue.png';
import redIcon from '../../resources/images/marker-red.png';

const tileLayer = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};

const view = {
  position: [-23.6, -46.67],
  zoom: 12,
};

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

export default { tileLayer, view, icons: getMapIcons() };
