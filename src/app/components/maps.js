'use client'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

// Carga dinámica para evitar problemas con SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const Map = () => {
  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <div>
        <MapContainer
      center={[40.416775, -3.703790]} // Coordenadas de Madrid, por ejemplo
      zoom={13}
      style={{ height: '400px', width: '600px', display:"flex", margin:"auto", marginTop:"3%" }}
    >
      {/* Capa de OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marcador opcional */}
      <Marker position={[40.416775, -3.703790]}>
        <Popup>
          Un ejemplo de popup en Madrid.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    
  );
};

export default Map;
