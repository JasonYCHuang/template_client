import { createSlice } from '@reduxjs/toolkit';
import { TypCalculatorState } from '../types/calculator';
import { getWeatherApi } from '../apis/weather';
import { initWeather } from '../constants/weather';

const initialState: TypCalculatorState = {
  weather: initWeather,
  result: 0,
  status: 'idle',
  error: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    plusNum: (state, { payload }) => {
      state.result += payload;
      console.log('plus +');
    },
    minusNum: (state, { payload }) => {
      state.result -= payload;
      console.log('minus -');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherApi.pending, (state) => {
      state.status = 'loading';
      state.error = null;
      console.log('weatherApi loading...');
    });
    builder.addCase(getWeatherApi.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.status = 'idle';
      state.error = null;
      console.log('weatherApi fulfilled...');
    });
    builder.addCase(getWeatherApi.rejected, (state) => {
      state.status = 'idle';
      state.error = 'Err >> api.logInApi';
      console.log('weatherApi rejected...');
    });
  },
});

export const { plusNum, minusNum } = calculatorSlice.actions;

export default calculatorSlice.reducer;
