import React from "react";
import { Provider } from "react-redux";
import TodoList from "./component/TodoList";
import store from "./store";

function TodoListReduxApp() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default TodoListReduxApp;
