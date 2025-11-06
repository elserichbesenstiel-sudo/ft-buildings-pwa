import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { demoBuildings } from '../data/buildings';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

export function MapView() {
  const center = { lat: 37.5665, lng: -122.0913 };

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 57px)' }}>
      {!API_KEY ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <h2>Google Maps API Key Required</h2>
            <p>Please add your Google Maps API key to the .env file:</p>
            <code style={{
              backgroundColor: '#f4f4f4',
              padding: '0.5rem',
              display: 'block',
              marginTop: '1rem'
            }}>
              VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
            </code>
          </div>
        </div>
      ) : (
        <APIProvider apiKey={API_KEY}>
          <Map
            defaultCenter={center}
            defaultZoom={9}
            gestureHandling="greedy"
            disableDefaultUI={false}
          >
            {demoBuildings.map((building) => (
              <Marker
                key={building.id}
                position={{ lat: building.lat, lng: building.lng }}
                title={building.name}
              />
            ))}
          </Map>
        </APIProvider>
      )}
    </div>
  );
}
