import { GoogleMap, useLoadScript, MarkerF, Polyline } from "@react-google-maps/api";
import "../index.css";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { FlightContext } from "./flightContext";
import { liveFlights } from "./liveFlights";
import { airport } from "./data";
import BL from "./image/BL.png";
import BR from "./image/BR.png";
import TL from "./image/TL.png";
import TR from "./image/TR.png";

const Live = () => {
  const [poli, setpoli] = useState("");
  let airportArr = Object.entries(airport);
  let airportLocaition = "";
  const {} = useLoadScript({ googleMapsApiKey: "AIzaSyDrP0MZf6dsj0wre3r6TL0nBliPCTFuWEo" });

  let display = liveFlights.data.map((flight) => {
    airportLocaition = airportArr.find((air) => air[0] == flight.departure.icaoCode);

    let path = [
      { lat: airportLocaition[1].lat, lng: airportLocaition[1].lon },
      { lat: flight.geography.latitude, lng: flight.geography.longitude },
      { lat: 32.109333, lng: 34.855499 },
    ];
    let option = {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      // geodesic: true,
      radius: 2000,
      paths: path,
    };

    return (
      <>
        <Polyline path={path} options={option} />
        <MarkerF position={{ lat: flight.geography.latitude, lng: flight.geography.longitude }} options={{ icon: BL }} />/
      </>
    );
  });

  //   let path = [
  //     { lat: 41.2971000671, lng: 2.0784599781 },
  //     { lat: 37.34, lng: 22.86 },
  //     { lat: 32.109333, lng: 34.855499 },
  //   ];
  //   let option = {
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     geodesic: true,
  //     radius: 2000,
  //     paths: path,
  //   };
  //   useEffect(() => {
  //     setpoli(fun());
  //   }, []);

  //   const fun = () => <Polyline path={path} options={option} />;

  return (
    <GoogleMap zoom={3} center={{ lat: 32.109333, lng: 34.855499 }} mapContainerClassName="map-container">
      {display}
    </GoogleMap>
  );
};

export default Live;
