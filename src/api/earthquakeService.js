
const API_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

export const fetchEarthquakeData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.features;
  } catch (error) {
    console.error("Failed to fetch earthquake data:", error);
    throw error;
  }
};