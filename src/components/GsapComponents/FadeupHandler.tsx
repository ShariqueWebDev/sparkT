"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapFadeEffect: React.FC = () => {
  useLayoutEffect(() => {
    // Explicitly tell TypeScript that these are HTMLElements
    const elements = gsap.utils.toArray(".fade-up") as HTMLElement[];

    elements.forEach((el) => {
      gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default GsapFadeEffect;
