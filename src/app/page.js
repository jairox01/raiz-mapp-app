import Image from "next/image";
import MapComponent from "./components/map";

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        <h4>Eco tur Inca</h4>
        <h1>
          CATÁLOGO DE ESPECIES ENDÉMICAS Y CASI ENDÉMICAS DE 
            <span> NARIÑO</span>
        </h1>
        <div className="map-container">
          <MapComponent />        
        </div>
      </div>    
    </div>
  );
}