import { TypWeatherObj } from '../types/weather';

/* eslint-disable import/prefer-default-export */

export const weatherApiUrl = 'https://restapi.amap.com/v3/weather/weatherInfo?key=befe25eb1e770860ce98811b6ac9e890&city=';

export const initWeather: TypWeatherObj = {
  province: '',
  city: '',
  adcode: '',
  weather: '',
  temperature: '',
  winddirection: '',
  reporttime: '',
};
