import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemSlice.js';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  }
});

export default store;
