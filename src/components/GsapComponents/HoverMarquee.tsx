// components/HoverMarquee.tsx
import Image from "next/image";
import React from "react";

const HoverMarquee = ({
  title,
  marqueeItems,
}: {
  title: React.ReactNode;
  marqueeItems: string[];
}) => {
  return (
    <div className="relative group flex justify-center my-12">
      {/* Main Title */}
      <div className="flex items-center uppercase lg:text-8xl text tracking- group-hover:opacity-0 transition-opacity duration-300 inter-font">
        {title}
      </div>

      {/* Hover Content */}
      <div
        className={`
          absolute left-0 w-full bg-black 
          top-1/2 -translate-y-1/2 
          h-0 group-hover:h-28
          transition-all duration-300 ease-in-out 
          overflow-hidden text-white flex items-center
        `}
      >
        <div className="whitespace-nowrap animate-marquee flex text-4xl poppins-font">
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-8 uppercase">
              {item}
            </span>
          ))}

          {/* Duplicate for infinite loop */}
          {marqueeItems.map((item, i) => (
            <span key={`dup-${i}`} className="mx-8 uppercase">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverMarquee;
