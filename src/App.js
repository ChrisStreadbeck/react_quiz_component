import React, { Component } from "react";

import "./App.css";
import Quiz from "./Quiz";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Quiz />
      </div>
    );
  }
}

export default App;
