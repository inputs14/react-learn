import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="container card border-primary">
        <div className="card-body">
          <h2 className="card-title ">Counters</h2>
          <hr />
          <div className="card-text">
            {this.props.counters.map(c => (
              <Counter
                key={c.id}
                counter={c}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
