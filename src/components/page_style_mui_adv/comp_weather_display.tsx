import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const WeatherDisplayComp = () => (
  <Card sx={{ minWidth: 275, backgroundColor: '#eee' }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        上海
        /
        普陀區
      </Typography>
      <Typography variant="h5" component="div">
        暴風雪
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        -10
        /
        东南
      </Typography>
      <Typography variant="body2">
        2001/12/31
      </Typography>
    </CardContent>
  </Card>
);

export default WeatherDisplayComp;
