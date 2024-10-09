import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const apiKey = "04f24a23faeef5995ff6af3ae5d5c670";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      axios
        .get(url)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [latitude, longitude]);

  return (
    <div className="weather">
      {weather ? (
        <div className="weather__container">
          <p className="weather__container_title">날씨 정보</p>
          <p className="weather__container_location">
            지역:
            <span className="weather__container_location_value">
              {weather.name}
            </span>
          </p>
          <p className="weather__container_temperature">
            온도:
            <span className="weather__container_temperature_value">
              {Math.floor(weather.main.temp - 273)}°C
            </span>
          </p>
          <div
            style={{
              backgroundImage: `url('https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png')`,
            }}
            className="weather__container_img"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
