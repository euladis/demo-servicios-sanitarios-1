import { Handshake, Wrench, Home } from "lucide-react";
import Reveal from "./Reveal";

function About() {
  const benefits = [
    {
      icon: Handshake,
      title: "Atención personalizada",
      description:
        "Escuchamos cada necesidad y buscamos la solución adecuada para cada cliente.",
    },
    {
      icon: Wrench,
      title: "Trabajo responsable",
      description:
        "Realizamos cada servicio con orden, cuidado y compromiso.",
    },
    {
      icon: Home,
      title: "Soluciones para cada necesidad",
      description:
        "Atendemos reparaciones, instalaciones y mantenimiento para hogares, comercios y empresas.",
    },
  ];

  return (
    <section className="about" id="nosotros">
      <div className="about-container">
        <Reveal as="div" className="about-content">
          <span className="about-label">SOBRE NOSOTROS</span>

          <h2>Profesionales comprometidos con cada trabajo</h2>

          <p>
            Somos un servicio sanitario orientado a brindar soluciones
            prácticas y confiables para hogares, comercios y empresas.
          </p>

          <p>
            Trabajamos con atención personalizada, comunicación clara y
            compromiso en cada servicio.
          </p>
        </Reveal>

        <Reveal as="div" className="about-image" delay={120}>
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4"
            alt="Profesional de servicios sanitarios en Montevideo"
          />
        </Reveal>
      </div>

      <div className="about-benefits">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Reveal
              as="article"
              className="about-benefit"
              key={benefit.title}
              delay={index * 80}
            >
              <div className="about-benefit-icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default About;
