import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Image from "next/image";
import Link from "next/link";



const projectSteps = [
  "Built a FastAPI railway chatbot with a browser chat interface for guided railway assistance.",
  "Used slot-filling conversation logic to collect origin, destination, date, time, ticket type, railcard, and return journey details.",
  "Integrated National Rail journey data where available, with fallback fare logic so the chatbot still returns a useful ticket result.",
  "Added station validation, railcard support, and return-ticket handling to make the ticket search more realistic.",
  "Trained delay-prediction models on historical South Western Railway data to estimate delayed train arrival times.",
  "Added an expert-system workflow that retrieves focused disruption guidance using structured rules, SQLite, and ChromaDB.",
];

const capabilityRows = [
  {
    capability: "Cheapest ticket search",
    result: "Guides users through a ticket-search conversation and returns a ticket option with a booking link.",
    approach: "Slot filling, station validation, National Rail API data, railcard discounts, return-ticket handling, and fallback fare logic.",
  },
  {
    capability: "Delay prediction",
    result: "Estimates arrival time for delayed trains on the South Western Railway route.",
    approach: "Historical train performance data, preprocessing, model comparison, and tuned regression models.",
  },
  {
    capability: "Disruption expert system",
    result: "Returns focused operational advice for line blockages and station disruption scenarios.",
    approach: "Guided incident collection, structured contingency records in SQLite, and semantic retrieval support with ChromaDB.",
    best: true,
  },
];

const resultHighlights = [
  "The chatbot combines conversational search with practical railway-specific validation and fallback handling.",
  "The ticket workflow supports realistic user needs such as railcards, return journeys, station validation, and booking links.",
  "The delay-prediction task adds machine-learning support for estimating disrupted train arrivals.",
  "The expert-system task makes the chatbot explainable by retrieving stored operational guidance instead of inventing railway rules.",
];

export const metadata = {
  title: "Intelligent Railway Chatbot | Rajvi Panchal",
  description:
    "Railway chatbot project covering cheapest ticket search, train delay prediction, and expert-system disruption guidance.",
};

export default function IntelligentRailwayChatbotOutput() {
  return (
   
    <main className="site-shell project-output-shell">
      <Header />
      <Link className="output-back-link" href="/#projects">
        Back to projects
      </Link>

      <section className="project-output-hero image-case-hero">
        <p className="section-label">PROJECT OUTPUT</p>
        <div className="image-case-hero-grid">
          <div>
            <h1>Intelligent Railway Chatbot</h1>
            <p>
            Built a conversational railway assistant that can search for ticket options, support delay prediction, and retrieve expert disruption guidance for railway scenarios.
            </p>
          </div>
        </div>
      </section>

      <section className="project-explainer" aria-labelledby="what-i-built-title">
        <div className="project-explainer-copy">
          <p className="section-label">WHAT I BUILT</p>
          <h2 id="what-i-built-title">A railway chatbot with search, prediction, and expert guidance.</h2>
          <p>
            The system was designed as a practical railway assistant. It collects missing details through conversation, searches for ticket information, predicts delayed arrivals, and returns focused disruption advice from stored operational knowledge.
          </p>
        </div>

        <ul className="project-bullet-list" aria-label="Intelligent railway chatbot project steps">
          {projectSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="output-section results-case-section" aria-labelledby="capability-table-title">
        <div className="output-section-heading">
          <p className="section-label">CAPABILITIES</p>
          <h2 id="capability-table-title">Three connected AI features inside one chatbot.</h2>
          <p>
            Each part of the project solves a different railway assistance problem, from passenger ticket search to staff-focused disruption guidance.
          </p>
        </div>

        <div className="results-table-shell" role="region" aria-label="Intelligent railway chatbot capability table" tabIndex="0">
          <table className="results-table">
            <thead>
              <tr>
                <th scope="col">Capability</th>
                <th scope="col">What It Does</th>
                <th scope="col">Technical Approach</th>
              </tr>
            </thead>
            <tbody>
              {capabilityRows.map((row) => (
                <tr className={row.best ? "best-result-row" : undefined} key={row.capability}>
                  <th scope="row">
                    {row.capability}
                    {row.best ? <span>Expert system</span> : null}
                  </th>
                  <td>{row.result}</td>
                  <td>{row.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="output-section" aria-labelledby="proof-output-title">
        <div className="output-section-heading">
          <p className="section-label">OUTPUT</p>
          <h2 id="proof-output-title">Ticket search and expert-system guidance in action.</h2>
          <p>
            These outputs show the chatbot returning a cheapest return ticket result and retrieving focused disruption guidance for railway staff.
          </p>
        </div>

        <div className="chatbot-proof-grid">
          <figure className="output-image-panel chatbot-proof-panel">
            <Image
              src="/project-output/railway-chatbot-ticket-output.jpeg"
              alt="Railway chatbot showing the cheapest return ticket result with railcard support"
              width={908}
              height={766}
              sizes="(max-width: 900px) 100vw, 50vw"
              className="output-screenshot"
            />
            <figcaption>Cheapest ticket search with railcard and return journey support.</figcaption>
          </figure>

          <figure className="output-image-panel chatbot-proof-panel">
            <Image
              src="/project-output/railway-chatbot-expert-system-output.png"
              alt="Railway chatbot showing signaller guidance for a line blockage between Woking and Guildford"
              width={1370}
              height={584}
              sizes="(max-width: 900px) 100vw, 50vw"
              className="output-screenshot"
            />
            <figcaption>Expert-system guidance for a railway disruption scenario.</figcaption>
          </figure>
        </div>
      </section>

      <section className="result-summary" aria-labelledby="chatbot-summary-title">
        <div>
          <p className="section-label">INTERPRETATION</p>
          <h2 id="chatbot-summary-title">The chatbot combines API search, ML prediction, and expert retrieval.</h2>
        </div>

        <ul className="project-bullet-list compact" aria-label="Intelligent railway chatbot interpretation bullets">
          {resultHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}

