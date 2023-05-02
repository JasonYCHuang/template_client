import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const styleSelectCityCode = {
  width: '200px',
};

const SelectCityCodeComp = () => (
  <FormControl style={styleSelectCityCode}>
    <InputLabel id="select-city-code-label">城市代碼</InputLabel>
    <Select>
      <MenuItem value="110101">北京市</MenuItem>
      <MenuItem value="130300">秦皇島市</MenuItem>
      <MenuItem value="320800">淮安市</MenuItem>
      <MenuItem value="440306">深圳市寶安區</MenuItem>
    </Select>
  </FormControl>
);

const WeatherSelectComp = () => (
  <Stack spacing={2} direction="row">
    <SelectCityCodeComp />
    <Button
      variant="outlined"
      endIcon={<WbSunnyIcon />}
    >
      查詢天氣
    </Button>
  </Stack>
);

export default WeatherSelectComp;
