import React from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";

const TextSection = () => {
  return (
    <div className="bg-white pt-20" data-scale="11">
      <ClientWrapper>
        <p
          className="text-[5rem]  font-poppins font-bold  flex text leading-24  "
          data-cursor="hover"
          data-scale="12"
        >
          We blend technology and art to create innovative designs that open up
          new possibilities.
        </p>
        <div className="grid grid-cols-2 space-y-5 gap-x-40 mt-40">
          <p className="text-xl text-gray-800">
            At Reino Studio, we blend technology and art to create innovative
            designs that open up new possibilities. We understand that
            sensitivity and technique go hand in hand, working together to
            benefit your company and customers.
          </p>
          <p className="text-xl text-gray-800">
            Our owners are actively involved throughout the design process,
            ensuring a passionate and results-driven experience. With our
            dedicated customer service, close collaboration, and streamlined
            process, we make things simple and efficient, without unnecessary
            bureaucracy.
          </p>
          <p className="text-xl text-gray-800">
            Specializing in digital platforms, we also work across various
            mediums. From planning to development, we cover everything from
            visual identity to interactive installations. What sets us apart is
            our personalized approach.
          </p>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default TextSection;
