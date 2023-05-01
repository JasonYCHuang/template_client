import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../actions/userSlice';
import infoReducer from '../actions/infoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
