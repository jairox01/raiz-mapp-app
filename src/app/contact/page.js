import React from "react";


const Contact = () => {
    return(
        <div className="container">
            <div className="contact">
                <h1>Contáctanos</h1>
                <p>Para cualquier pregunta o solicitud, no dude en ponerse en contacto con nosotros utilizando la información a continuación</p>
                <div className="block">
                    <h2>Oikos ets</h2>
                    <p>líder del proyecto ECO TUR INCA</p>
                    <ul>
                        <li><a href="tel:0432520803">0432 520803</a></li>
                        <li><a href="mailto:info@oikosets.net">info@oikosets.net</a></li>
                        <li><a href="#">Viale Volontari della Libertà 18/4, Udine, Italy</a></li>
                        <li><a href="https://www.oikosets.net/">oikosets.net</a></li>
                    </ul>
                </div>
                <div className="block">
                    <h2>Instituto Sur Alexander Von Humboldt</h2>
                    <p>Institución Educativa y ONG, con 20 años de experiencia, responsabile dell’impementazione del progetto ECO TUR INCA e del catalogo etc etc.</p>
                    <ul>
                        <li><a href="tel:3127225214">3127225214</a></li>
                        <li><a href="mailto:instituto@isais.org">instituto@isais.org</a></li>
                        <li><a href="#">Cra 24 No 12 - 53 Pasto</a></li>
                        <li><a href="https://isais.org">isais.org</a></li>
                    </ul>
                </div>                
                <div className="block">
                    <h2>Raiz Fuerza Natural SAS</h2>
                    <p>Organización de estudios ambientales y forestales con 8 años de experiencia en el sur de Colombia,  encargada del estudio y la creación del catalogo</p>
                    <ul>
                        <li><a href="tel:+573108547852">310 854 7852</a></li>
                        <li><a href="mailto:info@raizcolombia.com">info@raizcolombia.com</a></li>
                        <li><a href="#">Pasto, Nariño</a></li>
                    </ul>
                </div>          
            </div>
        </div>
    )
}

export default Contact;