import React, { ReactNode } from "react";
import ReactLenis from "lenis/react";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, // Lower = smoother (0.05–0.1 perfect)
        smoothWheel: true, // Smooth out wheel scrolling
        wheelMultiplier: 0.6, // Slow + smooth feel
        touchMultiplier: 1.5,
        infinite: false, // Set true only if using infinite scroll layout
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
