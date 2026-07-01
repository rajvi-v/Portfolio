const experiences = [
  {
    company: "IceCube Digital",
    role: "Frontend Engineer",
    period: "April 2023 - August 2025",
    location: "Ahmedabad, India",
    summary:
      "Built ecommerce frontend experiences with Next.js, SSR, Redux, Stripe.js, MongoDB, Firebase, and tested API integrations.",
    description:
      "Developed end-to-end ecommerce features, improved high-resolution image loading with server-side rendering, created secure checkout flows, and handled frontend to backend communication for stable production systems.",
  },
  {
    company: "NimbleChapps",
    role: "Web Developer",
    period: "August 2022 - February 2023",
    location: "Ahmedabad, India",
    summary:
      "Built React.js interfaces, responsive layouts, REST API integrations, SCSS styling systems, and secure realtime web experiences.",
    description:
      "Converted design mockups into optimized React components, built responsive layouts with Material UI and Bootstrap, and developed a secure digital voting platform with realtime logic and strict validation.",
  },
];

export default function Credentials() {
  return (
    <section className="current-section" id="experience">
      <h2 className="section-label">EXPERIENCE</h2>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.company} tabIndex="0">
            <div className="experience-card-content">
              <span className="experience-date">{experience.period}</span>
              <h3>{experience.company}</h3>
              <p className="experience-role">
                {experience.role} / {experience.location}
              </p>
                            <span className="card-hint">View details</span>


            </div>

            <div className="experience-card-details">
              <p className="mono-copy">{experience.summary}</p>
              <p className="experience-description">{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}