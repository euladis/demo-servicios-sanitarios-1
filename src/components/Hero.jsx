import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import config from "../config";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            SERVICIOS SANITARIOS
          </span>

          <h1>
            Soluciones sanitarias para tu hogar o negocio
          </h1>

          <p>
            Reparaciones, instalaciones y mantenimiento sanitario
            con atención personalizada en Montevideo y Ciudad de la Costa.
          </p>

          <div className="hero-buttons">

            <a href="#contacto" className="primary-button">
              Solicitar presupuesto
              <ArrowRight size={18} strokeWidth={2.2} />
            </a>

            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              WhatsApp
            </a>

          </div>

          <div className="hero-trust">

            <div className="hero-trust-item">
              <CheckCircle2 size={18} strokeWidth={2} />
              <span>Atención personalizada</span>
            </div>

            <div className="hero-trust-item">
              <CheckCircle2 size={18} strokeWidth={2} />
              <span>Presupuestos claros</span>
            </div>

            <div className="hero-trust-item">
              <CheckCircle2 size={18} strokeWidth={2} />
              <span>Montevideo y Ciudad de la Costa</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="Profesional realizando un servicio de mantenimiento"
          />

          <div className="hero-image-card">
            <strong>¿Necesitas ayuda?</strong>
            <span>Coordinemos tu servicio</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;