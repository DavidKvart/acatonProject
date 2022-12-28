import { useContext } from "react";

import { FlightContext } from "./flightContext";

const Departure = () => {
  const { flights } = useContext(FlightContext);
  console.log(flights);
  return <div></div>;
};

export default Departure;
