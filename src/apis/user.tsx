/* eslint-disable import/prefer-default-export */

import { createAsyncThunk } from '@reduxjs/toolkit';
import md5 from 'blueimp-md5';
import { TypLogInContent, TypLogInApiInput } from '../types/user';
import { apiConst } from '../constants/api';

export const logInApi = createAsyncThunk(
  '/api/user/log_in_sso',
  async (
    { userId, password } : TypLogInApiInput,
  ) => {
    const apiEndpoint = `${apiConst.address}/api/user/log_in_sso`;
    const rsp = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        payload: {
          user_id: userId,
          password: md5(password).toString().toUpperCase(),
        },
      }),
    });
    const data: TypLogInContent = await rsp.json();
    return data;
  },
);
