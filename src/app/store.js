import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// configureStore has implemented rootReducers, combineReducers logic and redux-thunk internally

// state.counterState.xxx
export const store = configureStore({
  reducer: {
    counterState: counterReducer,
  },
});
