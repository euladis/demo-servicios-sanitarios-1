import Reveal from "./Reveal";

function FAQ() {
  const questions = [
    {
      question: "¿En qué zonas trabajan?",
      answer:
        "Trabajamos en Montevideo y Ciudad de la Costa. Puedes consultarnos por tu zona y te confirmaremos la disponibilidad.",
    },
    {
      question: "¿Realizan presupuestos?",
      answer:
        "Sí. Evaluamos cada trabajo y brindamos información clara sobre el servicio antes de comenzar.",
    },
    {
      question: "¿Qué tipos de reparaciones realizan?",
      answer:
        "Realizamos reparaciones de pérdidas de agua, griferías, sanitarios, desagües y diferentes instalaciones sanitarias.",
    },
    {
      question: "¿Trabajan con hogares y comercios?",
      answer:
        "Sí. Atendemos hogares, comercios y empresas, adaptando el servicio a las necesidades de cada cliente.",
    },
    {
      question: "¿Cómo puedo solicitar un servicio?",
      answer:
        "Puedes comunicarte directamente por WhatsApp y contarnos qué necesitas. Coordinaremos contigo los siguientes pasos.",
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <Reveal as="div" className="section-header">
          <span>PREGUNTAS FRECUENTES</span>

          <h2>¿Tienes alguna duda?</h2>

          <p>
            Estas son algunas de las preguntas más frecuentes de nuestros
            clientes.
          </p>
        </Reveal>

        <div className="faq-list">
          {questions.map((item, index) => (
            <Reveal
              as="article"
              className="faq-item"
              key={item.question}
              delay={index * 60}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
