import { Outlet } from "react-router-dom";

import ContextProvider from "./flightContext";
const Table = () => {
  return (
    <div>
      <ContextProvider>
        <Outlet />
      </ContextProvider>
    </div>
  );
};

export default Table;
