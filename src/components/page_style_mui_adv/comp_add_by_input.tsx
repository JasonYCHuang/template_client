import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const AddByInputComp = () => (
  <Stack spacing={2} direction="row">
    <TextField
      label="輸入"
      variant="outlined"
    />
    <Button
      variant="contained"
      color="success"
      startIcon={<AutoFixHighIcon />}
    />
  </Stack>
);

export default AddByInputComp;
