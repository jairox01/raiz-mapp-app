import { metadata as mainMetadata } from "./metadata";
import MapComponent from "./components/map";

export const metadata = mainMetadata;

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
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/bY8H9XorWuA?si=k3f7WXfliEdLqMrh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            
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
          <div className="columns">
            <div className="column">
            <p>El proyecto Eco Tur Inca (Desarrollo de la economía turística sostenible y protección del medio ambiente) tiene como objetivo promover el crecimiento económico sostenible, la defensa del medio ambiente y contribuir a la seguridad en la región de Nariño.</p>
            <p>Para ello, se crea una red de turismo sostenible que incluye la mejora de 5 sitios culturales y la capacitación de nuevos emprendedores turísticos a través de cursos de formación sobre la gestión de empresas turísticas y el mapeo de la oferta turística de la zona.</p>
            </div>
            <div className="column">
            <p>Por la tutela del medio ambiente, el proyecto ha realizado sistemas de tratamiento de aguas y se llevan a cabo actividades de formación y sensibilización sobre biodiversidad en la comunidad.</p>
            <p>Para mejorar la seguridad en los territorios involucrados, se han desarrollado planes de seguridad participativa en colaboración con las autoridades locales, las reservas indígenas y algunos sitios turísticos de la red de turismo sostenible, a través de la formación de operadores de seguridad y guías turísticas.</p>                 
            </div>
          </div>                   
        </div>              
      </div>    
    </div>
  );
}