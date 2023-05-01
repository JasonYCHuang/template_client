import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../actions/userSlice';
import infoReducer from '../actions/infoSlice';
import calculatorReducer from '../actions/calculatorSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
