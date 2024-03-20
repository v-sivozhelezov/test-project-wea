import { useState } from "react";
import * as S from "./CenterBlock.styles";
import DailyTableWeather from "../dailyTableWeather/DailyTableWeather";
import CurrentWeatherBlock from "../currentWeatherBlock/CurrentWeatherBlock";

export default function CenterBlock() {
  const [searchedCity, setSearchedCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const fetchSearchCity = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru&format=json`
      );

      if (response?.status !== 200) {
        throw new Error("Сервер недоступен");
      }

      const responseData = await response.json();

      if (!responseData?.results) {
        throw new Error("Город отсутствует в базе");
      }

      setSelectedCity(
        `${responseData?.results[0]?.name}, ${responseData?.results[0]?.admin1}`
      );

      if (responseData?.results[0]?.name === responseData?.results[0]?.admin1) {
        setSelectedCity(responseData?.results[0]?.name);
      }

      setLoading(false);
      return responseData;
    } catch (error) {
      if (error.message === "Failed to fetch") {
        setLoading(false);
        setError("Сервер недоступен");
        return error;
      }
      setLoading(false);
      setError(error.message);
      return error;
    }
  };

  const fetchSearchWeather = async ({ latitudeCity, longitudeCity }) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitudeCity}&longitude=${longitudeCity}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&forecast_days=6&timezone=auto`
      );

      if (response?.status === 400) {
        throw new Error("Город отсутствует в базе");
      }

      if (response?.status !== (200 || 400)) {
        throw new Error("Сервер недоступен");
      }

      const responseData = await response.json();
      setSearchedCity("");
      setLoading(false);
      return responseData;
    } catch (error) {
      if (error.message === "Failed to fetch") {
        setLoading(false);
        setError("Сервер недоступен");
        return;
      }
      setLoading(false);
      setError(error.message);
      return null;
    }
  };

  const handleExecuteSearch = () => {
    if (!searchedCity) {
      setError("Введите название города");
      return;
    }
    fetchSearchCity(searchedCity).then((responseCityData) => {
      fetchSearchWeather({
        latitudeCity: responseCityData?.results[0]?.latitude,
        longitudeCity: responseCityData?.results[0]?.longitude,
      }).then((responseWeatherData) => {
        setWeatherData(responseWeatherData);
      });
    });
    setError("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleExecuteSearch();
    }
  };

  return (
    <>
      <S.CenterBlockHeading>Прогноз погоды</S.CenterBlockHeading>
      <S.CenterBlockSearchString>
        <S.SearchSVG>
          <use xlinkHref="/img/icon/sprite.svg#icon-search" />
        </S.SearchSVG>
        <S.SearchText
          type="search"
          placeholder="Введите название города"
          name="search"
          value={searchedCity}
          onChange={(event) => {
            setError("");
            setSearchedCity(event.target.value);
          }}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        {searchedCity && (
          <S.ClearButton type="button" onClick={() => setSearchedCity("")}>
            <S.ClearButtonImg src="/img/icon/clear.png" alt="clear" />
          </S.ClearButton>
        )}
        <S.SearchButton type="button" onClick={() => handleExecuteSearch()}>
          Найти
        </S.SearchButton>
      </S.CenterBlockSearchString>
      {error && (
        <S.messageContainer>
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </S.messageContainer>
      )}
      {isLoading && (
        <S.messageContainer>
          <S.LoadingMessage>Идет загрузка...</S.LoadingMessage>
        </S.messageContainer>
      )}
      {!isLoading && weatherData && (
        <>
          <CurrentWeatherBlock
            city={selectedCity}
            currentWeatherData={weatherData?.current}
          />
          <DailyTableWeather dailyWeatherData={weatherData?.daily} />
        </>
      )}
    </>
  );
}
