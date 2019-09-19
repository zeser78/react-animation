import React, { Component } from "react";
import Routes from "./Routes.js";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>{Routes}</div>
      </BrowserRouter>
    );
  }
}
