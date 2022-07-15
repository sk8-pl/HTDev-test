import { createSlice } from '@reduxjs/toolkit';

export const formState = createSlice({
  name: 'dataForm',
  initialState: {
    location: localStorage.getItem("location") || '',
    text: '',
    sign: localStorage.getItem("sign") || '',
    dataTimeZone: {}
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
      localStorage.setItem("location", action.payload)
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },
    changeSign: (state, action) => {
      state.sign = action.payload;
      localStorage.setItem("sign", action.payload)
    },
    changeDataTime: (state, action) => {
      state.dataTimeZone = action.payload;
    },
  },
});

export const { changeLocation, changeText, changeSign, changeDataTime } = formState.actions;

export default formState.reducer;
