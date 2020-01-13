import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
}

export default App;
