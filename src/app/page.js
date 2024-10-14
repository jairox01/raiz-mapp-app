import Image from "next/image";
import MapComponent from "./components/map";

export default function Home() {
  return (
    <div className="app">
      <div className="container"> 
        <div className="intro-text">
          <h2>
            CATÁLOGO DE ESPECIES ENDÉMICAS Y CASI ENDÉMICAS DE NARIÑO
          </h2>
          <div className="text">
            <p>Navega por el mapa a continuación para explorar la fauna y flora de los municipios de Consacà, Funes y Samaniego! Para cada especie encontrarás la ficha técnica con información sobre el estado de conservación, difusión y hábitat.</p>
          </div>
          <div className="video">
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/QVeh268B3h0?si=u50YGhaxBL2IIReb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
          </div>
        </div>
        <div className="map-container">
          <MapComponent />        
        </div>
        <div className="text-container">  
          <h4>El catálogo</h4>
          <div className="columns">
            <div className="column">
              <p>El Catálogo de Especies Endémicas del Departamento de Nariño nació con el objetivo de mapear y documentar las especies de plantas y aves únicas de esta región de Colombia. Proporciona información esencial para comprender su estado de conservación, el riesgo de extinción, los beneficios que aportan a los ecosistemas locales y su distribución geográfica.
              Este catálogo es el resultado de una investigación primaria realizada por (nombre de los investigadores) y de un análisis exhaustivo de fuentes secundarias.</p>
            </div>
            <div className="column">
            <p>A pesar de los desafíos en la obtención de datos completos, representa una herramienta valiosa que podrá enriquecerse con el tiempo. Su propósito es continuar monitoreando, conociendo y protegiendo las especies endémicas de Nariño, garantizando la conservación de la biodiversidad de esta región única.</p>
            </div>
          </div>      
        </div>
        <div className="text-container">  
          <h4>El proyecto ECO TUR INCA (AID 012590/08/7)</h4>
          <p>El proyecto Eco Tur Inca (Desarrollo de la economía turística sostenible y protección del medio ambiente) tiene como objetivo promover el crecimiento económico sostenible, la defensa del medio ambiente y contribuir a la seguridad en la región de Nariño.</p>
          <div className="list-container">
            <div className="columns">
              <div className="column">
                <p>Defensa del medio ambiente:</p>
                <ul>
                  <li>Sistema de fosas biológicas y plantas de tratamiento de aguas residuales.</li>
                  <li>Sensibilización de la comunidad con talleres escolares sobre biodiversidad.</li>
                  <li>Catálogo de especies endémicas.</li>
                </ul>
              </div>
              <div className="column">
              <p>Crecimiento económico:</p>
              <ul>
                <li>Creación de una red de turismo sostenible con 5 sitios culturales.</li>
                <li>Cursos de formación para nuevas empresas turísticas.</li>
                <li>Catálogo de ofertas turísticas.</li>
              </ul>
            </div>
            <div className="column">
              <p>Pacificación de los territorios:</p>
              <ul>            
                <li>Formación de operadores de seguridad y guías turísticas.</li>
                <li>Planes de seguridad en colaboración con autoridades locales.</li>
                <li>Organización de 12 festivales locales para sensibilizar sobre la paz.</li>
              </ul>
            </div> 
            </div>                        
          </div>          
        </div>              
      </div>    
    </div>
  );
}