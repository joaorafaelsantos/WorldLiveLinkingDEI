import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WorldLiveLinking</title>
      </Helmet>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
