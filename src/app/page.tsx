import MotionComponent from "@/components/GsapComponents/MotionComponent";
import SliderSection from "@/components/GsapComponents/SliderSection";
import Banner from "@/components/HomePageComponents/Banner";
import ContactUsSection from "@/components/HomePageComponents/ContactUsSection";
import OurClient from "@/components/HomePageComponents/OurClient";
import TextSection from "@/components/PageComponents/TextSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#2b2f31]">
      <div className="lg:h-[85vh] h-[65vh] relative ">
        <Banner />
        <div className="absolute lg:top-[350px] top-[230px] w-full h-full">
          <SliderSection />
        </div>
      </div>
      <div className="lg:h-[1000px] h-[650px] w-screen bg-white"></div>
      <div className="">
        <TextSection />
      </div>
      <div className="">
        <MotionComponent />
      </div>
      <div className="">
        <OurClient />
      </div>
      <div className="">
        <ContactUsSection />
      </div>
    </div>
  );
}
