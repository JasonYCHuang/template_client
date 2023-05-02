import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CalcByBtnComp from './comp_calc_by_btn';
import AddByInputComp from './comp_add_by_input';
import WeatherSelectComp from './comp_weather_select';
import WeatherDisplayComp from './comp_weather_display';

const styleRoot = {
  border: '1px solid red',
};

const styleCalculator = {
  border: '2px solid blue',
};

const styleWeather = {
  border: '2px solid green',
};

const PageStyleMui = () => (
  <Box style={styleRoot}>
    <Grid container spacing={2}>
      <Grid item style={styleCalculator} xs={4}>
        <CalcByBtnComp />
        <br />
        <AddByInputComp />
      </Grid>
      <Grid item style={styleWeather} xs={8}>
        <WeatherSelectComp />
        <br />
        <WeatherDisplayComp />
      </Grid>
    </Grid>
  </Box>
);

export default PageStyleMui;
