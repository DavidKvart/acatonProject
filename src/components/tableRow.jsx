import React, { Component } from "react";
const SingleFlight = (props) => {
  const { destination, id, flightNum, carrier, time, gate, status, showMap,trick } =
    props;

  return (
    <React.Fragment>
      <tr>
        <div className="departure-board">
          {trick(destination)}
          <span className="letter letter-blank"></span>
          {trick(carrier)}
          <span className="letter letter-blank"></span>
          {trick(flightNum)}
          <span className="letter letter-blank"></span>
          {trick(gate)}
          <span className="letter letter-blank"></span>
          {trick(time)}
          <span className="letter letter-blank"></span>
          {trick(status)}
          <span className="letter letter-blank"></span>
        </div>
      </tr>
    </React.Fragment>
  );
};

export default SingleFlight;
