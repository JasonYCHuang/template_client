import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useAppDispatch } from '../../reducers/hooks';
import { getWeatherApi } from '../../apis/weather';

const styleSelectCityCode = {
  width: '200px',
};

const SelectCityCodeComp = (
  {
    cityCode, onSelect,
  }: {
    cityCode: string,
    onSelect: any,
  },
) => (
  <FormControl style={styleSelectCityCode}>
    <InputLabel id="select-city-code-label">城市代碼</InputLabel>
    <Select
      value={cityCode}
      onChange={onSelect}
    >
      <MenuItem value="110101">北京市</MenuItem>
      <MenuItem value="130300">秦皇島市</MenuItem>
      <MenuItem value="320800">淮安市</MenuItem>
      <MenuItem value="440306">深圳市寶安區</MenuItem>
    </Select>
  </FormControl>
);

const WeatherSelectComp = () => {
  const dispatch = useAppDispatch();
  const [cityCode, setCityCode] = useState('110101');
  const onSelect = (event: SelectChangeEvent<string>) => {
    setCityCode(event.target.value as string);
  };
  const onCheckWhether = () => {
    dispatch(getWeatherApi({ cityCode }));
  };

  return (
    <Stack spacing={2} direction="row">
      <SelectCityCodeComp
        cityCode={cityCode}
        onSelect={onSelect}
      />
      <Button
        variant="outlined"
        endIcon={<WbSunnyIcon />}
        onClick={onCheckWhether}
      >
        查詢天氣
      </Button>
    </Stack>
  );
};

export default WeatherSelectComp;
