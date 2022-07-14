import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form-state/form-state';
import listReducer from './task-list/task-list';
import CardTask from '../interfaces/date.inteface';

export interface RootState {
  dataForm: {
    location: string;
    text: string;
    sign: string;
  },

  dataList: {
    list: Array<CardTask>
  }
}

export default configureStore({
  reducer: {
    dataForm: formReducer,
    dataList: listReducer
  },
});
