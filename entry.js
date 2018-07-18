import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./src/Index.bs";

const render = Component => {
  ReactDOM.render(
    React.createElement(AppContainer, null, React.createElement(App)),
    document.getElementById("index")
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./src/Index.bs", () => {
    render(App);
  });
}
