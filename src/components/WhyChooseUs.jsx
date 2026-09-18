import {
  Zap,
  ClipboardList,
  Wrench,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: "Atención ágil",
      description:
        "Coordinamos la visita según la disponibilidad y las características de cada servicio.",
    },
    {
      icon: ClipboardList,
      title: "Presupuestos claros",
      description:
        "Brindamos información clara sobre el trabajo antes de comenzar.",
    },
    {
      icon: Wrench,
      title: "Soluciones prácticas",
      description:
        "Buscamos resolver cada necesidad de forma ordenada y adecuada.",
    },
    {
      icon: MapPin,
      title: "Cobertura local",
      description:
        "Atendemos servicios en Montevideo y Ciudad de la Costa.",
    },
  ];

  return (
    <section className="why-us" id="nosotros">
      <div className="why-us-container">

        <Reveal as="div" className="why-us-intro">
          <span className="why-us-label">
            POR QUÉ ELEGIRNOS
          </span>

          <h2>
            Un servicio pensado para resolver, no para complicar
          </h2>

          <p>
            Cuando surge un problema sanitario, necesitas una solución clara
            y una atención que te dé confianza desde el primer contacto.
          </p>

          <a href="#contacto" className="why-us-cta">
            Consultar por un servicio
            <ArrowUpRight size={18} strokeWidth={2} />
          </a>
        </Reveal>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal
                as="article"
                className="benefit-card"
                key={benefit.title}
                delay={index * 80}
              >
                <div className="benefit-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div className="benefit-content">
                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;