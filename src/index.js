import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Counter from "./App/components/Counter";
import DestinationList from "./App/components/DestinationList";
import Header from "./App/layout/Header";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="text-white">
    <Provider store={store}>
      <Header />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4">Lista Destinacija</h4>
        <DestinationList />
      </div>
    </Provider>
  </div>
);
