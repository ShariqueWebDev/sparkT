import React from "react";
import ClientWrapper from "../Wrapper/ClientWrapper";

const Banner = () => {
  return (
    <div>
      <ClientWrapper>
        <div className="">
          <div className="text-8xl  font-poppins font-bold text-gray-50 flex justify-end text-right leading-28 ">
            <p className=" w-fit" data-cursor="hover" data-scale="12">
              We craft identity, <br /> experience and presence.
            </p>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default Banner;
