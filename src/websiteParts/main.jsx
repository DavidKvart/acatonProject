import { Button } from "bootstrap";
import { Route, Routes } from "react-router-dom";
import Arrival from "../components/arrival";
import Departure from "../components/departure";
import Table from "../components/Table";
import Intro from "../components/intro";
import Map from "../components/map";
import Live from "../components/liveView";

import SearchedFlight from "./../components/searchedFlight";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/table" element={<Table />}>
          <Route path="arrival" element={<Arrival />} />
          <Route path="depart" element={<Departure />} />
          <Route path="live" element={<Live />} />
          <Route path="home" element={<Intro />} />
          <Route path="map" element={<Map />} />
          <Route path="single" element={<SearchedFlight />} />
        </Route>
        <Route path="/map" />
      </Routes>
    </>
  );
};

export default Main;
