import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 3 }
    ]
  };
  handleIncrement = counterId => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterId);
    counters[index] = { ...counterId };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counterId => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterId);
    counters[index] = { ...counterId };
    if (counters[index].value !== 0) counters[index].value--;
    this.setState({ counters });
  };

  counterDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.length}
          onReset={this.handleReset}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.counterDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
