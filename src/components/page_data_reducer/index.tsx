import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { plusOne, minusOne } from '../../actions/calculatorSlice';

const styleRoot = {
  border: '1px solid red',
};

const styleScreen = {
  backgroundColor: '#ddd',
  padding: '10px 30px 10px 30px',
};

const CalcByBtnComp = () => {
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.calculator);

  const onPlusOne = () => {
    dispatch(plusOne());
  };
  const onMinusOne = () => {
    dispatch(minusOne());
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        startIcon={<RemoveCircleOutlineIcon />}
        onClick={onMinusOne}
      >
        -1
      </Button>
      <Typography variant="h5" style={styleScreen}>
        { result }
      </Typography>
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={onPlusOne}
      >
        +1
      </Button>
    </Stack>
  );
};

const AddByInputComp = () => (
  <Stack spacing={2} direction="row">
    <TextField label="輸入" variant="outlined" />
    <Button variant="contained" color="success" startIcon={<AutoFixHighIcon />} />
  </Stack>
);

const PageStyleMui = () => (
  <Box style={styleRoot}>
    <CalcByBtnComp />
    <br />
    <AddByInputComp />
  </Box>
);

export default PageStyleMui;
