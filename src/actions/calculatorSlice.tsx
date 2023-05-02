import { createSlice } from '@reduxjs/toolkit';
import { TypCalculatorState } from '../types/calculator';

const initialState: TypCalculatorState = {
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
});

export const { plusNum, minusNum } = calculatorSlice.actions;

export default calculatorSlice.reducer;
