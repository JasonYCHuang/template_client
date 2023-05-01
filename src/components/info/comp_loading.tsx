import {
  Box, CircularProgress, Dialog, DialogContent,
} from '@mui/material';
import { useAppSelector } from '../../reducers/hooks';

const SpinnerComp = () => (
  <Box sx={{ display: 'flex', padding: '30px 0px' }}>
    <CircularProgress
      size={50}
      sx={{ margin: 'auto' }}
    />
  </Box>
);

const LoadingComp = () => {
  const { isLoading } = useAppSelector((state) => state.info);
  return (
    <div>
      <Dialog
        open={isLoading}
        fullWidth
        sx={{
          maxWidth: '270px',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <DialogContent>
          <SpinnerComp />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoadingComp;
