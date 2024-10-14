import localFont from "next/font/local";
import "../styles/main.scss";
import Image from "next/image";

export const metadata = {
  title: "ECO TUR INCA",
  description: "Catálogo de especies endémicas del Departamento de Nariño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
      <body>    
        <header className="site-header">
          <div className="container">
            <div className="columns">
            <div className="site-header__branding column is-6">
              <a href="/" className="site-header__branding-link">
                <h1>ECO TUR INCA</h1>
              </a>
            </div>
            <div className="site-header__menu column is-6">
              <ul>
                <li><a className="active" href="/">Inicio</a></li>
                <li><a href="/">Contáctanos</a></li>
              </ul>
            </div>
            </div>            
          </div>
        </header>
        {children}
        <footer> 
          <div className="container">
            <div className="text-sponsor">
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
                      <img src="./images/cevi.png" alt="Aliado 2" />
                    </a>
                    <a href="">
                      <img src="./images/isais.png" alt="Aliado 3" width={120} height={100} />
                    </a>
                    <a href="">
                      <img src="./images/oikos_logo.png" alt="Aliado 1" />
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
          <div class="copyright">
              <p>Agencia Italiana de Cooperación para el Desarrollo (AICS) Bogotá – sede Sudamérica </p>
              <p>Cl. 93b #9-92, Bogotá, Colombia</p>
              <p>© 2021 AICS. Todos los derechos reservados.</p>
            </div>
        </footer>
      </body>
    </html>
  );
}
