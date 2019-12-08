import React, { Component } from "react";
import Counter from "./counter";
import { connect } from "react-redux";

class Counters extends Component {
  render() {
    return (
      <div className="container card border-primary">
        <div className="card-body">
          <h2 className="card-title ">Counters under Redux</h2>
          <hr />
          <div className="card-text">
            {this.props.counters.counters.map(c => (
              <Counter key={c.id} counter={c} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

export default connect(mapStateToProps)(Counters);
