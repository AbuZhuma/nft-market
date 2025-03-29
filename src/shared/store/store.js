import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../../app/api/exampleSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
});