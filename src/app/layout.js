import localFont from "next/font/local";
import "../styles/main.scss";
import Image from "next/image";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
      <body>    
        <header className="site-header">
          <div className="container">
            <div className="columns">
            <div className="site-header__branding column">
              <a href="/" className="site-header__branding-link">
                <Image src="/images/oikos_logo.png" alt="Oikos Logo" width={256} height={101} />
              </a>
            </div>
            <div className="site-header__menu">
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
            <div className="columns">
              <div className="column">
                <h4>Nuestros aliados</h4>
              </div>            
            </div>
            <div className="columns">              
              <div className="column">
                <div className="sposors">
                    <a href="">
                      <img src="/images/aics.png" alt="Aliado 1" />
                    </a>
                    <a href="">
                      <img src="/images/cevi.png" alt="Aliado 2" />
                    </a>
                    <a href="">
                      <img src="/images/isais.png" alt="Aliado 3" width={120} height={100} />
                    </a>
                </div>
              </div>              
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
