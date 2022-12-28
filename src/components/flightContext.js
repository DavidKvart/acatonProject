import React from "react";
import { usarrivalEstimateate } from "react";
import { departureApi } from "./data";
import { arrivalApi } from "./data";
import { useState } from "react";
import { useEffect } from "react";

export const FlightContext = React.createContext("");

let fillteredDeparture = departureApi.data.map((flight, index) => {
  let delaytime = flight.departure.delay;
  let message = "";

  if (parseInt(delaytime) > 0) {
    message = "LATE";
  } else message = "ON TIME";

  return {
    id: index,
    carrier: flight.airline.icaoCode,
    flightNumber: flight.flight.iataNumber,
    departure: {
      airport: flight.departure.iataCode,
      terminal: "T3",
      gate: flight.departure.gate,
      delay: flight.departure.delay,
      scheduled: new Date(flight.departure.scheduledTime),
      estimated: new Date(flight.departure.estimatedTime),
    },
    arrival: {
      airport: flight.arrival.iataCode,
      terminal: flight.arrival.terminal,
      gate: flight.arrival.gate,
      delay: "",
      scheduled: new Date(flight.arrival.scheduledTime),
      estimated: new Date(flight.arrival.estimatedTime),
    },
    status: message,
  };
});
let fillteredArrival = arrivalApi.data.map((flight, index) => {
  let delaytime;
  let arrivalSceduale = "";
  let arrivalEstimate = "";
  if (!flight.arrival.estimatedTime == "") {
    arrivalSceduale = new Date(flight.arrival.scheduledTime);
    arrivalEstimate = new Date(flight.arrival.estimatedTime);
    delaytime = (arrivalSceduale - arrivalEstimate) / 1000 / 60;
  } else {
    arrivalSceduale = new Date(flight.departure.scheduledTime);
    arrivalEstimate = "";
  }
  let depatDelay;
  let departureSceduale = "";
  let departureEstimate = "";
  if (!flight.departure.estimatedTime == "") {
    departureSceduale = new Date(flight.departure.scheduledTime);
    departureEstimate = new Date(flight.departure.estimatedTime);
    depatDelay = (departureSceduale - departureEstimate) / 1000 / 60;
  } else {
    departureSceduale = new Date(flight.departure.scheduledTime);
    departureEstimate = 0;
  }
  let message = "";
  if (delaytime > 0) {
    message = "LATE";
  } else message = "ON TIME";
  return {
    id: index,
    carrier: flight.airline.icaoCode,
    flightNumber: flight.flight.iataNumber,
    departure: {
      airport: flight.departure.iataCode,
      terminal: flight.departure.terminal,
      gate: flight.departure.gate,
      delay: "",
      scheduled: departureSceduale,
      estimated: departureEstimate,
    },
    arrival: {
      airport: flight.arrival.iataCode,
      terminal: flight.arrival.terminal,
      gate: flight.arrival.gate,
      delay: delaytime,
      scheduled: arrivalSceduale,
      estimated: arrivalEstimate,
    },
    status: message,
  };
});

const ContextProvider = ({ children }) => {
  const [arrivals, setArrivals] = useState(fillteredArrival);
  const [departure, setDeparture] = useState(fillteredDeparture);
  const [counter, setCounter] = useState(0);

  console.log(departure);
  console.log(arrivals);
  return <FlightContext.Provider value={{ arrivals, departure }}>{children}</FlightContext.Provider>;
};

export default ContextProvider;
