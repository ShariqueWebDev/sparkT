import SliderSection from "@/components/GsapComponents/SliderSection";
import Banner from "@/components/HomePageComponents/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#2b2f31]">
      <div className="h-[83vh] relative ">
        <Banner />
        <div className="absolute top-[350px] w-full h-full">
          <SliderSection />
        </div>
      </div>
      <div className="h-[500px] w-screen bg-white"></div>
    </div>
  );
}
