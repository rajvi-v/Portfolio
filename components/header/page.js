const navLinks = [
  { label: "About Me", href: "#intro" },
  { label: "Skills", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#intro" aria-label="Rajvi Panchal portfolio home">
        <span className="brand-mark">R</span>
        <span className="brand-title">Rajvi Panchal</span>
      </a>

      <nav className="header-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a href={link.href} key={link.label}>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}