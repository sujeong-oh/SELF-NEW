import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    let map = null;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
    };
    initMap();
  }, []);


  const mapStyle = {
    width: "100%",
    height: "600px",
  };

  return (
    <React.Fragment>
      <div id="map" style={mapStyle}></div>
    </React.Fragment>
  );
};

export default Map;