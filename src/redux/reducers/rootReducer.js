import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";

// Combine both reducers into one rootReducer
export const rootReducer = combineReducers({
  userinfo: userReducer,
  cart: cartReducer,
});
