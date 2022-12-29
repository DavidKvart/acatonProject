import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="p-3  border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/table/home" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <i className="fas fa-plane-departure"></i>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/table/depart" className="nav-link px-2 link-dark">
                Departures
              </Link>
            </li>
            <li>
              <Link to="/table/arrival" className="nav-link px-2 link-dark">
                Arrivals
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 link-dark">
                Customers
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 link-dark">
                Products
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
          </form>

          <div className="dropdown text-end">
            <Link to="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"></img>
            </Link>
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
