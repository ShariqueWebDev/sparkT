"use client";
import Image from "next/image";
import React from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import HoverMarquee from "./HoverMarquee";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionComponent = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".fade-up-item2");

    items.forEach((item: any) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // <-- EXACT what you wanted
        },
      });
    });
  }, []);

  return (
    <div className="bg-white pt-36 ">
      {/* <ClientWrapper> */}
      <div className="flex justify-center items-center flex-col ">
        <h2 className="text-2xl font-bold poppins-font">
          What can we do for you
        </h2>
        <div className="mt-10 w-full fade-up-wrapper2">
          <div className="fade-up-item2">
            <HoverMarquee
              title={
                <div
                  className="flex flex-col lg:flex-row items-center uppercase 
             lg:text-[6.5rem] text-6xl tracking-tighter group-hover:opacity-0"
                >
                  {/* WORD: MOTION */}
                  <div className="flex items-center relative">
                    <p className="flex items-center">
                      Mo{/* O with GIF inside */}
                      ti{" "}
                      <span className="relative inline-block w-20 h-10 lg:w-36 lg:h-36 mx-1">
                        <Image
                          src="/gif/car.gif"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </span>{" "}
                      n
                    </p>
                  </div>

                  {/* WORD: GRAPHICS */}
                  <span className="lg:ml-4 mt-2 lg:mt-0">Graphics</span>
                </div>
              }
              marqueeItems={[
                "Campaigns",
                "Institutional and Corporate Videos",
                "Digital and Interactive Experience",
              ]}
            />
          </div>
          <div className="fade-up-item2">
            <HoverMarquee
              title={
                <div
                  className="flex flex-col lg:flex-row items-center uppercase 
  text-6xl lg:text-[6.5rem] tracking-tighter group-hover:opacity-0"
                >
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                    {/* MOBILE MULTILINE */}
                    <div className="lg:hidden text-center leading-[0.9]">
                      Web and <br />
                      digital <br />
                      pr
                      {/* GIF as O */}
                      <span className="relative inline-block w-20 h-10 mx-1 align-middle">
                        <Image
                          src="/gif/men.gif"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </span>
                      duct
                    </div>

                    {/* DESKTOP SINGLE LINE */}
                    <div className="hidden lg:flex items-center whitespace-nowrap leading-[0.85]">
                      Web and digital pr
                      <span className="relative inline-block w-36 h-36 mx-2 align-middle">
                        <Image
                          src="/gif/men.gif"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </span>
                      duct
                    </div>
                  </div>
                </div>
              }
              marqueeItems={[
                "Mobile and App Design",
                "Prototyping",
                "Interface design (ui)",
                "Interactive design ",
                "User exprience (ux)",
              ]}
            />
          </div>
          <div className="fade-up-item2">
            <HoverMarquee
              title={
                <div
                  className="flex flex-col lg:flex-row items-center  uppercase 
  text-6xl lg:text-[6.5rem] tracking-tighter group-hover:opacity-0"
                >
                  {/* MOBILE VERSION */}
                  <div className="lg:hidden text-center leading-[0.9]">
                    Br
                    <span className="relative inline-block w-20 h-10 mx-1 align-middle">
                      <Image
                        src="/gif/girl.gif"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </span>
                    nd
                    <br />
                    identity
                  </div>

                  {/* DESKTOP VERSION */}
                  <div className="hidden lg:flex items-center whitespace-nowrap leading-[0.85]">
                    Br
                    <span className="relative inline-block w-36 h-36 mx-2 align-middle">
                      <Image
                        src="/gif/girl.gif"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </span>
                    nd identity
                  </div>
                </div>
              }
              marqueeItems={[
                "Brand Messaging Development ",
                "Brand Architecture",
                "Market Research",
                "Brand Guidelines",
                "Naming and Slogan",
              ]}
            />
          </div>
        </div>
      </div>
      {/* </ClientWrapper> */}
      <div className="flex justify-center items-center mt-16 fade-up-item ">
        <button className="flex justify-center items-center gap-1.5 group  text- w-fit bg-black px-7 text-white rounded-full py-3 border-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-medium ">
          View all Works{" "}
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform duration-300 ease-in-out transform"
          />
        </button>
      </div>
    </div>
  );
};

export default MotionComponent;
