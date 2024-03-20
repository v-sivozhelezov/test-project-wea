import weatherCode from "../../utils/weatherCode";
import * as S from "./CurrentWeatherBlock.styles";

export default function CurrentWeatherBlock(props) {
  const { city } = props;
  const { temperature_2m, weather_code, wind_speed_10m, relative_humidity_2m } =
    props?.currentWeatherData;

  return (
    <S.CurrentWeatherContainer>
      <p>{city}</p>
      <S.CurrentWeatherHeading>
        {Math.round(temperature_2m)}°С
      </S.CurrentWeatherHeading>
      <S.CurrentWeatherImg
        src={`/img/icon/weather-${weather_code}.png`}
        alt="icon"
      />
      <p style={{ marginBottom: "5px" }}>{weatherCode[weather_code]}</p>
      <p>{`Ветер: ${Math.round(
        wind_speed_10m
      )} м/с | Влажность: ${relative_humidity_2m}%`}</p>
    </S.CurrentWeatherContainer>
  );
}
