import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Counters />
      </React.Fragment>
    );
  }
}

export default App;
