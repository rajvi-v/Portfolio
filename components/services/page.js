import ScrollReveal from "../scroll-reveal/page";

const services = [
  {
    icon: "AI",
    title: "Machine learning and computer vision",
    description:
      "Through my MSc in Artificial Intelligence, I work with Python, machine learning, computer vision, data mining, MATLAB pipelines, and model evaluation.",
  },
  {
    icon: "<>",
    title: "React and Next.js development",
    description:
      "I build production-ready frontends with React.js and Next.js, including server-side rendering, optimized components, and responsive interfaces for ecommerce and web platforms.",
  },
   {
    icon: "API",
    title: "API integration and testing",
    description:
      "I connect frontend applications with backend services through RESTful APIs and use Postman to test, validate, and stabilize frontend-to-backend communication.",
  },
  {
    icon: "$",
    title: "Checkout and payment integration",
    description:
      "I have developed complete ecommerce checkout systems and integrated Stripe.js for secure payment processing and reliable transaction experiences.",
  },
 
  {
    icon: "DB",
    title: "Databases and realtime data",
    description:
      "I have worked with MongoDB and Firebase, including Firestore and Auth, to support scalable storage, realtime synchronization, and reliable application data.",
  },
  {
    icon: "{}",
    title: "State management and user flows",
    description:
      "I use Redux and Redux Toolkit to manage complex multi-page flows, keep data consistent, and reduce UI bugs across interactive applications.",
  },
];

export default function Services() {
  return (
    <ScrollReveal className="services-section" id="services">
      <h2 className="section-label scroll-reveal-item reveal-delay-1">TECHNICAL SKILLS</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className={`service-card reveal-card scroll-reveal-item reveal-delay-${index + 2}`} key={service.title} tabIndex="0">
            <div className="service-card-content reveal-card-content">
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3>
              <span className="card-hint">View details</span>
            </div>

            <div className="service-card-details reveal-card-details">
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}
