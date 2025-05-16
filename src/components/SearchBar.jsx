import { useState } from 'react';
import { useWeatherAPI } from '../hooks/useWeatherAPI';

export const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeatherAPI();

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Введите город"
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
};