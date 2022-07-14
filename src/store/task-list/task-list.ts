import { createSlice } from "@reduxjs/toolkit";
import { TaskObjectType } from "../../interfaces/date.inteface";

// [] as Array<TaskObjectType>

export const taskList = createSlice({
  name: "dataList",
  initialState: {
    list: JSON.parse(localStorage.getItem("dataList") || '[]') as Array<TaskObjectType>
  },
  reducers: {
    addCardToList: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("dataList", JSON.stringify(state.list));
    },
  },
});

export const { addCardToList } = taskList.actions;

export default taskList.reducer;
