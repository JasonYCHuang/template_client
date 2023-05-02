import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useAppSelector } from '../../reducers/hooks';

const WeatherDisplayComp = () => {
  const { weather } = useAppSelector((state) => state.calculator);

  if (weather.city === '') {
    return null;
  }

  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#eee' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { weather.province }
          /
          { weather.city }
        </Typography>
        <Typography variant="h5" component="div">
          { weather.weather }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          { weather.temperature }
          /
          { weather.winddirection }
        </Typography>
        <Typography variant="body2">
          { weather.reporttime }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplayComp;
