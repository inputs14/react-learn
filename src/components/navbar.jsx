import React from "react";
import { connect } from "react-redux";
import { RESET, GET_COUNTERS } from "../actions/actions";

const Navbar = Props => {
  function handleReset() {
    Props.dispatch({
      type: RESET
    });
  }

  function getCounters() {
    Props.dispatch({
      type: GET_COUNTERS
    });
  }
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="text-right">
          Total counters - &nbsp;
          <span className="badge badge-secondary">
            {Props.counters.counters.length}
          </span>
        </h1>{" "}
        &nbsp; &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </nav>
      <hr />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

export default connect(mapStateToProps)(Navbar);
