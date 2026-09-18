import { Wrench, Phone } from "lucide-react";
import config from "../config";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="logo">
          <span className="logo-icon">
            <Wrench size={16} strokeWidth={2.4} />
          </span>
          Servicios Sanitarios
        </a>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="nav-actions">
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-phone"
          >
            <span className="nav-phone-icon" aria-hidden="true">
              <Phone size={17} strokeWidth={2.2} fill="currentColor" />
            </span>

            <span className="nav-phone-text">
              <small>Llamar o escribir</small>
              <strong>{config.telefono}</strong>
            </span>
          </a>

          <a href="#contacto" className="nav-button">
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
