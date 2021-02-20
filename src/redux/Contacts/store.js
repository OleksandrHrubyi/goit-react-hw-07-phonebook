import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./contactReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ["your/action/type"],
      // Ignore these field paths in all actions
      ignoredActionPaths: ["meta.arg", "payload.timestamp"],
      // Ignore these paths in the state
      ignoredPaths: ["items.dates"],
    },
  }),
});

export default store;
