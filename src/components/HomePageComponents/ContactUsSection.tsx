"use client";
import { Phone } from "lucide-react";
import React from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ContactUsSection = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".contact-item") as HTMLElement[];

    ScrollTrigger.matchMedia({
      // Mobile screens (0 - 1023px)
      "(max-width: 1023px)": function () {
        items.forEach((item) => {
          gsap.from(item, {
            y: 40,
            opacity: 0,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 100%", // mobile
            },
          });
        });
      },

      // Desktop screens (1024px and above)
      "(min-width: 1024px)": function () {
        items.forEach((item) => {
          gsap.from(item, {
            y: 40,
            opacity: 0,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 85%", // desktop
            },
          });
        });
      },
    });
  });

  return (
    <div className="bg-black h- pt-36 pb-28">
      <ClientWrapper className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[70%] w-full contact-item">
          <div className="w-fit group">
            <h2
              className="text-white lg:text-[13rem] text-7xl font-bold uppercase poppins-font"
              data-cursor="hover"
              data-scale="12"
            >
              Say Hi!
            </h2>
            <p className="w-0 group-hover:w-full h-2.5 transition-all duration-700 ease-in-out bg-white -mt-5 "></p>
          </div>
          <div
            className="lg:text-lg mt-10 w-fit inter-font"
            data-cursor="hover"
            data-scale="4"
          >
            <p className="text-white font-bold">Tell us about your project.</p>
            <p className="text-white font-medium">
              Let’s collaborate and make great stuff.
            </p>
          </div>
        </div>
        <div
          className="text-white lg:w-[30%] w-full h-[25px] flex items-center gap-5 mt-10 contact-item"
          data-cursor="hover"
          data-scale="3"
        >
          <div className="">
            <Phone size={22} />
          </div>
          <div className="h-[25px] w-[1px] bg-white"></div>
          <p className="">
            <a href="tel:5521984796999" className="font-medium text-lg">
              +55 21 98479-6999
            </a>
          </p>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default ContactUsSection;
