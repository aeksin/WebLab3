import { WeatherProvider } from './context/WeatherContext';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import './App.css';

export const App = () => {
  return (
    <WeatherProvider>
      <div className="container">
        <h1>Погода сейчас</h1>
        <SearchBar />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
};