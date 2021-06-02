// https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import "index.css";
import App from "App";
import reportWebVitals from "reportWebVitals";
import reducers from "store/reducers";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunkMiddleware))}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
