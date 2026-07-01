import Image from "next/image";

const socialLinks = [
  {
    label: "Visit LinkedIn profile",
    href: "https://www.linkedin.com/in/rajvi-panchal-a81185182/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.94 8.9H3.75v10.35h3.19V8.9ZM5.35 4.75a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm13.9 8.58c0-3.12-1.67-4.57-3.9-4.57a3.36 3.36 0 0 0-3.03 1.66V8.9H9.27v10.35h3.19v-5.12c0-1.35.26-2.66 1.93-2.66 1.65 0 1.67 1.54 1.67 2.75v5.03h3.19v-5.92Z" />
      </svg>
    ),
  },
  {
    label: "Visit GitHub profile",
    href: "https://github.com/rajvi-v",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3.5a8.72 8.72 0 0 0-2.76 17c.44.08.6-.19.6-.42v-1.49c-2.45.53-2.97-1.05-2.97-1.05-.4-1.02-.98-1.29-.98-1.29-.8-.55.06-.54.06-.54.89.06 1.36.91 1.36.91.79 1.35 2.07.96 2.57.73.08-.57.31-.96.56-1.18-1.95-.22-4-1-4-4.32 0-.95.34-1.73.9-2.35-.09-.22-.39-1.12.09-2.32 0 0 .74-.24 2.4.9A8.28 8.28 0 0 1 12 7.78c.74 0 1.48.1 2.18.3 1.66-1.14 2.39-.9 2.39-.9.49 1.2.18 2.1.09 2.32.56.62.9 1.4.9 2.35 0 3.33-2.05 4.09-4 4.31.32.27.6.8.6 1.62v2.4c0 .23.16.5.6.42A8.72 8.72 0 0 0 12 3.5Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero-section" id="intro">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Hi, I&apos;m Rajvi Panchal.</p>
          <h1>
            Frontend Engineer
            <br />
            and Aspiring AI Engineer.
          </h1>
          <p className="hero-copy">
            Master&apos;s student in Artificial Intelligence at the University of East Anglia, passionate about building AI-powered and web applications. Currently seeking an opportunity as an AI Software Engineer, Machine Learning Engineer, or Frontend Developer to apply my skills, contribute to innovative projects, and grow as a software engineer.
          </p>
          <div className="hero-socials" aria-label="Social profiles">
            {socialLinks.map((link) => (
              <a
                className="hero-social-link"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <figure className="hero-photo-frame" aria-label="Portrait of Rajvi Panchal">
          <Image
            src="/profile-photo.jpeg"
            alt="Rajvi Panchal"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
            className="hero-photo"
          />
        </figure>
      </div>
    </section>
  );
}