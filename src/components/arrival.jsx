import { useContext } from "react";
import { FlightContext } from "./flightContext";
import { useState } from "react";
import SingleFlight from "./tableRow";
import "./try.css";

const Arrival = () => {
  const { arrivals } = useContext(FlightContext);
  const [currentPage, setCurrentPage] = useState(1);
  const startIn = (currentPage - 1) * 15;
  const endIn = startIn + 15;
  const theFlights = arrivals.slice(startIn, endIn);
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
  return (
    <div>
      <table style={{ width: 180 + "vh" }}>
      <thead style={{backgroundColor:"#1d1e1e"}}>
          <tr style={{ backGroundColor: "black" }}>
            <span style={{ marginLeft: 50, color: "yellow",fontFamily:"Chakra Petch, sans-serif" }} >To</span>
            <span style={{ marginLeft: 175,color: "yellow",fontFamily:"Chakra Petch, sans-serif" }}>Carrier</span>
            <span style={{ marginLeft: 125, color: "yellow",fontFamily:"Chakra Petch, sans-serif" }}>
              Gate
            </span>
            <span style={{ marginLeft: 160, color: "yellow",fontFamily:"Chakra Petch, sans-serif" }}>Time</span>
            <span style={{ marginLeft: 250,color: "yellow",fontFamily:"Chakra Petch, sans-serif" }}>Flight Number</span>
            <span style={{ marginLeft: 250, color: "yellow",fontFamily:"Chakra Petch, sans-serif" }}>Status</span>
          </tr>
        </thead>
        <tbody>
          {theFlights.map((value) => {
            return (
              <SingleFlight
                key={value.id}
                destination={value.departure.airport}
                id={value.id}
                flightNum={flightFun(value.flightNumber)}
                carrier={value.carrier}
                time={value.arrival.scheduled}
                gate={value.arrival.gate}
                status={value.status}
                trick={trick}
                getMap={getMap}
              />
            );
          })}
        </tbody>
      </table>
      <div className="btn-group " role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          -
        </button>
        <button type="button" className="btn btn-outline-primary" disabled>
          {currentPage}
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            if (arrivals.length / 15 > currentPage)
              setCurrentPage(currentPage + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Arrival;
