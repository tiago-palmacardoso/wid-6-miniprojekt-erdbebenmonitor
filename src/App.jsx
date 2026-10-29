import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";


function App() {
  const [selectedEQ, setSelectedEQ] = useState({});
  const [size, setSize] = useState(1)

  return (
    <div className="app">
      <Header />
      <Sidebar earthquake={selectedEQ} size={size} setSize={setSize} />
      <div className="mainArea">
        <Map setSelectedEQ={setSelectedEQ} size={size} />
      </div>
    </div>
  );
}

export default App;
