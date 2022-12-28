import { useContext } from "react";
import { FlightContext } from "./flightContext";

const Arrival = () => {
  const { flights } = useContext(FlightContext);
  /// takes flight takes only arrival with tel aviv
  /// create new array only for arrival
  /// fisplay new array in table
  let arrivalArr = [];

  return <div></div>;
};

export default Arrival;
