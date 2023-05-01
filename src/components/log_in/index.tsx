import React, { useState } from 'react';
import {
  Avatar, Button, TextField, Box, Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch } from '../../reducers/hooks';
import { logInApi } from '../../apis/user';

const theme = createTheme();

const extractSubmit = (tagName: string, e: React.FormEvent<HTMLFormElement>) => {
  const els = e.currentTarget.elements;
  const val = els.namedItem(tagName) as HTMLInputElement;
  return val ? val.value : '';
};

const FieldsComp = () => {
  const [pwd, setPwd] = useState('');
  const dispatch = useAppDispatch();

  const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = extractSubmit('email', e);
    const password = extractSubmit('password', e);
    await dispatch(logInApi({
      userId,
      password,
    }));
    setPwd('');
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} />
      <Box
        component="form"
        onSubmit={onSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="帳號"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="密碼"
          name="password"
          type="password"
          autoComplete="current-password"
          value={pwd}
          onChange={onChangePwd}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={pwd === ''}
        >
          登錄
        </Button>
      </Box>
    </Box>
  );
};

const LogInComp = () => (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <FieldsComp />
    </Container>
  </ThemeProvider>
);

export default LogInComp;
