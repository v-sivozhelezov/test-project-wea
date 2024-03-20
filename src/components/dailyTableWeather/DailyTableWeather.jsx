import { getFormatDate } from "../../utils/getFormatDate";
import weatherCode from "../../utils/weatherCode";
import * as S from "./DailyTableWeather.styles";

export default function DailyTableWeather(props) {
  const {
    time,
    weather_code,
    temperature_2m_max,
    temperature_2m_min,
    wind_speed_10m_max,
  } = props?.dailyWeatherData;

  return (
    <>
      <S.TableWeatherList>
        <S.TableWeatherListHeader>Дата</S.TableWeatherListHeader>
        {time?.map((date, index) => {
          return (
            <S.TableWeatherListItem key={index}>
              {getFormatDate(date)}
            </S.TableWeatherListItem>
          );
        })}
      </S.TableWeatherList>
      <S.TableWeatherList>
        <S.TableWeatherListHeader>Погода</S.TableWeatherListHeader>
        {weather_code?.map((code, index) => {
          return (
            <S.TableWeatherListItem key={index}>
              <S.ListItemBox>
                <S.TableWeatherListImg
                  style={{ height: "45px" }}
                  src={`/img/icon/weather-${code}.png`}
                  alt="icon"
                />
                <S.TableWeatherListText style={{ textAlign: "center" }}>
                  {weatherCode[code]}
                </S.TableWeatherListText>
              </S.ListItemBox>
            </S.TableWeatherListItem>
          );
        })}
      </S.TableWeatherList>
      <S.TableWeatherList>
        <S.TableWeatherListHeader>Макс. t°С</S.TableWeatherListHeader>
        {temperature_2m_max?.map((minTemp, index) => {
          return (
            <S.TableWeatherListItem key={index}>
              {Math.round(minTemp)}
            </S.TableWeatherListItem>
          );
        })}
      </S.TableWeatherList>
      <S.TableWeatherList>
        <S.TableWeatherListHeader>Мин. t°С</S.TableWeatherListHeader>
        {temperature_2m_min?.map((minTemp, index) => {
          return (
            <S.TableWeatherListItem key={index}>
              {Math.round(minTemp)}
            </S.TableWeatherListItem>
          );
        })}
      </S.TableWeatherList>
      <S.TableWeatherList>
        <S.TableWeatherListHeader>Ветер м/с</S.TableWeatherListHeader>
        {wind_speed_10m_max?.map((windSpeed, index) => {
          return (
            <S.TableWeatherListItem key={index}>
              {Math.round(windSpeed)}
            </S.TableWeatherListItem>
          );
        })}
      </S.TableWeatherList>
    </>
  );
}
