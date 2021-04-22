import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import { Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactGA.initialize("UA-26897832-6");
ReactGA.pageview(window.location.pathname);
hist.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
