"use client";
import { clientDataObj, ClientProps } from "@/utils/clientData";
import Image from "next/image";
import React from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const OurClient = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".client-item");

    items.forEach((item: any, index: number) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: item,
          start: `top 90%`,
        },
      });
    });
  });

  return (
    <div className="bg-white py-32">
      <ClientWrapper>
        <div className="w-full  grid lg:grid-cols-4 grid-cols-2 place-items-center gap-28 client-wrapper px-4">
          {clientDataObj.map((item: ClientProps, index) => {
            return (
              <div className="lg:w-[150px] w-[120px] client-item" key={index}>
                <Image
                  src={item?.imgPath}
                  width={500}
                  height={500}
                  alt="Our clients"
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </ClientWrapper>
    </div>
  );
};

export default OurClient;
