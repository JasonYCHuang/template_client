import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useAppDispatch } from '../../reducers/hooks';
import { plusNum } from '../../actions/calculatorSlice';

const AddByInputComp = () => {
  const dispatch = useAppDispatch();

  const fieldRef = useRef<HTMLInputElement>();
  const onAddByInput = () => {
    const { value: fieldVal } = fieldRef.current || { value: '' };
    const intFieldVal = parseInt(fieldVal, 10) || 0;
    dispatch(plusNum(intFieldVal));
  };

  return (
    <Stack spacing={2} direction="row">
      <TextField
        label="輸入"
        variant="outlined"
        inputRef={fieldRef}
      />
      <Button
        variant="contained"
        color="success"
        startIcon={<AutoFixHighIcon />}
        onClick={onAddByInput}
      />
    </Stack>
  );
};

export default AddByInputComp;
