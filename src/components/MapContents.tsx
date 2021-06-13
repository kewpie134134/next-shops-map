import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 35.69575,
  lng: 139.77521
};

const divStyle = {
  background: 'white',
  fontSize: 7.5
};

const positionAkiba = {
  lat: 35.69731,
  lng: 139.7747
};

const positionIwamotocho = {
  lat: 35.69397,
  lng: 139.7762
};

const MapContents = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <InfoWindow position={positionAkiba}>
          <div style={divStyle}>
            <h1>秋葉原オフィス</h1>
          </div>
        </InfoWindow>
        <InfoWindow position={positionIwamotocho}>
          <div style={divStyle}>
            <h1>岩本町オフィス</h1>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContents;
