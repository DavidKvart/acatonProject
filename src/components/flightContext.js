import React from "react";

import { departureApi } from "./data";
import { arrivalApi } from "./data";
import { useState } from "react";
import { airport } from "./data";

import { useNavigate } from "react-router-dom";

export const FlightContext = React.createContext("");

let fillteredDeparture = departureApi.data.map((flight, index) => {
  let delaytime = flight.departure.delay;
  let message = "";

  if (parseInt(delaytime) > 0) {
    message = "ON TIME";
  } else message = "LATE";

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
    message = "ON TIME";
  } else message = "LATE";

  return {
    id: index,
    carrier: flight.airline.icaoCode,
    flightNumber: flight.flight.iataNumber,
    departure: {
      airport: flight.departure.iataCode,
      airportIcao: flight.departure.icaoCode,
      terminal: flight.departure.terminal,
      gate: flight.departure.gate,
      delay: "",
      scheduled: departureSceduale,
      estimated: departureEstimate,
    },
    arrival: {
      airport: flight.arrival.iataCode,
      airportIcao: flight.arrival.icaoCode,
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
  const navigate = useNavigate();
  const [arrivals, setArrivals] = useState(fillteredArrival);
  const [departure, setDeparture] = useState(fillteredDeparture);
  const [destLat, setDestLat] = useState(51.509865);
  const [destLon, setDestLon] = useState(-0.118092);
  const [pickedFlight, setPicked] = useState("AT228");

  console.log(departure);
  const handlePicked = (val) => {
    setPicked(val.value.toUpperCase());
    navigate("/table/single");
  };
  let airportArr = Object.entries(airport);
  const displayFlight = (id, type) => {
    let airportIcao = "";
    let icaoCode = "";
    let lon = "";
    let lat = "";

    if (type == "arrival") {
      airportIcao = arrivals.find((f) => f.id == id);

      icaoCode = airportIcao.departure.airportIcao;

      let airportLocaition = airportArr.find((air) => air[0] == icaoCode);
      setDestLat(airportLocaition[1].lat);
      setDestLon(airportLocaition[1].lon);
      console.log(destLat);
      console.log(destLon);
      navigate("/table/map");

      return airportLocaition;
    }
  };

  return <FlightContext.Provider value={{ pickedFlight, handlePicked, pickedFlight, displayFlight, arrivals, departure, destLat, destLon }}>{children}</FlightContext.Provider>;
};

export default ContextProvider;
