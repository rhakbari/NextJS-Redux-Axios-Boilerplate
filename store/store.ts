import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger();
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
  preloadedState: initialState,
});

export default store;
