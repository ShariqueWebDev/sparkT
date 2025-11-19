"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    const moveCursor = (e: any) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // (1) Hover scale elements
    const scaleElements = document.querySelectorAll("[data-cursor='hover']");

    scaleElements.forEach((el) => {
      const scale = Number(el.getAttribute("data-scale")) || 1;

      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale, duration: 0.2 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });

    // (2) Hide cursor elements
    const noneElements = document.querySelectorAll("[data-cursor='none']");

    noneElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 0, duration: 0.2 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none fixed top-0 left-0
        w-10 h-10 rounded-full bg-white
        mix-blend-difference z-9999
      "
    ></div>
  );
};

export default CustomCursor;
