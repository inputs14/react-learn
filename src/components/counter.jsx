import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, DELETE } from "../actions/actions";

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

  handleIncrement = counterId => {
    this.props.dispatch({
      type: INCREMENT,
      payload: { counterId }
    });
  };

  handleDecrement = counterId => {
    this.props.dispatch({
      type: DECREMENT,
      payload: { counterId }
    });
  };

  counterDelete = counterId => {
    this.props.dispatch({
      type: DELETE,
      payload: { counterId }
    });
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
              onClick={() => this.handleIncrement(this.props.counter)}
              type="button"
              className="btn btn-success"
            >
              +
            </button>
          </div>
          <div className="col col-sm-2 col-md-1">
            <button
              onClick={() => this.handleDecrement(this.props.counter)}
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
              onClick={() => this.counterDelete(this.props.counter)}
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

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

export default connect(mapStateToProps)(counter);
