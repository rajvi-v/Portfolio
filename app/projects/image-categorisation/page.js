import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Image Categorisation Output | Rajvi Panchal",
  description: "Training progress output for the Image Categorisation project.",
};

export default function ImageCategorisationOutput() {
  return (
    <main className="site-shell project-output-shell">
      <Link className="output-back-link" href="/#projects">
        Back to projects
      </Link>

      <section className="project-output-hero">
        <p className="section-label">PROJECT OUTPUT</p>
        <h1>Image Categorisation Output</h1>
        <p>
          Training progress from the image classification model, showing accuracy rising near completion while loss decreases across the training cycle.
        </p>
      </section>

      <section className="output-image-panel" aria-label="Image categorisation training progress screenshot">
        <Image
          src="/project-output/image-categorisation-training-progress.png"
          alt="MATLAB training progress output for the Image Categorisation project"
          width={1912}
          height={930}
          priority
          sizes="100vw"
          className="output-screenshot"
        />
      </section>
    </main>
  );
}