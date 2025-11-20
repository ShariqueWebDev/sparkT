"use client";
import React from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
  useGSAP(() => {
    gsap.from(".fade-up-item1", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".fade-up-wrapper1",
        start: "top 70%",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(".fade-up-item", {
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".fade-up-wrapper",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <div className="bg-white pt-20">
      <ClientWrapper>
        <div className="fade-up-wrapper1">
          <p
            className="lg:text-[5rem] text-4xl  font-poppins font-bold  flex text lg:leading-24 leading-12 fade-up-item1  poppins-font "
            data-cursor="hover"
            data-scale="12"
          >
            We blend technology and art to create innovative designs that open
            up new possibilities.
          </p>
        </div>
        <div className=" lg:mt-40 mt-20 fade-up-wrapper inter-font ">
          <div className="grid lg:grid-cols-2 grid-cols-1 space-y-5 gap-x-32 lg:text-xl text-base text-gray-800 ">
            <p className=" fade-up-item">
              At Reino Studio, we blend technology and art to create innovative
              designs that open up new possibilities. We understand that
              sensitivity and technique go hand in hand, working together to
              benefit your company and customers.
            </p>
            <p className=" fade-up-item">
              Our owners are actively involved throughout the design process,
              ensuring a passionate and results-driven experience. With our
              dedicated customer service, close collaboration, and streamlined
              process, we make things simple and efficient, without unnecessary
              bureaucracy.
            </p>
            <p className=" fade-up-item">
              Specializing in digital platforms, we also work across various
              mediums. From planning to development, we cover everything from
              visual identity to interactive installations. What sets us apart
              is our personalized approach.
            </p>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default TextSection;
