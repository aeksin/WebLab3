import { useWeather } from '../context/WeatherContext';
import { WeatherIcon } from './WeatherIcon';
import { WeatherDetails } from './WeatherDetails';

export const WeatherDisplay = () => {
    const { weatherData, loading, error } = useWeather();
  
    if (loading) return <div className="loading">Загрузка...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!weatherData) return null;
  
    return (
      <div className="weather-info">
        <h2>{weatherData.city}</h2>
        <div className="weather-main">
          <WeatherIcon iconCode={weatherData.weather[0].icon} />
          <div>
            <span className="temp-now">{Math.round(weatherData.main.temp)}°C</span>
            <p className="weather-description">{weatherData.weather[0].description}</p>
          </div>
        </div>
        <WeatherDetails weather={weatherData} />
      </div>
    );
  };