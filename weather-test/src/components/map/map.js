import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMaps = ({ lat, lng }) => {
  const mapStyles = {
    height: '100%',
    width: '100%',
    float: 'right',
    borderRadius: '20px',
  };

  const defaultCenter = {
    lat: lat || 0,
    lng: lng || 0,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs">
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
