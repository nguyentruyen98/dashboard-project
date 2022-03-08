import './index.scss';

import clsx from 'clsx';
import {IWeatherCardProps} from 'components/weatherCard/index.d';
import round from 'lodash/round';
import React from 'react';
const WeatherCard = ({
  place = '-',
  temp = 0,
  country = '-',
  weather = '-',
}: IWeatherCardProps) => {
  const tempConvert = temp ? `${round(temp - 273.15)}°C` : '-';
  return (
    <div
      className={clsx(
        'weather-card',
        round(temp - 273.15) > 20 ? 'warm-bg' : 'cold-bg',
      )}
    >
      <p className="country">{`${place}, ${country}`}</p>
      <p className="temp">{tempConvert}</p>
      <p className="weather">{weather}</p>
    </div>
  );
};

export default WeatherCard;
