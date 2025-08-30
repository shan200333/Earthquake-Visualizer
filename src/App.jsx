
import React, { useState } from 'react'; 
import { useEarthquakeData } from './hooks/useEarthquakeData';
import Map from './components/Map/MapContainer';
import Header from './components/UI/Header';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ErrorMessage from './components/UI/ErrorMessage';
import FilterControl from './components/UI/FilterControl'; 
import './App.css';

function App() {
  const { earthquakes, isLoading, error } = useEarthquakeData();
  const [minMagnitude, setMinMagnitude] = useState(0);

  const handleFilterChange = (event) => {
    setMinMagnitude(parseFloat(event.target.value));
  };

  const filteredEarthquakes = earthquakes.filter(
    (quake) => quake.properties.mag >= minMagnitude
  );

  return (
    <div className="App">
      <Header />
      {/* Conditionally render the filter only when data is loaded */}
      {!isLoading && !error && (
        <FilterControl 
          minMagnitude={minMagnitude} 
          onFilterChange={handleFilterChange} 
        />
      )}
      <main>
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {/* Pass the FILTERED data to the map */}
        {!isLoading && !error && <Map earthquakes={filteredEarthquakes} />}
      </main>
    </div>
  );
}

export default App;