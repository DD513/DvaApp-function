import React, { Component } from "react";
import { Provider } from "react-redux";
import { create } from "dva-core";
import Router from "./app/router";

import name from "./app/models/nameModel";
import message from "./app/models/messageModel";

const app = create(); // 使用create方法建立Dva架構。
app.model(name);
app.model(message);

app.start();
const store = app._store;

export default App = () => {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  );
};
