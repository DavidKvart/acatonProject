import { GoogleMap, useLoadScript, MarkerF, Polyline } from "@react-google-maps/api";
import "../index.css";
import BL from "./image/BL.png";
import BR from "./image/BR.png";
import TL from "./image/TL.png";
import TR from "./image/TR.png";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { FlightContext } from "./flightContext";

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyDrP0MZf6dsj0wre3r6TL0nBliPCTFuWEo" });
  const [poli, setpoli] = useState("");
  const [plane, setPlane] = useState(TR);
  const { destLon, destLat } = useContext(FlightContext);
  const [planeLat, setPlanelat] = useState(destLat);
  const [planeLon, setPlanelon] = useState(destLon);
  const [counter, setCounter] = useState(0);
  const planelocaitions = [
    { lat: planeLat, lon: planeLon },
    { lat: planeLat + 12, lon: planeLon + 12 },
    { lat: planeLat + 14, lon: planeLon + 14 },
    { lat: planeLat + 16, lon: planeLon + 16 },
  ];
  let m = (destLon - 34.855499) / (destLat - 32.109333);
  let b = "";
  let s = "";
  let temp = "";
  if (destLat > 32.109333) {
    if (destLon > 32.109333) {
      temp = BL;
    } else temp = BR;
  } else {
    if (destLon > 32.109333) {
      temp = TL;
    } else temp = TR;
  }

  let path = [
    { lat: destLat, lng: destLon },
    { lat: 32.109333, lng: 34.855499 },
  ];

  let options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    geodesic: true,
    radius: 2000,
    paths: path,
  };

  useEffect(() => {
    setpoli(fun());
  }, []);

  const fun = () => <Polyline path={path} options={options} />;
  if (!isLoaded) return <div>loading ...</div>;
  return (
    <GoogleMap zoom={3} center={{ lat: 32.109333, lng: 34.855499 }} mapContainerClassName="map-container">
      {poli}
      <MarkerF position={{ lat: planeLat, lng: planeLon }} options={{ icon: temp }} />/
    </GoogleMap>
  );
};

export default Map;
