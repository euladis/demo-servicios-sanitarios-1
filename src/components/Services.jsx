import { Droplet, ShowerHead, Toilet, Droplets, Wrench, Home } from "lucide-react";
import Reveal from "./Reveal";

function Services() {
  const services = [
    {
      icon: Droplet,
      title: "Reparación de pérdidas de agua",
      description:
        "Detectamos y solucionamos pérdidas de agua en hogares, comercios y empresas.",
    },
    {
      icon: ShowerHead,
      title: "Reparación de griferías",
      description:
        "Reparamos y reemplazamos griferías para mejorar el funcionamiento de tus instalaciones.",
    },
    {
      icon: Toilet,
      title: "Reparación de sanitarios",
      description:
        "Solucionamos problemas en inodoros, depósitos, lavatorios y otros sanitarios.",
    },
    {
      icon: Droplets,
      title: "Destapaciones",
      description:
        "Servicio de destapación para desagües y cañerías con problemas de obstrucción.",
    },
    {
      icon: Wrench,
      title: "Instalaciones sanitarias",
      description:
        "Realizamos instalaciones y modificaciones de redes sanitarias.",
    },
    {
      icon: Home,
      title: "Mantenimiento y reparaciones",
      description:
        "Mantenimiento y reparaciones sanitarias para hogares, comercios y empresas.",
    },
  ];

  return (
    <section className="services" id="servicios">
      <div className="services-container">

        <Reveal as="div" className="section-header">
          <span>NUESTROS SERVICIOS</span>

          <h2>
            Soluciones sanitarias para cada necesidad
          </h2>

          <p>
            Ofrecemos diferentes servicios para mantener tus instalaciones
            funcionando correctamente.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                as="article"
                className="service-card"
                key={service.title}
                delay={index * 80}
              >
                <div className="service-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contacto">
                  Solicitar servicio →
                </a>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;
