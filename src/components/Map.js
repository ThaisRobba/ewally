import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

const PinnedMap = ({ latitude, longitude }) => (
  <Map center={[latitude, longitude]} zoom={14} width={480} height={200}>
    <Marker
      anchor={[latitude, longitude]}
      payload={1}
      onClick={({ event, anchor, payload }) => {}}
    />
  </Map>
);
export default PinnedMap;
