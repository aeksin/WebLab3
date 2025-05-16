import { WindDirection } from './WindDirection';

export const WeatherDetails = ({ weather }) => {
  const pressureMmHg = Math.round(weather.main.pressure * 0.75006);

  return (
    <div className="details">
      <p>Ощущается как: <span>{weather.main.feels_like}°C</span></p>
      <p>Влажность: <span>{weather.main.humidity}%</span></p>
      <p>Давление: <span>{pressureMmHg} мм рт. ст.</span></p>
      <p>Ветер: <span>{weather.wind.speed} м/с, </span>
        <WindDirection deg={weather.wind.deg} />
      </p>
    </div>
  );
};