import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { TypInfoState } from '../types/info';
import { logInApi } from '../apis/user';

const initialState: TypInfoState = {
  isLoading: false,
  alertMeta: {
    isAlertOpen: false,
    title: '',
    content: '',
    severity: '',
  },
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload.isLoading;
    },
    toggleAlert: (state, { payload }) => {
      state.alertMeta = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInApi.fulfilled, (state, { payload }) => {
      if (payload.meta.status !== 'Y') {
        const loginErrAlert = {
          isAlertOpen: true,
          title: '帳號或密碼錯誤',
          content: '請重新輸入',
          severity: 'error',
        };
        state.alertMeta = loginErrAlert;
      }
    });
    builder.addMatcher(isAnyOf(
      logInApi.pending,
    ), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(
      logInApi.fulfilled,
    ), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(
      logInApi.rejected,
    ), (state) => {
      state.isLoading = false;
    });
  },
});

export const { toggleLoading, toggleAlert } = infoSlice.actions;

export default infoSlice.reducer;
