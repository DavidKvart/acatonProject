import back from "./back.jpg";
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const navigate = useNavigate();
  function toArrival() {
    navigate("/table/arrival");
  }
  function toDestination() {
    navigate("/table/depart");
  }
  return (
    <div
      className="px-4 pt-5 my-5 text-center border-bottom "
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="display-4 fw-bold">Fly With David & Tomer</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to our website in here you could find Arrivals and Departures
          of actual flights in Ben Gurion AirPort you can even choose an
          arriving flight and you will see the Flight Route on GoogleMap we hope
          the website will help you find the flight you're looking for!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button className="btn btn-dark" onClick={toArrival}>
            Arrival
          </button>
          <button className="btn btn-dark" onClick={toDestination}>
            Departure
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
