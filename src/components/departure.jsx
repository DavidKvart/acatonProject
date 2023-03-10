import { useContext } from "react";
import { FlightContext } from "./flightContext";
import SingleFlight from "./tableRow";
import { useState } from "react";
import { get } from "react-hook-form";

const Departure = () => {
  const { departure } = useContext(FlightContext);
  const [currentPage, setCurrentPage] = useState(1);
  const startIn = (currentPage - 1) * 15;
  const endIn = startIn + 15;
  const theFlights = departure.slice(startIn, endIn);
  let flightFun = (str) => {
    if (str.length == 3) {
      str += "   ";
      return str;
    } else if (str.length == 2) {
      str += "    ";
      return str;
    } else if (str == null || str == "") {
      return (str = "----- ");
    }
    return str;
  };
  let getMap = (id) => {
    console.log(id);
  };
  let trick = (val) => {
    let arr = [];
    if (val == null || val == "") {
      val = "--- ";
    } else if (val.length == 1) {
      val = val + "   ";
    } else if (val.length == 2 || (val.length == 4 && val != "LATE")) {
      val = val + "  ";
    } else if (val.length == 3 || val.length == 5) {
      val = val + " ";
    } else if (val === "LATE") {
      val = "LATE   ";
    }
    arr = val.split("").map((letter) => {
      if (letter == " ") {
        let to = "letter letter-blank";
        return <span className={to}></span>;
      } else if (letter == ":") {
        let to = "letter letter-colon";
        return <span className={to}></span>;
      } else if (letter == "-") {
        let to = "letter letter-dash";
        return <span className={to}></span>;
      } else {
        let to = "letter letter-" + letter;
        return <span className={to}></span>;
      }
    });
    return arr;
  };

  return (
    <div style={{ backgroundColor: "#1d1e1e", marginTop: "0" }}>
      <table style={{ width: 180 + "vh", marginBottom: 4 }}>
        <thead style={{ backgroundColor: "#1d1e1e" }}>
          <tr style={{ backGroundColor: "black" }}>
            <span
              style={{
                marginLeft: 50,
                color: "yellow",
                fontFamily: "Chakra Petch, sans-serif",
              }}
            >
              To
            </span>
            <span
              style={{
                marginLeft: 175,
                color: "yellow",
                fontFamily: "Chakra Petch, sans-serif",
              }}
            >
              Carrier
            </span>
            <span
              style={{
                marginLeft: 125,
                color: "yellow",
                fontFamily: "Chakra Petch, sans-serif",
              }}
            >
              Gate
            </span>
            <span
              style={{
                marginLeft: 160,
                color: "yellow",
                fontFamily: "Chakra Petch, sans-serif",
              }}
            >
              Time
            </span>
            <span
              style={{
                marginLeft: 250,
                color: "yellow",
                fontFamily: "Chakra Petch, sans-serif",
              }}
            >
              Flight Number
            </span>
            <span
              style={{
                marginLeft: 250,
                color: "yellow",
                fontFamily: "Chakra Petch, sans-serif",
              }}
            >
              Status
            </span>
          </tr>
        </thead>
        <tbody>
          {theFlights.map((value) => {
            return <SingleFlight key={value.id} destination={value.arrival.airport} id={value.id} flightNum={flightFun(value.flightNumber)} carrier={value.carrier} gate={value.departure.gate} time={value.departure.scheduled} status={value.status} trick={trick} getMap={getMap} />;
          })}
        </tbody>
      </table>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <div className="btn-group mb-1" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => {
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }}
          >
            Back
          </button>
          <button type="button" className="btn btn-outline-warning" disabled>
            {currentPage}
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => {
              if (departure.length / 15 > currentPage) setCurrentPage(currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Departure;
