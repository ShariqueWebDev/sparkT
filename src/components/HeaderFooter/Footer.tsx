import { Instagram, Linkedin } from "lucide-react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import ClientWrapper from "../Wrapper/ClientWrapper";

const Footer = () => {
  return (
    <div className="bg-black ">
      <ClientWrapper>
        <div className=" py-14  text-white flex justify-between lg:flex-row flex-col max-sm:items-center max-sm:gap-10 border-t border-gray-700">
          <ul className="flex items-center gap-10">
            <li
              className="cursor-pointer text-sm tracking-wider font-medium inter-font"
              data-cursor="hover"
              data-scale="2"
            >
              Studio
            </li>
            <li
              className="cursor-pointer text-sm tracking-wider font-medium inter-font"
              data-cursor="hover"
              data-scale="2"
            >
              Services
            </li>
            <li
              className="cursor-pointer text-sm tracking-wider font-medium inter-font"
              data-cursor="hover"
              data-scale="2"
            >
              Works
            </li>
            <li
              className="cursor-pointer text-sm tracking-wider font-medium inter-font"
              data-cursor="hover"
              data-scale="2"
            >
              Contact
            </li>
          </ul>
          <ul className="flex items-center gap-10">
            <li className="">
              <Instagram size={16} className="cursor-pointer" />
            </li>
            <li className="">
              <Linkedin size={16} className="cursor-pointer" />
            </li>
            <li className="">
              <BsWhatsapp size={16} className="cursor-pointer" />
            </li>
          </ul>
        </div>
      </ClientWrapper>
    </div>
  );
};

export default Footer;
