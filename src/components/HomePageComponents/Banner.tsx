"use client";
import React, { useRef, useLayoutEffect } from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import gsap from "gsap";

const Banner = () => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      },
      (ctx) => {
        if (ctx.conditions?.isDesktop && textRef.current) {
          // Desktop: word by word animation
          const words = gsap.utils.toArray(".word");

          gsap.from(words, {
            y: 40,
            opacity: 0,
            duration: 0.3,
            ease: "none",
            stagger: 0.04,
          });
        }

        if (ctx.conditions?.isMobile && textRef.current) {
          // Mobile: simple fade-up
          gsap.from(textRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }
      }
    );

    return () => mm.revert();
  }, []);

  // Desktop 2-line split
  const line1 = "We craft identity,".split(" ");
  const line2 = "experience and presence.".split(" ");

  return (
    <div>
      <ClientWrapper>
        <div className="flex justify-end">
          <div
            className="
              font-poppins font-bold text-gray-50 text-right lg:leading-28 leading-12 w-fit poppins-font
              lg:text-8xl text-4xl
              flex flex-col items-end
            "
            data-cursor="hover"
            data-scale="12"
            ref={textRef}
          >
            {/* Desktop only layout */}
            <div className="hidden lg:block">
              {/* LINE 1 */}
              <div className="w-full">
                {line1.map((word, i) => (
                  <span
                    key={`l1-${i}`}
                    className="inline-block overflow-hidden"
                  >
                    <span className="word inline-block">{word}&nbsp;</span>
                  </span>
                ))}
              </div>

              {/* LINE 2 */}
              <div className="w-fit">
                {line2.map((word, i) => (
                  <span
                    key={`l2-${i}`}
                    className="inline-block overflow-hidden"
                  >
                    <span className="word inline-block">{word}&nbsp;</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile: single line */}
            <p className="lg:hidden block">
              We craft identity, experience and presence.
            </p>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default Banner;
