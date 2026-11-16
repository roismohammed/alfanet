"use client";
import { useEffect } from "react";

export default function ScrollAnimation({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-4");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".scroll-anim");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div className="scroll-anim transition-all duration-700 ease-out opacity-0 translate-y-4">{children}</div>;
}
