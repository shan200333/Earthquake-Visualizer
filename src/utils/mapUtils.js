import L from 'leaflet';

const getColor = (magnitude) => {
  if (magnitude < 1.0) return '#a3f600'; 
  if (magnitude < 2.5) return '#dcf400'; 
  if (magnitude < 4.5) return '#f7db11'; 
  if (magnitude < 6.5) return '#fdb72a'; 
  if (magnitude < 8.0) return '#fca35d'; 
  return '#ff5f65';
};

export const createCustomIcon = (feature) => {
  const magnitude = feature.properties.mag;
  const color = getColor(magnitude);
  const radius = magnitude * 4; 

  return L.divIcon({
    html: `<span style="background-color: ${color}; width: ${radius*2}px; height: ${radius*2}px; border-radius: 50%; display: block; border: 1px solid #FFFFFF80;"></span>`,
    className: 'marker-cluster',
    iconSize: [radius * 2, radius * 2],
  });
};

export const formatTimestamp = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};