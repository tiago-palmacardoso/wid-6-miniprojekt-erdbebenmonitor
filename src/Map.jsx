import { MapContainer, TileLayer, GeoJSON, Popup, CircleMarker } from "react-leaflet";
import plates from "./assets/plate_boundaries.geojson.json";
import data from "./assets/4.5_week.geojson.json";
import Button from '@mui/material/Button';

export const Map = ({ setSelectedEQ, size }) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      />
      <GeoJSON
        data={plates}
        style={{ color: "purple", weight: 2 }}
      />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** size}
          pathOptions={{ color: "red" }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <Button variant="contained" color="success" size="medium" onClick={() => setSelectedEQ(d)}>Info</Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
