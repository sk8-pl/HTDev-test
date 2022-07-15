import { createSlice } from '@reduxjs/toolkit';
import { getItemLocalStorage, setItemLocalStorage } from '../../localStorage/iteractionLocalStorage';

const LOCATION_KEY = "location";
const SIGN_KEY = "sign";

export const formState = createSlice({
  name: 'dataForm',
  initialState: {
    location: getItemLocalStorage(LOCATION_KEY) || '',
    text: '',
    sign: getItemLocalStorage(SIGN_KEY) || '',
    dataTimeZone: {}
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
      setItemLocalStorage(LOCATION_KEY, action.payload)
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },
    changeSign: (state, action) => {
      state.sign = action.payload;
      setItemLocalStorage(SIGN_KEY, action.payload)
    },
    changeDataTime: (state, action) => {
      state.dataTimeZone = action.payload;
    },
  },
});

export const { changeLocation, changeText, changeSign, changeDataTime } = formState.actions;

export default formState.reducer;
