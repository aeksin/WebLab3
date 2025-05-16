export const WeatherIcon = ({ iconCode }) => {
    return (
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="Погода"
        className="weather-icon"
      />
    );
  };