export const WindDirection = ({ deg }) => {
    const directions = [
      'северный', 'северо-восточный', 'восточный', 'юго-восточный',
      'южный', 'юго-западный', 'западный', 'северо-западный'
    ];
    const index = Math.round((deg % 360) / 45) % 8;
    return <span>{directions[index]}</span>;
  };