import { useState } from "react";
import { MapPin, Star, MessageCircle, Clock, Wrench } from "lucide-react";
import config from "./config";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Reveal from "./components/Reveal";

function App() {
  const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [necesidad, setNecesidad] = useState("");

const enviarWhatsApp = () => {
  const mensaje = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. Necesito: ${necesidad}`;

  const url = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
};

  return (
    <>
      <Navbar />

      <main>
     <Hero />
<Services />
<WhyChooseUs />
<About />
<HowItWorks />
<Gallery />
<FAQ />

        <section className="coverage" id="cobertura">
  <div className="coverage-container">

    <Reveal as="div" className="coverage-content">
      <span className="coverage-label">
        ZONA DE COBERTURA
      </span>

      <h2>
        Estamos cerca de ti
      </h2>

      <p>
        Brindamos servicios sanitarios en Montevideo y Ciudad de la Costa,
        atendiendo hogares, comercios y empresas.
      </p>

      <div className="coverage-list">
        <div className="coverage-item">
          <span><MapPin size={20} strokeWidth={2} /></span>
          <div>
            <h3>Montevideo</h3>
            <p>Atención en diferentes barrios de Montevideo.</p>
          </div>
        </div>

        <div className="coverage-item">
          <span><MapPin size={20} strokeWidth={2} /></span>
          <div>
            <h3>Ciudad de la Costa</h3>
            <p>Servicio disponible en la zona y alrededores.</p>
          </div>
        </div>
      </div>

      <a href="#contacto" className="coverage-button">
        Consultar disponibilidad
      </a>
    </Reveal>

    <Reveal as="div" className="coverage-visual" delay={120}>
      <div className="coverage-card">
        <span><MapPin size={30} strokeWidth={2} /></span>
        <h3>Montevideo</h3>
        <p>Ciudad de la Costa</p>
      </div>
    </Reveal>

  </div>
</section>

        <section className="testimonials">
  <div className="testimonials-container">

    <Reveal as="div" className="section-header">
      <span>TESTIMONIOS</span>

      <h2>
        La experiencia de nuestros clientes
      </h2>

      <p>
        Un buen servicio no termina cuando finaliza el trabajo.
        También importa la atención y la confianza durante todo el proceso.
      </p>
    </Reveal>

    <div className="testimonials-grid">

      <Reveal as="article" className="testimonial-card">
        <div className="testimonial-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        <p>
          “Excelente atención. Se comunicaron rápidamente y solucionaron
          el problema de pérdida de agua que teníamos en casa.”
        </p>

        <div className="testimonial-author">
          <div className="author-avatar">
            M
          </div>

          <div>
            <h3>María G.</h3>
            <span>Montevideo</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="article" className="testimonial-card" delay={100}>
        <div className="testimonial-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        <p>
          “Muy buena atención y explicación del trabajo. Coordinamos la
          visita rápidamente y quedaron conformes con el resultado.”
        </p>

        <div className="testimonial-author">
          <div className="author-avatar">
            J
          </div>

          <div>
            <h3>Jorge R.</h3>
            <span>Ciudad de la Costa</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="article" className="testimonial-card" delay={200}>
        <div className="testimonial-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        <p>
          “Necesitábamos reparar varios sanitarios en nuestro comercio.
          La atención fue clara y el trabajo se realizó de forma ordenada.”
        </p>

        <div className="testimonial-author">
          <div className="author-avatar">
            A
          </div>

          <div>
            <h3>Ana P.</h3>
            <span>Montevideo</span>
          </div>
        </div>
      </Reveal>

    </div>

    <p className="demo-note">
      * Testimonios ilustrativos para esta demostración web.
    </p>

  </div>
</section>

        <section className="contact" id="contacto">
  <div className="contact-container">

    <Reveal as="div" className="contact-content">
      <span className="contact-label">
        CONTACTO
      </span>

      <h2>
        ¿Necesitas un servicio sanitario?
      </h2>

      <p>
        Cuéntanos qué necesitas y nos pondremos en contacto contigo
        para coordinar el servicio.
      </p>

      <div className="contact-info">

        <div className="contact-item">
          <span><MessageCircle size={20} strokeWidth={2} /></span>
          <div>
            <h3>WhatsApp</h3>
            <p>099 000 000</p>
          </div>
        </div>

        <div className="contact-item">
          <span><MapPin size={20} strokeWidth={2} /></span>
          <div>
            <h3>Zona de atención</h3>
            <p>{config.cobertura}</p>
          </div>
        </div>

        <div className="contact-item">
          <span><Clock size={20} strokeWidth={2} /></span>
          <div>
            <h3>Horario de atención</h3>
            <p>{config.horario}</p>
          </div>
        </div>

      </div>

      <a
        href={`https://wa.me/${config.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        Contactar por WhatsApp
      </a>
    </Reveal>

    <Reveal as="div" className="contact-form" delay={120}>

      <h3>Solicitar presupuesto</h3>

      <form>

        <div className="form-group">
  <label>Nombre</label>
  <input
    type="text"
    placeholder="Tu nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />
</div>

        <div className="form-group">
  <label>Teléfono</label>
  <input
    type="tel"
    placeholder="099 000 000"
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)}
  />
</div>

        <div className="form-group">
  <label>¿Qué necesitas?</label>
  <textarea
    rows="5"
    placeholder="Cuéntanos brevemente qué servicio necesitas..."
    value={necesidad}
    onChange={(e) => setNecesidad(e.target.value)}
  ></textarea>
</div>

        <button type="button" onClick={enviarWhatsApp}>
          Solicitar presupuesto
        </button>

        <p className="form-note">
          Esta es una demostración del sitio web.
        </p>

      </form>

    </Reveal>

  </div>
</section>
      </main>

      <footer className="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h3>
        <Wrench size={20} strokeWidth={2.2} className="footer-brand-icon" />
        {config.empresa}
      </h3>

      <p>
        Soluciones sanitarias para tu hogar, comercio o empresa.
      </p>
    </div>

    <div className="footer-links">
      <h4>Navegación</h4>

      <a href="#inicio">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#contacto">Contacto</a>
    </div>

    <div className="footer-contact">
      <h4>Contacto</h4>

      <p>{config.telefono}</p>
      <p className="footer-contact-line">
        <MapPin size={14} strokeWidth={2} /> {config.cobertura}
      </p>
      <p className="footer-contact-line">
        <Clock size={14} strokeWidth={2} /> {config.horario}
      </p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>
      © 2026 Servicios Sanitarios Montevideo. Todos los derechos reservados.
    </p>

    <p>
      Sitio web demostrativo
    </p>
  </div>
</footer>
<WhatsAppButton />
    </>
  );

}
export default App;