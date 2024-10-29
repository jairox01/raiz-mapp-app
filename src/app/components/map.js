"use client";
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = { height: '1000px' };
const center = { lat: 0.9214413, lng: -77.4354531 };

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(''); // Filtro de grupo

  useEffect(() => {
    const fetchMarkers = async () => {
      const spreadsheetId = '1YpG6mjwNuiSApHwJafqaiGnNccAE746gk56Z1SJc4Gg';
      const apiKey = 'AIzaSyByc4JiGVTQCH4w-tPZWnNfVyjcgAjuBjo';
      const range = 'GENERAL!A:Q';

      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
        );

        const formattedMarkers = response.data.values.map(item => ({
          group: item[0],
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
          img: item[16] ? item[16].split(',').map(img => img.trim()) : []
        }));

        setMarkers(formattedMarkers);
      } catch (error) {
        console.error("Error fetching markers: ", error);
      }
    };

    fetchMarkers();
  }, []);

  const handleMarkerClick = (marker) => setSelectedMarker(marker);
  const handleGroupChange = (event) => setSelectedGroup(event.target.value);

  const getMarkerIcon = (group) => {
    const iconMap = {
      'Aves': 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      'Plantas': 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      'Turismo': 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    };
    return iconMap[group] || 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
  };

  return (
    <div>
      <FilterGroup selectedGroup={selectedGroup} handleGroupChange={handleGroupChange} />
      
      <LoadScript googleMapsApiKey="AIzaSyByc4JiGVTQCH4w-tPZWnNfVyjcgAjuBjo">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
          {markers
            .filter(marker => !selectedGroup || marker.group === selectedGroup)
            .map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={getMarkerIcon(marker.group)}
                onClick={() => handleMarkerClick(marker)}
              />
            ))}
          
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <MarkerInfo marker={selectedMarker} />
            </InfoWindow>
          )}
        </GoogleMap>

        {selectedMarker && <MarkerDetails marker={selectedMarker} />}
      </LoadScript>
    </div>
  );
};

const FilterGroup = ({ selectedGroup, handleGroupChange }) => (
  <div className="filters">
    <h4>Filtrar:</h4>
    <div className="filter-container">
      {['Todos', 'Aves', 'Plantas', 'Turismo'].map(group => (
        <div className="custom-radio" key={group}>
          <label>
            <input
              type="radio"
              value={group === 'Todos' ? '' : group}
              checked={selectedGroup === (group === 'Todos' ? '' : group)}
              onChange={handleGroupChange}
            />
            {group}
            <span className="checkmark"></span>
          </label>
        </div>
      ))}
    </div>
  </div>
);

const MarkerInfo = ({ marker }) => (
  <div className="info-window">
    <h5>{marker.specie}</h5>
    {marker.img.length > 0 ? (
      <img 
        src={`https://pt-tmp.s3.amazonaws.com/raiz${marker.img[0]}`} 
        alt={`Image of ${marker.specie}`} 
      />
    ) : (
      <p>No image available</p>
    )}
    {marker.group !== 'Turismo' ? (
      <p>
        <strong>Familia: </strong>{marker.family}
      </p>
    ) : (<p></p>)}
    <a onClick={() => document.getElementById("info-box")?.scrollIntoView({ behavior: "smooth" })}>
      Ver más
    </a>
  </div>
);

const MarkerDetails = ({ marker }) => (
  <div className="card" id="info-box">
    <div className="columns">
      <div className="column">
        {marker.img.length > 0 ? (
          <img 
            src={`https://pt-tmp.s3.amazonaws.com/raiz${marker.img[0]}`} 
            alt={`Image of ${marker.specie}`} 
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <p>No image available</p>
        )}
        <ul>
          { marker.latitude && ( <li><strong>Latitud:</strong> {marker.latitude}</li> )}    
          { marker.longitude && ( <li><strong>Latitud:</strong> {marker.longitude}</li> )}          
          { marker.altitude && ( <li><strong>Altitud:</strong> {marker.altitude}</li> )}          
          { marker.taxon && ( <li><strong>Distribución del taxón:</strong> {marker.taxon}</li> )}          
          { marker.status && ( <li><strong>Estado de conservación:</strong> {marker.status}</li> )}
        </ul>
      </div>
      <div className="column">
        <h3>{marker.specie}</h3>
        <h5>Descripción</h5>
        <p>{marker.longDescription}</p>
        <div className="columns">
          {marker.img.map((img, index) => (            
            <div className="column" key={index}>
              {img ? (
                <img 
                  src={`https://pt-tmp.s3.amazonaws.com/raiz${img}`} 
                  alt={`Image of ${marker.specie}`} 
                  style={{ maxWidth: '100%' }}
                />
              ) : (
                <p></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MapComponent;