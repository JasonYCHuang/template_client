import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { toggleAlert } from '../../actions/infoSlice';

const AlertComp = () => {
  const { alertMeta } = useAppSelector((state) => state.info);
  const {
    isAlertOpen, title, content, severity,
  } = alertMeta;
  const dispatch = useAppDispatch();
  const onCloseAlert = () => dispatch(toggleAlert({
    isAlertOpen: false,
    severity: '',
  }));

  return (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={5000}
      onClose={onCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={severity}>
        <AlertTitle>
          <strong>{title}</strong>
        </AlertTitle>
        <br />
        <strong>{content}</strong>
      </Alert>
    </Snackbar>
  );
};

export default AlertComp;
