import { Zap, ClipboardList, Wrench, MapPin } from "lucide-react";
import Reveal from "./Reveal";

function WhyChooseUs() {
  const benefits = [
    {
      icon: Zap,
      title: "Atención rápida",
      description:
        "Coordinamos la visita según la disponibilidad y la urgencia de cada servicio.",
    },
    {
      icon: ClipboardList,
      title: "Presupuestos claros",
      description:
        "Evaluamos cada trabajo y brindamos información clara antes de comenzar.",
    },
    {
      icon: Wrench,
      title: "Experiencia",
      description:
        "Ofrecemos soluciones para hogares, comercios y empresas.",
    },
    {
      icon: MapPin,
      title: "Cobertura local",
      description:
        "Trabajamos en Montevideo y Ciudad de la Costa.",
    },
  ];

  return (
    <section className="why-us" id="nosotros">
      <div className="why-us-container">

        <Reveal as="div" className="section-header">
          <span>¿POR QUÉ ELEGIRNOS?</span>

          <h2>
            Soluciones pensadas para tu tranquilidad
          </h2>

          <p>
            Nos enfocamos en ofrecer un servicio profesional, claro y
            adaptado a las necesidades de cada cliente.
          </p>
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
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
