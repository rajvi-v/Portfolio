import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Image from "next/image";
import Link from "next/link";

const heroMetrics = [
  { value: "3000", label: "SUN images" },
  { value: "15", label: "scene categories" },
  { value: "5", label: "methods compared" },
];

const projectSteps = [
  "Prepared a balanced SUN scene dataset with 1500 training images and 1500 testing images.",
  "Built a baseline using Tiny Image features with KNN and SVM classifiers.",
  "Improved classical feature extraction with HOG, SURF Bag of Visual Words, and LBP texture features.",
  "Fine-tuned a pretrained ResNet18 model to compare deep transfer learning against handcrafted features.",
  "Evaluated each method using accuracy, confusion matrices, and training output to understand model performance.",
];

const resultRows = [
  {
    method: "Tiny Image",
    classifier: "KNN",
    accuracy: "0.322",
    insight: "Simple baseline, but compressed images lose important scene detail.",
  },
  {
    method: "HOG",
    classifier: "SVM",
    accuracy: "0.503",
    insight: "Edge and shape descriptors improved recognition over raw tiny pixels.",
  },
  {
    method: "SURF BoW",
    classifier: "SVM",
    accuracy: "0.394",
    insight: "Local visual words captured patterns, but were weaker than stronger feature sets.",
  },
  {
    method: "ResNet18",
    classifier: "CNN",
    accuracy: "0.928",
    insight: "Best result, using pretrained deep features for high-level scene understanding.",
    best: true,
  },
  {
    method: "LBP",
    classifier: "Random Forest",
    accuracy: "0.551",
    insight: "Strongest classical comparison, especially useful for texture-heavy scenes.",
  },
];

const resultHighlights = [
  "The results show that feature quality had the biggest effect on classification performance.",
  "Classical methods became stronger when features described edges, texture, or local image patterns.",
  "ResNet18 performed best because transfer learning uses rich pretrained visual features.",
  "The comparison shows a clear progression from a simple baseline to advanced deep image classification.",
];

export const metadata = {
  title: "Image Categorisation Output | Rajvi Panchal",
  description:
    "Image categorisation project output with method summary, native result table, and accuracy interpretation.",
};

export default function ImageCategorisationOutput() {
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
            <h1>Image Categorisation</h1>
            <p>
              Created an image classification pipeline for a 15-class scene dataset using Tiny Images, HOG, SURF Bag of Visual Words, ResNet18 transfer learning, LBP, Random Forest, KNN, SVM, CNN fine-tuning, and confusion matrix analysis.,

            </p>
          </div>

          <dl className="project-metric-rail" aria-label="Image categorisation project metrics">
            {heroMetrics.map((metric) => (
              <div className="project-metric" key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="project-explainer" aria-labelledby="what-i-did-title">
        <div className="project-explainer-copy">
          <p className="section-label">WHAT I DID</p>
          <h2 id="what-i-did-title">Compared classical image features with deep learning.</h2>
          <p>
            The project uses a 3000-image subset of the SUN database across 15 scene categories. Each method extracts visual information differently, then a classifier predicts the scene category from those features.
          </p>
        </div>

        <ul className="project-bullet-list" aria-label="Image categorisation project steps">
          {projectSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="output-section results-case-section" aria-labelledby="result-table-title">
        <div className="output-section-heading">
          <p className="section-label">RESULT</p>
          <h2 id="result-table-title">Accuracy comparison across the best version of each method</h2>
          <p>
            The table focuses on what matters for a portfolio reader: the feature method, classifier, accuracy, and what the result shows.
          </p>
        </div>

        <div className="results-table-shell" role="region" aria-label="Image categorisation accuracy table" tabIndex="0">
          <table className="results-table">
            <thead>
              <tr>
                <th scope="col">Feature Method</th>
                <th scope="col">Best Classifier</th>
                <th scope="col">Accuracy</th>
                <th scope="col">What It Shows</th>
              </tr>
            </thead>
            <tbody>
              {resultRows.map((row) => (
                <tr className={row.best ? "best-result-row" : undefined} key={row.method}>
                  <th scope="row">
                    {row.method}
                    {row.best ? <span>Best overall</span> : null}
                  </th>
                  <td>{row.classifier}</td>
                  <td className="accuracy-cell">{row.accuracy}</td>
                  <td>{row.insight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="result-summary" aria-labelledby="result-summary-title">
        <div>
          <p className="section-label">INTERPRETATION</p>
          <h2 id="result-summary-title">Better features produced better classification.</h2>
        </div>

        <ul className="project-bullet-list compact" aria-label="Result interpretation bullets">
          {resultHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="output-section training-output-section" aria-labelledby="training-progress-title">
        <div className="output-section-heading">
          <p className="section-label">TRAINING OUTPUT</p>
          <h2 id="training-progress-title">Model training progress</h2>
          <p>
            The training output provides supporting evidence from the deep learning experiment, showing how the model learned during the training cycle.
          </p>
        </div>

        <div className="output-image-panel" aria-label="Image categorisation training progress screenshot">
          <Image
            src="/project-output/image-categorisation-training-progress.png"
            alt="MATLAB training progress output for the Image Categorisation project"
            width={1912}
            height={930}
            sizes="100vw"
            className="output-screenshot"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}


