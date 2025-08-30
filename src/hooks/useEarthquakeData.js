import { useState, useEffect } from 'react';
import { fetchEarthquakeData } from '../api/earthquakeService';

export const useEarthquakeData = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchEarthquakeData();
        setEarthquakes(data);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []); 

  return { earthquakes, isLoading, error };
};