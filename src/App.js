import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    const fd = [1, 2, 3];
    return (
      <div className="App">
        <Navbar title={fd} />
      </div>
    );
  }
}

export default App;
