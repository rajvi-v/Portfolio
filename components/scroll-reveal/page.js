"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ as: Component = "section", className = "", children, ...props }) {
  const revealRef = useRef(null);

  useEffect(() => {
    const section = revealRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("is-visible", entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component ref={revealRef} className={`scroll-reveal-section ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
