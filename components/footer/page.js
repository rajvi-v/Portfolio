import ScrollReveal from "../scroll-reveal/page";

const footerLinks = [
  { label: "About Me", href: "/#intro" },
  { label: "Skills", href: "/#services" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
];

const socialLinks = [
  { label: "https://www.linkedin.com/in/rajvi-panchal-a81185182/" },
  { label: "https://github.com/rajvi-v" },
];

export default function Footer() {
  return (
    <ScrollReveal as="footer" className="site-footer" id="footer">
      <div className="footer-main">
        <div className="scroll-reveal-item reveal-delay-1">
          <p className="footer-kicker">BASED IN UNITED KINGDOM</p>
          <h2>Let&apos;s build modern web experiences with clean frontend engineering.</h2>
        </div>

        <div className="footer-contact scroll-reveal-item reveal-delay-2">
          <span className="footer-title">Contact</span>
          <a href="mailto:rajvipanchal91@gmail.com">rajvipanchal91@gmail.com</a>
          {socialLinks.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom scroll-reveal-item reveal-delay-3">
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </nav>
        <p>Copyright 2026 Rajvi Panchal. All rights reserved.</p>
      </div>
    </ScrollReveal>
  );
}

