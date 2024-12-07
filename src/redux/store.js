import { configureStore } from '@reduxjs/toolkit';
import connectsReducer from './connectsSlice';
import commentsReducer from './commentsSlice';
import clickReducer from './clickSlice'; 

export default configureStore({
  reducer: {
    connects_redux_slice: connectsReducer,
    comments_redux_slice: commentsReducer,
    click_redux_slice: clickReducer,
  },
});
