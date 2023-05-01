import { createSlice } from '@reduxjs/toolkit';
import { TypUserState } from '../types/user';
import { logInApi } from '../apis/user';
import { saveStateToLocal } from '../utils/localStorage';

const initialState: TypUserState = {
  auth: false,
  empId: '',
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      const { auth, empId } = payload;
      state.auth = auth;
      state.empId = empId;
      if (!auth) saveStateToLocal(auth);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInApi.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(logInApi.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      if (payload.meta.status === 'Y') {
        state.auth = +new Date();
        state.empId = payload.data.Empid;
        saveStateToLocal({
          auth: state.auth,
          empId: state.empId,
        });
      } else {
        state.auth = false;
        state.empId = null;
      }
    });
    builder.addCase(logInApi.rejected, (state) => {
      state.status = 'idle';
      state.error = 'Err >> api.logInApi';
    });
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
