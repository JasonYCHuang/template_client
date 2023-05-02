import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const styleScreen = {
  backgroundColor: '#ddd',
  padding: '10px 30px 10px 30px',
};

const CalcByBtnComp = () => (
  <Stack spacing={2} direction="row">
    <Button
      variant="contained"
      startIcon={<RemoveCircleOutlineIcon />}
    >
      -
    </Button>
    <Typography variant="h5" style={styleScreen}>
      { 123 }
    </Typography>
    <Button
      variant="outlined"
      startIcon={<AddCircleOutlineIcon />}
    >
      +
    </Button>
  </Stack>
);

export default CalcByBtnComp;
