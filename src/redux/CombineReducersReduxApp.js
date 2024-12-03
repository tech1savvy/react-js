import React from "react";
import { Provider } from "react-redux";
import CombineReducers from "./CombineReducers";
import store from "./store";

function CombineReducersReduxApp() {
  return (
    <Provider store={store}>
      <div className="App">
        <CombineReducers />
      </div>
    </Provider>
  );
}

export default CombineReducersReduxApp;
