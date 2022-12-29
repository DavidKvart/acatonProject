import React, { Component } from "react";
import { FlightContext } from "./flightContext";
import { useContext } from "react";
const SingleFlight = (props) => {
  const { destination, id, flightNum, carrier, time, gate, status, getMap, trick } = props;
  const { displayFlight } = useContext(FlightContext);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let theTime = (h, m) => {
    if (h < 10 && m < 10) {
      m = "0" + m;
      h = "0" + h;
      return h + ":" + m;
    } else if (m < 10) {
      m = "0" + m;
      return h + ":" + m;
    } else if (h < 10) {
      h = "0" + h;
      return h + ":" + m;
    } else {
      return "--:--";
    }
  };
  return (
    <React.Fragment>
      <tr>
        <div className="departure-board" onClick={() => displayFlight(id, "arrival")}>
          {trick(destination)}
          <span className="letter letter-blank"></span>
          {trick(carrier)}
          <span className="letter letter-blank"></span>
          {trick(gate)}
          <span className="letter letter-blank"></span>
          {trick(theTime(hours, minutes))}
          <span className="letter letter-blank"></span>
          {trick(flightNum)}
          <span className="letter letter-blank"></span>
          {trick(status)}
        </div>
      </tr>
    </React.Fragment>
  );
};

export default SingleFlight;
