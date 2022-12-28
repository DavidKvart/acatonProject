import React from "react";
import { useState } from "react";
export const FlightContext = React.createContext("");

const ContextProvider = ({ children }) => {
  const [flights, setFlights] = useState([
    {
      id: 1,
      carrier: "ELAL",
      flightNumber: "A452",
      departure: {
        airport: "ben gurion",
        terminal: "T1",
        gate: "E32",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "2019-12-12T04:20:00+00:00",
      },
      arrival: {
        airport: "JFK",
        terminal: "T2",
        gate: "A12",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "2019-12-12T04:20:00+00:00",
      },
      status: "ON TIME", /// status on time , if 30 min befor depart=boarding, if late in  >depart min
    },
  ]);

  return <FlightContext.Provider value={{ flights }}>{children}</FlightContext.Provider>;
};

export default ContextProvider;
