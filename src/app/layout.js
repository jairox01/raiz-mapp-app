"use client";
import "../styles/main.scss";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from "./components/contact";
import About from "./components/about";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  return (
    <html lang="es">     
      <body>    
        <Router>
          <header className="site-header">
            <div className="container">
              <div className="columns">
                <div className="site-header__branding column is-6">
                  <Link to="/" className="site-header__branding-link">
                    <h1>ECO TUR INCA</h1>
                  </Link>
                </div>
                <div className="site-header__menu column is-6">
                  <ul>
                    <li><Link className="active" to="/">Inicio</Link></li>
                    <li><Link to="/contact">Contáctanos</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                  </ul>
                </div>
              </div>            
            </div>
          </header>
          
          <Routes>
            <Route path="/" element={children} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/about" element={<About />} /> 
          </Routes>
          
          <footer> 
            <div className="container">
              <div className="text-sp-footer">
                <h4>Proyecto financiado por:</h4>
              </div>          
              <div className="columns">                              
                <div className="column">
                  <div className="logo-container">
                    <a href="">
                      <img src="./images/logo-aics-xl.png" alt="AICS" />
                    </a>
                  </div>
                </div>
              </div>            
              <div className="columns">              
                <div className="column">
                  <div className="sponsors">
                    <h4>Realizado por:</h4>                    
                    <a href="">
                      <img src="./images/oikos_logo.png" alt="Aliado 1" />
                    </a>
                    <a href="">
                      <img src="./images/cevi.png" alt="Aliado 2" />
                    </a>
                    <a href="">
                      <img src="./images/isais.png" alt="Aliado 3" width={80} />
                    </a>
                    <a href="">
                      <img src="./images/consaca.png" alt="Aliado 4" width={80} />
                    </a>
                  </div>
                </div>              
              </div>            
              <div className="columns">  
                <div className="text-container">
                  <p>Esta publicación fue realizada con la contribución de la Agencia Italiana para la Cooperación al Desarrollo. El contenido de esta publicación es responsabilidad exclusiva de y no representa necesariamente el punto de vista de la Agencia. </p>
                </div>                            
              </div>            
            </div>
            <div className="copyright">
              <p>Agencia Italiana de Cooperación para el Desarrollo (AICS) Bogotá – sede Sudamérica </p>
              <p>Cl. 93b #9-92, Bogotá, Colombia</p>
              <p>© 2021 AICS. Todos los derechos reservados.</p>
            </div>
          </footer>
        </Router>
      </body>
    </html>
  );
}