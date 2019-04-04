import React from "react";
import PropTypes from "prop-types";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

const PinnedMap = ({ latitude, longitude }) => (
  <Map center={[latitude, longitude]} zoom={14} width={480} height={200}>
    <Marker anchor={[latitude, longitude]} payload={1} />
  </Map>
);

PinnedMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default PinnedMap;
