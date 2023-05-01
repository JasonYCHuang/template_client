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
    plusOne: (state) => {
      state.result += 1;
      console.log('plus one');
    },
    minusOne: (state) => {
      state.result -= 1;
      console.log('minus one');
    },
  },
});

export const { plusOne, minusOne } = calculatorSlice.actions;

export default calculatorSlice.reducer;
