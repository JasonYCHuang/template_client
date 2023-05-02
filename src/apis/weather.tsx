/* eslint-disable import/prefer-default-export */

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  TypWeatherContent, TypWeatherApiInput, TypWeatherObj,
} from '../types/weather';
import { weatherApiUrl, initWeather } from '../constants/weather';

export const getWeatherApi = createAsyncThunk(
  '/api/weather',
  async (
    { cityCode } : TypWeatherApiInput,
  ) => {
    const apiEndpoint = `${weatherApiUrl}${cityCode}`;
    const rsp = await fetch(apiEndpoint, {
      method: 'GET',
    });
    const data: TypWeatherContent = await rsp.json();
    let weather: TypWeatherObj = initWeather;
    if (data.lives.length > 0) {
      const live = data.lives[0];
      weather = {
        ...weather,
        ...{
          province: live.province,
          city: live.city,
          adcode: live.adcode,
          weather: live.weather,
          temperature: live.temperature,
          winddirection: live.winddirection,
          reporttime: live.reporttime,
        },
      };
    }
    return weather;
  },
);
