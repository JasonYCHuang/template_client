import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { plusNum, minusNum } from '../../actions/calculatorSlice';

const styleScreen = {
  backgroundColor: '#ddd',
  padding: '10px 30px 10px 30px',
};

const delta = 5;

const CalcByBtnComp = () => {
  const dispatch = useAppDispatch();
  const { result } = useAppSelector((state) => state.calculator);

  const onPlusNum = (num: number) => {
    dispatch(plusNum(num));
  };
  const onMinusNum = (num: number) => {
    dispatch(minusNum(num));
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        startIcon={<RemoveCircleOutlineIcon />}
        onClick={() => onMinusNum(delta)}
      >
        -
      </Button>
      <Typography variant="h5" style={styleScreen}>
        { result }
      </Typography>
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => onPlusNum(delta)}
      >
        +
      </Button>
    </Stack>
  );
};

export default CalcByBtnComp;
