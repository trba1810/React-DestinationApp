import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./App/components/Counter";
import Header from "./App/layout/Header";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="text-white">
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  </div>
);
