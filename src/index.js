import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Promise & fetch polyfill
import 'isomorphic-fetch'
import ES6Promise from 'es6-promise'

import {store} from './redux/store'
import App from "./App";

ES6Promise.polyfill()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
