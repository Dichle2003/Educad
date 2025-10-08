import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/storeUser";

const store = configureStore({
  reducer: {
    userReducer
  },
});

export default store;