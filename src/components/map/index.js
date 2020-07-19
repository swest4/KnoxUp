import React from "react";
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';

import Embassy from '../../svgs/Embassy';

import useRdsData from '../../hooks/useRdsData';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 110px)',
};

const center = {
  lat: 35.9606,
  lng:  -83.9207
};

export default () => {
  const sites = useRdsData();

  return (
    sites
      ? (
        <LoadScript
          googleMapsApiKey="AIzaSyCsAfa4WqASPDbyECxtESeuJp66WC2kYzM"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            {
              sites.map((site) => (
                <InfoWindow
                  key={site.project_name}
                  position={{lat: site.lat, lng: site.lng}}
                >
                  <Embassy width="30px"/>
                </InfoWindow>
              ))
            }
          </GoogleMap>
        </LoadScript>
      ) : null
  )
}
