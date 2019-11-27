import React from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import TodoList from "./components/TodoList";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
