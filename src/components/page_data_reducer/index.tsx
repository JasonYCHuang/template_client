import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const styleScreen = {
  backgroundColor: '#ddd',
  padding: '10px 30px 10px 30px',
};

const CalcByBtnComp = () => (
  <Stack spacing={2} direction="row">
    <Button variant="contained" startIcon={<RemoveCircleOutlineIcon />}>
      -1
    </Button>
    <Typography variant="h5" style={styleScreen}>
      0
    </Typography>
    <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
      +1
    </Button>
  </Stack>
);

const AddByInputComp = () => (
  <Stack spacing={2} direction="row">
    <TextField label="輸入" variant="outlined" />
    <Button variant="contained" color="success" startIcon={<AutoFixHighIcon />} />
  </Stack>
);

const PageStyleMui = () => (
  <Box>
    <CalcByBtnComp />
    <br />
    <AddByInputComp />
  </Box>
);

export default PageStyleMui;
