import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeDataTime, changeText } from "../../store/form-state/form-state";
import { addCardToList } from "../../store/task-list/task-list";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BtnSubmit = () => {
  const storeForm = useSelector((state: RootState) => state.dataForm);
  const location = storeForm.location as unknown as string;
  const currentText = storeForm.text as unknown as string;
  const currentSign = storeForm.sign as unknown as string;

  const [isDisabled, setDisbled] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  useEffect(() => {
    location !== "" && currentText !== "" && currentSign !== ""
      ? setDisbled(false)
      : setDisbled(true);
  }, [location, currentText, currentSign]);

  const getTimeObject = async () => {
    fetch(`https://worldtimeapi.org/api/timezone/${location}`)
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(changeDataTime(result));
          dispatch(
            addCardToList({
              text: currentText,
              sign: currentSign,
              tz: location,
              date: result,
            })
          );
          setLoading(false);
          dispatch(changeText(''))
          setOpenSuccess(true);
        },
        (error) => {
          console.log(error);
          setOpenError(true);
          setLoading(false)
        }
      );
  }

  const handleClick = () => {
    setLoading(true);
    getTimeObject();
  };


  return (
    <React.Fragment>
      <LoadingButton
        style={{
          position: "absolute",
          right: "0",
        }}
        size="small"
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        disabled={isDisabled}
      >
        Создать запись
      </LoadingButton>
      <Snackbar open={openSuccess} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Запись создана!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Ошибка при создании записи!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default BtnSubmit;
