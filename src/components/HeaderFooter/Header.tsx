"use client";
import React, { useRef } from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const ref = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".fade-item");

    gsap.from(items, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <nav className="w-full py-20 bg-[#2b2f31]">
      <ClientWrapper>
        <div className=" flex justify-between ">
          <div className="inter-font text-white">
            <p
              className="text-3xl font-semibold cursor-pointer fade-up-elem"
              data-cursor="hover"
              data-scale="2"
            >
              Logo
            </p>
          </div>
          <ul
            className="text-white font-medium flex gap-28 inter-font"
            ref={ref}
          >
            <li
              className="cursor-pointer fade-item"
              data-cursor="hover"
              data-scale="2"
            >
              . Studio
            </li>
            <li
              className="cursor-pointer fade-item"
              data-cursor="hover"
              data-scale="2"
            >
              Services
            </li>
            <li
              className="cursor-pointer fade-item"
              data-cursor="hover"
              data-scale="2"
            >
              Works
            </li>
            <li
              className="cursor-pointer fade-item"
              data-cursor="hover"
              data-scale="2"
            >
              Contact
            </li>
          </ul>
        </div>
      </ClientWrapper>
    </nav>
  );
};

export default Header;
