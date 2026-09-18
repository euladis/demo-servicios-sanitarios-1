import Reveal from "./Reveal";

function Gallery() {
  const works = [
    {
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7",
      category: "REPARACIONES",
      title: "Instalaciones sanitarias",
      description:
        "Reparaciones y mantenimiento para hogares y espacios comerciales.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39",
      category: "INSTALACIONES",
      title: "Modificaciones sanitarias",
      description:
        "Instalación y modificación de cañerías e instalaciones sanitarias.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      category: "GRIFERÍAS",
      title: "Reparación de griferías",
      description:
        "Solución de pérdidas y problemas de funcionamiento.",
    },
  ];

  return (
    <section className="gallery" id="trabajos">
      <div className="gallery-container">

        <Reveal as="div" className="section-header">
          <span>NUESTROS TRABAJOS</span>

          <h2>Algunos de nuestros trabajos</h2>

          <p>
            Conoce algunos ejemplos de los servicios que podemos realizar
            para hogares, comercios y empresas.
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

              <div className="gallery-card-overlay">

                <span className="gallery-card-category">
                  {work.category}
                </span>

                <div className="gallery-card-content">
                  <h3>{work.title}</h3>

                  <p>{work.description}</p>
                </div>

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