import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CustomMap = () => {
  return (
    <div className="w-[350px] h-[200px] rounded-r-2xl overflow-hidden shadow-lg mt-6">
      <MapContainer
        center={[13.0827, 80.2785]} // Chennai coordinates
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[13.0827, 80.2785]}>
          <Popup>📍 My Location: Chennai, Tamil Nadu, India</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMap;
