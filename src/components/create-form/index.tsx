import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BtnSubmit from "../submit-btn";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { changeLocation, changeText, changeSign } from '../../store/form-state/form-state';


function FormTask() {
  const dispatch = useDispatch();
  const storeForm = useSelector((state: RootState) => state.dataForm);
  const location = storeForm.location as unknown as string;
  const currentText = storeForm.text as unknown as string;
  const currentSign = storeForm.sign as unknown as string;

  const [currentLocation, setCurrentLocation] = useState(location ? location : '');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [locationData, setLocationData] = useState([]);

  const handleChangeText = (value: string) => {
    dispatch(changeText(value));
  }
  const handleChangeSign = (value: string) => {
    dispatch(changeSign(value));
  }

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setCurrentLocation(event.target.value as string);
    dispatch(changeLocation(event.target.value as string))
  };

  const valueRef = useRef('description-task')

  useEffect(() => {
    if (!isLoaded) {
      fetch("https://worldtimeapi.org/api/timezone")
        .then((res) => res.json())
        .then(
          (result) => {
            setLocationData(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        .then(() => setIsLoaded(true));
    }
  }, [error, isLoaded, locationData]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <TextField
        inputRef={valueRef}
        style={{
          marginTop: "2rem",
          width: "100%",
        }}
        id="outlined-textarea"
        label="Запись"
        placeholder="Введите текст записи"
        minRows={4}
        multiline
        InputLabelProps={{
          shrink: true,
        }}
        value={currentText}
        onChange={e => handleChangeText(e.target.value)}
      />
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          label="Подпись"
          required
          inputProps={{ maxLength: 100 }}
          id="validation-outlined-input"
          multiline
          placeholder="Введите подпись"
          InputLabelProps={{
            shrink: true,
          }}
          value={currentSign}
          onChange={e => handleChangeSign(e.target.value)}
        />
        <Box sx={{ width: "250px" }}>
          <FormControl
            style={{
              width: "100%",
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Точное время по
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentLocation}
              label="Точное время по"
              onChange={handleChangeSelect}
            >
              {locationData.map((e: string) => {
                return (
                  <MenuItem value={e} key={e}>
                    {e}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
      <BtnSubmit />
    </div>
  );
}

export default FormTask;
