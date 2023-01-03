import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { FlightContext } from "../components/flightContext";
const Navbar = () => {
  const { handlePicked } = useContext(FlightContext);
  const inputEl = useRef(null);
  return (
    <header className="p-3  border-bottom" style={{ backgroundColor: "#1d1e1e", marginBottom: "0" }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/table/home" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none" style={{ color: "yellow" }}>
            <i className="fas fa-plane-departure"></i>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/table/depart" className="nav-link px-2" style={{ color: "yellow" }}>
                Departures
              </Link>
            </li>
            <li>
              <Link to="/table/arrival" className="nav-link px-2" style={{ color: "yellow" }}>
                Arrivals
              </Link>
            </li>
            <li>
              <Link to="/table/live" className="nav-link px-2" style={{ color: "yellow" }}>
                Live view
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" ref={inputEl} className="form-control" placeholder="Search..." aria-label="Search"></input>
          </form>

          <div className="dropdown text-end">
            <i class="bi bi-search" onClick={() => handlePicked(inputEl.current)} style={{ color: "yellow" }}></i>
            <ul className="dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" to="#">
                  New project...
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
