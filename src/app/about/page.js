import React from "react";

const About = () => {
    return(
        <div className="container">
            <div className="about">
                <h1>Conoce Más</h1>
                <p>La investigación fue desarrollada por la empresa Nariñense Raiz Fuerza Natural S.A.S, una organización creada para impulsar culturas de conocimiento, gobernanza y protección de los medios de vida en Nariño.  Esta investigación tuvo dos etapas , una de consulta de información secundaría y otra de muestreo en campo, esta última se adelantó durante  el 2 y el 15 de septiembre del 2024.</p>
                <h3>Conoce más de l@s ingestigadores:</h3>
                <div className="block">
                    <div className="columns">
                        <div className="column">                        
                            <p>Luis Alejandro Reyes Ballesteros, ingeniero forestal de la Universidad Distrital Francisco José de Caldas, director de la empresa Raiz Fuerza Natural S.A.S y coordinador de la investigación.  Alejandro lídero el componente de flora, adelantando parcelas de muestreo en la Laguna del Orinoco en Funes y en el Sendero del Buho en Samaniego.  </p>
                            <p>Alejandro es líder ambiental en Nariño y se esfuerza por profundizar la particiación y la jsuticia ambiental en Colombia</p>
                        </div>
                        <div className="column">
                            <img src="./images/about/cerdo-de-agua.jpeg" alt="Alejandro Reyes" />
                        </div>
                    </div>   
                </div>
                <div className="block">
                    <div className="columns">
                        <div className="column">
                            <img src="./images/about/lady-owl.jpeg" alt="Alejandro Reyes" />
                        </div>
                        <div className="column">
                            <p>Zhara Cubillos Arias es Bióloga egresada de la Facultad de Ciencias de la Universidad Nacional de Colombia, Sede Bogotá. Es una investigadora que hace parte del equipo de la Fundación Ecológica Los Colibries de Altaquer, donde ha dirigido y participado en diversos proyectos de monitoreo de fauna, investigación y apropiación social del conocimiento con la comunidad. Desde su pregrado, sus áreas de interés son: ornitología, mastozoología, manejo de fauna silvestre, ecología de poblaciones y ciencia participativa. 
                            Zhara lídero  la fase de campo y procesamiento de información de aves de Funes y Samaniego.</p>
                        </div>
                    </div>
                </div>                                    
                <h1>Coinvestigadores</h1> 
                <p>Miembros de la comunidad de Funes y Samaniego fueron  parte de la investigación e iniciaron junto al equipo de investigadores un proceso de formación practica para convertirse en los líderes de un programa de monitoreo comunitario de biodiversidad, un reconocimiento muy importante a Olmedo Morales y Francisco Morales en el Resguardo Indígena de Funes  y a José Raúl Ortega Melo y Jenny Nathaly Jiménez Arévalo en Samaniego, coequiperos e inmejorables compañeros de aventuras.</p>
                <div class="masonry">
                    <div class="item">
                        <img src="./images/about/cerdo-humanos.jpeg" alt="Alejandro Reyes" />
                    </div>
                    <div class="item">
                        <img src="./images/about/cerdo-risas-humanos.jpeg" alt="Alejandro Reyes" />
                    </div>
                    <div class="item">
                        <img src="./images/about/masc.jpeg" alt="Alejandro Reyes" />
                    </div>                 
                </div>
                <h1>Detras de cámaras </h1> 
                <p>El todo es constituyente de la realidad y la aventura de investigación adelantada tuvo varios momentos importantes que queremos compartir contigo:</p>
                <div class="masonry">
                    <div class="item">
                        <img src="./images/about/guide.jpeg" alt="Alejandro Reyes" />
                    </div>
                    <div class="item">
                        <img src="./images/about/gente.jpeg" alt="Alejandro Reyes" />
                    </div>
                    <div class="item">
                        <img src="./images/about/pescado.jpeg" alt="Alejandro Reyes" />
                    </div>                    
                    <div class="item">
                        <img src="./images/about/olla.jpeg" alt="Alejandro Reyes" />
                    </div>                    
                    <div class="item">
                        <img src="./images/about/cerdo-risas.jpeg" alt="Alejandro Reyes" />
                    </div>                    
                    <div class="item">
                        <img src="./images/about/cerdo-vinoculos.jpeg" alt="Alejandro Reyes" />
                    </div>                                        
                    <div class="item">
                        <img src="./images/about/equipo.jpeg" alt="Alejandro Reyes" />
                    </div>                                        
                    <div class="item">
                        <img src="./images/about/notas.jpg" alt="Alejandro Reyes" />
                    </div>                
                </div>
            </div>
        </div>        
    )    
}

export default About;