import Reveal from "./Reveal";

function Gallery() {
  const works = [
    {
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7",
      title: "Reparación de instalaciones sanitarias",
      description: "Reparaciones y mantenimiento para hogares.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39",
      title: "Instalación sanitaria",
      description: "Instalaciones y modificaciones de cañerías.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      title: "Reparación de griferías",
      description: "Solución de pérdidas y problemas de funcionamiento.",
    },
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        <Reveal as="div" className="section-header">
          <span>NUESTROS TRABAJOS</span>
          <h2>Algunos de nuestros trabajos</h2>
          <p>
            Conoce algunos ejemplos de los servicios que podemos realizar.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {works.map((work, index) => (
            <Reveal
              as="article"
              className="gallery-card"
              key={work.title}
              delay={index * 100}
            >
              <img src={work.image} alt={work.title} />

              <div className="gallery-card-content">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="demo-note">
          * Imágenes ilustrativas para esta demostración web.
        </p>
      </div>
    </section>
  );
}

export default Gallery;
