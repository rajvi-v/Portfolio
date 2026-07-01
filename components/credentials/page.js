import ScrollReveal from "../scroll-reveal/page";

const experiences = [
  {
    company: "IceCube Digital",
    role: "Frontend Engineer",
    period: "April 2023 - August 2025",
    location: "India",
    summary:
      "Built ecommerce frontend experiences with Next.js, SSR, Redux, Stripe.js, MongoDB, Firebase, and tested API integrations.",
    description:
      "Built ecommerce frontends with Next.js, SSR, Redux, Stripe.js, MongoDB, Firebase, secure checkout flows, and tested API integrations.",
  },
  {
    company: "NimbleChapps",
    role: "Web Developer",
    period: "August 2022 - February 2023",
    location: "India",
    summary:
      "Built React.js interfaces, responsive layouts, REST API integrations, SCSS styling systems, and secure realtime web experiences.",
    description:
      "Built responsive React interfaces, REST API integrations, SCSS styling systems, and a secure realtime digital voting platform.",
  },
];

export default function Credentials() {
  return (
    <ScrollReveal className="current-section" id="experience">
      <h2 className="section-label scroll-reveal-item reveal-delay-1">EXPERIENCE</h2>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <article className={`experience-card scroll-reveal-item reveal-delay-${index + 2}`} key={experience.company} tabIndex={0}>
            <div className="experience-date">{experience.period}</div>

            <div className="experience-heading">
              <h3>{experience.role}</h3>
              <p className="experience-role">
                {experience.company} / {experience.location}
              </p>
            </div>

            <div className="experience-copy">
              <p className="experience-description">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}

