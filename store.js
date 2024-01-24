// store.js

import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./src/redux/reducers/combineReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
