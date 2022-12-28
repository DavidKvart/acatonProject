import { useContext } from "react";
import { FlightContext } from "./flightContext";
import SingleFlight from "./tableRow";

const Departure = () => {
  const { flights } = useContext(FlightContext);
  console.log(flights);
  const fake = [
    {
      id: 1,
      carrier: "ELAL",
      flightNumber: "A452",
      departure: {
        airport: "IATA",
        terminal: "T1",
        gate: "E32",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      arrival: {
        airport: "JFK",
        terminal: "T2",
        gate: "A12",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      status: "ON TIME", /// status on time , if 30 min befor depart=boarding, if late in  >depart min
    },
    {
      id: 2,
      carrier: "ELAL",
      flightNumber: "A452",
      departure: {
        airport: "IATA",
        terminal: "T1",
        gate: "E32",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      arrival: {
        airport: "JFK",
        terminal: "T2",
        gate: "A12",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      status: "ON TIME", /// status on time , if 30 min befor depart=boarding, if late in  >depart min
    },
    {
      id: 3,
      carrier: "ELAL",
      flightNumber: "A452",
      departure: {
        airport: "IATA",
        terminal: "T1",
        gate: "E32",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      arrival: {
        airport: "JFK",
        terminal: "T2",
        gate: "A12",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      status: "ON TIME", /// status on time , if 30 min befor depart=boarding, if late in  >depart min
    },
    {
      id: 4,
      carrier: "ELAL",
      flightNumber: "A452",
      departure: {
        airport: "IATA",
        terminal: "T1",
        gate: "E32",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      arrival: {
        airport: "JFK",
        terminal: "T2",
        gate: "A12",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      status: "ON TIME", /// status on time , if 30 min befor depart=boarding, if late in  >depart min
    },
    {
      id: 5,
      carrier: "ELAL",
      flightNumber: "A452",
      departure: {
        airport: "IATA",
        terminal: "T1",
        gate: "E32",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      arrival: {
        airport: "IATA",
        terminal: "T2",
        gate: "A12",
        delay: "",
        scheduled: "2019-12-12T04:20:00+00:00",
        estimated: "20:00",
      },
      status: "ON TIME", /// status on time , if 30 min befor depart=boarding, if late in  >depart min
    },
  ];
  let trick = (val) => {
    let arr = [];
    if (val.length == 3) {
      val = val + "  ";
    } else if (val.length == 4) {
      val = val + " ";
    }
    arr = val.split("").map((letter) => {
      if (letter == " ") {
        let to = "letter letter-blank";
        return <span className={to}></span>;
      } else if (letter == ":") {
        let to = "letter letter-colon";
        return <span className={to}></span>;
      } else {
        let to = "letter letter-" + letter;
        return <span className={to}></span>;
      }
    });
    return arr;
  };

  return (
    <div>
      <table style={{ width: 180 + "vh" }}>
        <thead>
          <tr style={{ backGroundColor: "black" }}>
            <span style={{ marginLeft: 50, color: "yellow" }}>From</span>
            <span style={{ marginLeft: 185, color: "yellow" }}>Carrier</span>
            <span style={{ marginLeft: 175, color: "yellow" }}>
              Flight Number
            </span>
            <span style={{ marginLeft: 160, color: "yellow" }}>Gate</span>
            <span style={{ marginLeft: 250, color: "yellow" }}>Time</span>
            <span style={{ marginLeft: 250, color: "yellow" }}>Status</span>
          </tr>
        </thead>
        <tbody>
          {fake.map((value) => {
            return (
              <SingleFlight
                key={value.id}
                destination={value.arrival.airport}
                id={value.id}
                flightNum={value.flightNumber}
                carrier={value.carrier}
                time={value.departure.estimated}
                gate={value.departure.gate}
                status={value.status}
                trick={trick}
              />
            );
          })}
        </tbody>
      </table>
      {/* <div className="btn-group " role="group" aria-label="Basic example">
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
            if (arr.length / itemsPage > currentPage)
              setCurrentPage(currentPage + 1);
          }}
        >
          +
        </button>
      </div> */}
    </div>
  );
};

export default Departure;
