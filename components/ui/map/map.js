import { Component, useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

const Map = ({ width }) => {
  const map = {
    viewport: {
      width: width,
      height: "500px",
      latitude: 20.245307,
      longitude: 105.95349,
      zoom: 13,
    },
  };
  const [mapState, setMapState] = useState(map);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      onViewportChange={(viewport) => setMapState({ viewport })}
      {...mapState.viewport}
    />
  );
};

export default Map;
