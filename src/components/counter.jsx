import React, { Component } from "react";

class counter extends Component {
  getBadgeClass = () => {
    if (this.props.counter.value !== 0) {
      return "badge badge-pill badge-primary";
    } else {
      return "badge badge-pill badge-warning";
    }
  };

  getCounterValue = () => {
    if (this.props.counter.value === 0) return "Zero";
    return this.props.counter.value;
  };

  getDisabledState = () => {
    if (this.props.counter.value === 0) return true;
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col col-sm-3 col-md-1">
            <h4>
              <span className={this.getBadgeClass()}>
                {this.getCounterValue()}
              </span>
            </h4>
          </div>
          <div className="col col-sm-2 col-md-1">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              type="button"
              className="btn btn-success"
            >
              +
            </button>
          </div>
          <div className="col col-sm-2 col-md-1">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              type="button"
              className="btn btn-secondary"
              disabled={this.getDisabledState()}
            >
              -
            </button>
          </div>
          <div className="col col-sm-2 col-md-1">
            <button
              type="button"
              onClick={() => this.props.onDelete(this.props.counter)}
              className="btn btn-danger"
            >
              x
            </button>
          </div>
          <div className="col col-sm-3 col-md-2">
            <h4>Counters {this.props.counter.id}</h4>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default counter;
