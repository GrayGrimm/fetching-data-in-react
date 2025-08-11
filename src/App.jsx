import './App.css'
import * as weatherService from './services/weatherService'
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import { useState, useEffect } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';



const App = () => {
  const [weather, setWeather] = useState({});
  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };
  // The following log should be outside of the fetchData function

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await weatherService.show('Chicago');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };
    fetchDefaultData();
  }, []);

  return (
    <main>
      <h1>Wether API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
}

export default App
