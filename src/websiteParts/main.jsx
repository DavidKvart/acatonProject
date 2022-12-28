import { Button } from "bootstrap";
import { Route, Routes } from "react-router-dom";
import Arrival from "../components/arrival";
import Departure from "../components/departure";
import Table from "../components/Table";
import Intro from "../components/intro";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/table" element={<Table />}>
          <Route path="arrival" element={<Arrival />} />
          <Route path="depart" element={<Departure />} />
        </Route>
        <Route path="/map" />
      </Routes>
    </>
  );
};

export default Main;
<div></div>;
