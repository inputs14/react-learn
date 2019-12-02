import React from "react";

const Navbar = Props => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="text-right">
          Total counters - &nbsp;
          <span className="badge badge-secondary">{Props.totalCounters}</span>
        </h1>{" "}
        &nbsp; &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={() => Props.onReset()}
        >
          Reset
        </button>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
