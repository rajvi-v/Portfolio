const projects = [
  {
    title: "Intelligent Railway Chatbot",
    meta: "Python, National Rail API, machine learning, expert systems",
    description:
      "Built a conversational railway assistant that collects journey details, searches for the cheapest available train tickets, provides booking links, predicts delays, and recommends contingency actions for railway staff.",
  },
  {
    title: "Image Categorisation",
    meta: "MATLAB, ResNet18, HOG, SURF, Random Forest, SVM, CNN",
    description:
      "Created an image classification pipeline for a 15-class scene dataset using Tiny Images, HOG, SURF Bag of Visual Words, ResNet18 transfer learning, LBP, Random Forest, KNN, SVM, CNN fine-tuning, and confusion matrix analysis.",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-label">PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal-card" key={project.title} tabIndex="0">
            <div className="project-card-content reveal-card-content">
              <h3>{project.title}</h3>
              <p className="mono-copy">{project.meta}</p>
              <span className="card-hint">View details</span>
            </div>

            <div className="project-card-details reveal-card-details">
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}