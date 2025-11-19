"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

const GsapFadeUpOnLoad: React.FC = () => {
  useLayoutEffect(() => {
    const elements = gsap.utils.toArray(".fade-up-elem") as HTMLElement[];

    gsap.from(elements, {
      opacity: 0,
      y: 60,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15, // ek ke baad ek
    });
  }, []);

  return null;
};

export default GsapFadeUpOnLoad;
