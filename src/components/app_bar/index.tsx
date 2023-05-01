import {
  AppBar, Paper,
  Toolbar, Typography,
} from '@mui/material';
import DrawerComp from './comp_drawer';
import UserAuthComp from './comp_user_auth';

const TitleComp = () => (
  <Typography
    variant="h6"
    component="div"
    sx={{ flexGrow: 1, fontWeight: '600' }}
  >
    React模板
  </Typography>
);

const AppBarComp = () => (
  <Paper>
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ minHeight: '60px !important' }}>
        <DrawerComp />
        <TitleComp />
        <UserAuthComp />
      </Toolbar>
    </AppBar>
  </Paper>
);

export default AppBarComp;
