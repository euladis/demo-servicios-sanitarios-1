function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-label">
            SERVICIOS SANITARIOS
          </span>

          <h1>
            Soluciones sanitarias para tu hogar, comercio o empresa
          </h1>

          <p>
  Reparaciones, instalaciones y mantenimiento sanitario para hogares,
  comercios y empresas en Montevideo y Ciudad de la Costa.
</p>

          <div className="hero-buttons">
            <a href="#contacto" className="primary-button">
              Solicitar presupuesto
            </a>

            <a
              href="https://wa.me/59800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="Técnico realizando un servicio sanitario en Montevideo"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;