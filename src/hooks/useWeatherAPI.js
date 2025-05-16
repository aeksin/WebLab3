import { useWeather } from '../context/WeatherContext';

export const useWeatherAPI = () => {
  const { setWeatherData, setLoading, setError } = useWeather();
  
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);

      const geoResponse = await fetch(
        `https://geocode-maps.yandex.ru/v1/?apikey=${import.meta.env.VITE_GEOCODER_API_KEY}&geocode=${city}&format=json`
      );
      const geoData = await geoResponse.json();
      
      const pos = geoData.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      const [lon, lat] = pos;

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric&lang=ru`
      );
      
      if (!weatherResponse.ok) {
        throw new Error('Ошибка получения погоды');
      }

      const weatherData = await weatherResponse.json();
      setWeatherData({ ...weatherData, city:  city });
    } catch (error) {
      setError(error.message || 'Ошибка получения данных');
    } finally {
      setLoading(false);
    }
  };

  return { fetchWeather };
};