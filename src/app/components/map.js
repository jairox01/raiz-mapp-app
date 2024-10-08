"use client"; // Agrega esta línea al principio del archivo
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = {
  height: '1000px',
};

const center = {
  lat: 0.9214413,
  lng: -77.4354531,
};

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(''); // Estado para el filtro

  useEffect(() => {
    const fetchMarkers = async () => {
      const spreadsheetId = '1YpG6mjwNuiSApHwJafqaiGnNccAE746gk56Z1SJc4Gg'; // Reemplaza con el ID de tu Spreadsheet
      const apiKey = 'AIzaSyByc4JiGVTQCH4w-tPZWnNfVyjcgAjuBjo'; // Reemplaza con tu API Key
      const range = 'GENERAL!A:P'; // Cambia el rango según la estructura de tu hoja

      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
        );

        const formattedMarkers = response.data.values.map(item => ({
          group: item[0], // Esta es la columna A
          specie: item[1],
          origin: item[2],
          taxon: item[3],
          status: item[4],
          family: item[5],
          shortDescription: item[6],
          longDescription: item[7],
          latitude: item[8],
          longitude: item[9],
          altitude: item[10],
          position: { lat: parseFloat(item[11]), lng: parseFloat(item[12]) },          
        }));
        setMarkers(formattedMarkers);
      } catch (error) {
        console.error("Error fetching markers: ", error);
      }
    };
    fetchMarkers();
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);    
  };

  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value); // Actualiza el grupo seleccionado
  };

  // Función para obtener el color del ícono según el grupo
  const getMarkerIcon = (group) => {
    switch (group) {
      case 'Aves':
        return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      case 'Plantas':
        return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';      
      default:
        return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'; // Color por defecto
    }
  };

  return (
    <div>
      <div className="filters">
        <h4>Filtrar:</h4>
        <div className="filter-container">
          <div className="custom-radio">
            <label>
              <input
                type="radio"
                value=""
                checked={selectedGroup === ''}
                onChange={handleGroupChange}
              />
              Todos
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="custom-radio">
            <label>
              <input
                type="radio"
                value="Aves"
                checked={selectedGroup === 'Aves'}
                onChange={handleGroupChange}
              />
              Aves
              <span class="checkmark"></span>
            </label>
          </div>
          <div className="custom-radio">
            <label>
              <input
                type="radio"
                value="Plantas"
                checked={selectedGroup === 'Plantas'}
                onChange={handleGroupChange}
              />
              Plantas
              <span class="checkmark"></span>
            </label>
          </div>
        </div>                    
      </div>

      <LoadScript googleMapsApiKey="AIzaSyByc4JiGVTQCH4w-tPZWnNfVyjcgAjuBjo">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
          {markers
            .filter(marker => selectedGroup === '' || marker.group === selectedGroup) // Muestra todos si no hay filtro
            .map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={getMarkerIcon(marker.group)} // Cambia el ícono según el grupo
                onClick={() => handleMarkerClick(marker)}
              />
            ))}

          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}  // Cierra el InfoWindow
            >
              <div className="info-window">
                <h5>{selectedMarker.specie}</h5>
                <img src="./images/pajaro-quemamais.png"/>
                <p><strong>Familia: </strong>{selectedMarker.family}</p>
                <a onClick={() => {
                  const element = document.getElementById("info-box");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}>Ver más</a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>

        <div>
          {selectedMarker && (
            <div className={'card'} id="info-box">
              <div className="columns">
                <div className="column">
                  <img src="./images/pajaro-quemamais.png"/>
                  <ul>
                    <li><strong>Latitud:</strong> {selectedMarker.latitude}</li>
                    <li><strong>Longitud:</strong> {selectedMarker.longitude}</li>
                    <li><strong>Altitud:</strong> {selectedMarker.altitude}</li>
                    <li><strong>Distribución del taxón:</strong> {selectedMarker.taxon}</li>
                    <li><strong>Estado de conservación:</strong> {selectedMarker.status}</li>
                  </ul>
                </div>
                <div className="column">
                  <h3>{selectedMarker.specie}</h3>
                  <h5>Descripción</h5>
                  <p>{selectedMarker.longDescription}</p>
                </div>            
              </div>  
            </div>                  
          )}
        </div>       
      </LoadScript>
    </div>    
  );
};

export default MapComponent;    