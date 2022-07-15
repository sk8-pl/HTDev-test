import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLS, setDataFromLS } from "../../localStorage/iteractionLocalStorage";

const DATA_LIST_KEY = "dataList";

export const taskList = createSlice({
  name: DATA_LIST_KEY,
  initialState: {
    list: getDataFromLS(DATA_LIST_KEY)
  },
  reducers: {
    addCardToList: (state, action) => {
      state.list.push(action.payload);
      setDataFromLS(DATA_LIST_KEY, state.list);
    },
  },
});

export const { addCardToList } = taskList.actions;

export default taskList.reducer;
