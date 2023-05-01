import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBarComp from './app_bar/index';
import RoutesComp from './comp_routes';
import LogInComp from './log_in/index';
import LoadingComp from './info/comp_loading';
import AlertComp from './info/comp_alert';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';
import { setAuth } from '../actions/userSlice';
import { loadStateFromLocal } from '../utils/localStorage';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const Main = () => {
  const { auth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const validateAuth = (authState: any) => {
    const localAuth = authState ? authState.auth : 0;
    if ((+new Date() - localAuth < 1000 * 60 * 60 * 24)) {
      dispatch(setAuth(authState));
    } else {
      dispatch(setAuth({ auth: false }));
    }
  };

  useEffect(() => {
    const localState = loadStateFromLocal();
    validateAuth(localState);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBarComp />
      <br />
      {
        auth
          ? <LogInComp />
          : <RoutesComp />
      }
      <LoadingComp />
      <AlertComp />
    </ThemeProvider>
  );
};

export default Main;
