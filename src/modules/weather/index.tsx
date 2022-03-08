import {Select} from 'antd';
import WeatherCard from 'components/weatherCard';
import {CONFIG} from 'configs';
import {API_METHODS, WEATHER_API_KEY} from 'constants/index';
import useApi from 'hook/useApi';
import React, {useState} from 'react';
const {Option} = Select;

const Weather = () => {
  const [city, setCity] = useState({lon: 106.666672, lat: 10.83333});
  // console.log(city);
  const {data: weatherData, setCurrentParams} = useApi({
    url: `${CONFIG.API.WEATHER}?lat=${city.lat}&lon=${city.lon}&appid=${WEATHER_API_KEY}`,
    method: API_METHODS.GET,
    loadInitialState: true,
  });
  const handleChange = (value: string) => {
    if (value === 'HaNoi') {
      setCity({lon: 105.841171, lat: 21.0245});
    } else {
      setCity({lon: 106.666672, lat: 10.83333});
    }
    setCurrentParams({});
  };

  return (
    <>
      <div>
        <WeatherCard
          place={weatherData?.name}
          temp={weatherData?.main?.temp}
          country={weatherData?.sys?.country}
          weather={weatherData?.weather[0].main}
        />
      </div>
      <Select style={{width: 120}} onChange={handleChange} defaultValue="HCM">
        <Option value="HaNoi">Ha Noi</Option>
        <Option value="HCM">Ho Chi Minh City</Option>
      </Select>
      <p>{city.lat}</p>
    </>
  );
};

export default Weather;
