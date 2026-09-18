import { Smartphone, CalendarCheck, Search, Wrench } from "lucide-react";
import Reveal from "./Reveal";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Cuéntanos qué necesitas",
      description:
        "Contáctanos y explícanos qué problema o trabajo necesitas realizar.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Coordinamos la visita",
      description:
        "Buscamos un día y horario conveniente para realizar el servicio.",
    },
    {
      number: "03",
      icon: Search,
      title: "Evaluamos el trabajo",
      description:
        "Analizamos la situación y determinamos la solución necesaria.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Realizamos el trabajo",
      description:
        "Llevamos a cabo el servicio acordado de manera profesional.",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">

        <Reveal as="div" className="section-header">
          <span>¿CÓMO FUNCIONA?</span>

          <h2>
            Solicitar un servicio es muy sencillo
          </h2>

          <p>
            Te acompañamos durante todo el proceso, desde el primer contacto
            hasta la finalización del trabajo.
          </p>
        </Reveal>

        <div className="steps-container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal
                as="article"
                className="step-card"
                key={step.number}
                delay={index * 100}
              >
                <div className="step-number">{step.number}</div>

                <div className="step-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
