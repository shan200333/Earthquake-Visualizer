import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { createCustomIcon, formatTimestamp } from '../../utils/mapUtils';
import Legend from './MapLegend';
import './style.css';

const Map = ({ earthquakes }) => {
  const position = [20, 0]; 

  return (
    <div className="map-wrapper">
      <MapContainer center={position} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {earthquakes.map((quake) => {
          const { geometry, properties } = quake;
          const [lon, lat] = geometry.coordinates;

          return (
            <Marker
              key={quake.id}
              position={[lat, lon]}
              icon={createCustomIcon(quake)}
            >
              <Popup>
                <strong>Location:</strong> {properties.place} <br />
                <strong>Magnitude:</strong> {properties.mag} <br />
                <strong>Time:</strong> {formatTimestamp(properties.time)}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <Legend />
    </div>
  );
};

export default Map;