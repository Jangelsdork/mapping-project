import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  function MyComponent() {
    const map = useMapEvents({
      click: () => {
        map.locate()
      },
      locationfound: (location) => {
        console.log('location found:', location)
      },
    })
    return null
  }
  return (
    <div className="bg-gradient-to-br from-sky-500 to-indigo-500">
      <div className="p-10 ">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "180px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <MyComponent />

        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
