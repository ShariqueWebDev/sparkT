"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Dot,
  DotIcon,
  Instagram,
  Linkedin,
} from "lucide-react";
import ClientWrapper from "../Wrapper/ClientWrapper";
import { BsWhatsapp } from "react-icons/bs";
import ActionButton from "./Button/ActionButton";

const imagesMain = [
  {
    id: 1,
    url: "/images/img1.webp",
    title: "App Design, Branding, Illustration, Motion, UX/UI",
    mainTitle: "Zuso",
  },
  {
    id: 2,
    url: "/images/img2.webp",
    title: "Branding, UX/UI, Illustration, Animation",
    mainTitle: "Cariuma",
  },
  {
    id: 3,
    url: "/images/img3.webp",
    title: "Branding, Interactive Content",
    mainTitle: "GEN",
  },
  {
    id: 4,
    url: "/images/img4.webp",
    title: "Strategy & Design, Identity, Interface",
    mainTitle: "Berrics",
  },
];

const imagesSecondary = [
  { id: 1, url: "/images/img5.webp", title: "Zuso" },
  { id: 2, url: "/images/img6.webp", title: "Superela" },
  { id: 3, url: "/images/img7.webp", title: "Cariuma" },
];

const imagesThird = [
  { id: 1, url: "/images/img8.webp" },
  { id: 2, url: "/images/img9.webp" },
  { id: 3, url: "/images/img10.webp" },
];

// ==================== COMPONENT ====================
export default function ImageRevealSlider() {
  // Indexes
  const mainIndex = useRef(0);
  const secondaryIndex = useRef(0);
  const thirdIndex = useRef(0);

  // Slide refs
  const mainRef = useRef<HTMLDivElement[]>([]);
  const secondaryRef = useRef<HTMLDivElement[]>([]);
  const thirdRef = useRef<HTMLDivElement[]>([]);

  const mainTitleRef = useRef<HTMLParagraphElement | null>(null);
  const TitleRef = useRef<HTMLParagraphElement | null>(null);

  // Loading states
  const mainLoaded = useRef<boolean[]>(
    new Array(imagesMain.length).fill(false)
  );
  const secondaryLoaded = useRef<boolean[]>(
    new Array(imagesSecondary.length).fill(false)
  );
  const thirdLoaded = useRef<boolean[]>(
    new Array(imagesThird.length).fill(false)
  );

  const [mainCount, setMainCount] = useState(0);
  const [secCount, setSecCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);

  // ==================== PRELOAD ALL IMAGES ====================
  useEffect(() => {
    // Main
    imagesMain.forEach((img, i) => {
      const image = new Image();
      image.src = img.url;
      if (image.complete) {
        mainLoaded.current[i] = true;
        setMainCount((c) => c + 1);
        if (i === 0) revealMain(0);
        return;
      }
      image.onload = () => {
        mainLoaded.current[i] = true;
        setMainCount((c) => c + 1);
        if (i === mainIndex.current) revealMain(i);
      };
    });

    // Secondary
    imagesSecondary.forEach((img, i) => {
      const image = new Image();
      image.src = img.url;
      if (image.complete) {
        secondaryLoaded.current[i] = true;
        setSecCount((c) => c + 1);
        if (i === 0) revealSecondary(0);
        return;
      }
      image.onload = () => {
        secondaryLoaded.current[i] = true;
        setSecCount((c) => c + 1);
        if (i === secondaryIndex.current) revealSecondary(i);
      };
    });

    // Third
    imagesThird.forEach((img, i) => {
      const image = new Image();
      image.src = img.url;
      if (image.complete) {
        thirdLoaded.current[i] = true;
        setThirdCount((c) => c + 1);
        if (i === 0) revealThird(0);
        return;
      }
      image.onload = () => {
        thirdLoaded.current[i] = true;
        setThirdCount((c) => c + 1);
        if (i === thirdIndex.current) revealThird(i);
      };
    });
  }, []);

  const animateMainTitle = (index: number) => {
    const el = mainTitleRef.current;
    if (!el) return;

    const newTitle = imagesMain[index].title;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        onStart: () => {
          el.innerText = newTitle;
        },
      }
    );
  };
  const animateTitle = (index: number) => {
    const el = TitleRef.current;
    if (!el) return;

    const newTitle = imagesMain[index].mainTitle;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        onStart: () => {
          el.innerText = newTitle;
        },
      }
    );
  };

  // ==================== REVEAL FUNCTIONS ====================
  const revealMain = (idx: number) => {
    const prev = mainRef.current[mainIndex.current];
    const next = mainRef.current[idx];
    if (!next) return;

    // previous slide hide
    if (prev && prev !== next) {
      gsap.to(prev, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 1.2,
        ease: "power3.inOut",
      });
    }

    // next slide show
    gsap.set(next, { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" });
    gsap.to(next, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.6,
      ease: "power4.out",
    });

    // 🔥 Title update + animate
    animateMainTitle(idx);
    animateTitle(idx);

    mainIndex.current = idx;
  };

  const revealSecondary = (idx: number) => {
    const prev = secondaryRef.current[secondaryIndex.current];
    const next = secondaryRef.current[idx];
    if (!next) return;
    if (prev && prev !== next) {
      gsap.to(prev, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
    gsap.set(next, { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" });
    gsap.to(next, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.6,
      ease: "power4.out",
    });
    secondaryIndex.current = idx;
  };

  const revealThird = (idx: number) => {
    const prev = thirdRef.current[thirdIndex.current];
    const next = thirdRef.current[idx];
    if (!next) return;
    if (prev && prev !== next) {
      gsap.to(prev, {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
    gsap.set(next, { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" });
    gsap.to(next, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.6,
      ease: "power4.out",
    });
    thirdIndex.current = idx;
  };

  // ==================== NAVIGATION (ALL SLIDERS SYNC) ====================
  const goNext = () => {
    // Main
    const nextMain = (mainIndex.current + 1) % imagesMain.length;
    if (mainLoaded.current[nextMain]) revealMain(nextMain);
    else waitForLoad(mainLoaded, nextMain, revealMain);

    // Secondary
    const nextSec = (secondaryIndex.current + 1) % imagesSecondary.length;
    if (secondaryLoaded.current[nextSec]) revealSecondary(nextSec);
    else waitForLoad(secondaryLoaded, nextSec, revealSecondary);

    // Third
    const nextThird = (thirdIndex.current + 1) % imagesThird.length;
    if (thirdLoaded.current[nextThird]) revealThird(nextThird);
    else waitForLoad(thirdLoaded, nextThird, revealThird);
  };

  const goPrev = () => {
    const prevMain =
      mainIndex.current === 0 ? imagesMain.length - 1 : mainIndex.current - 1;
    revealMain(prevMain);

    const prevSec =
      secondaryIndex.current === 0
        ? imagesSecondary.length - 1
        : secondaryIndex.current - 1;
    revealSecondary(prevSec);

    const prevThird =
      thirdIndex.current === 0
        ? imagesThird.length - 1
        : thirdIndex.current - 1;
    revealThird(prevThird);
  };

  // Helper for waiting image load
  const waitForLoad = (
    loadedArr: React.MutableRefObject<boolean[]>,
    idx: number,
    revealFn: (i: number) => void
  ) => {
    const interval = setInterval(() => {
      if (loadedArr.current[idx]) {
        clearInterval(interval);
        revealFn(idx);
      }
    }, 100);
  };

  return (
    <ClientWrapper>
      <div className="">
        <div className="flex items-center  ">
          <div className=" relative h-[600px] w-[70%] " data-cursor="hover">
            {/* Arrows */}
            <div className="flex items-center justify-between ">
              <div className="flex gap-2 w-fit" data-cursor="none">
                <ActionButton
                  iconClass="bg-white"
                  dotColor="#fff"
                  className="border-white"
                  icon={
                    <ChevronLeft
                      className="
              absolute bg-white 
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-6  group-hover:opacity-100 group-hover:scale-100
              "
                    />
                  }
                  navigationHandler={goPrev}
                />
                <ActionButton
                  dotColor="#fff"
                  iconClass="bg-white"
                  className="border-white"
                  navigationHandler={goNext}
                  icon={
                    <ChevronRight
                      className="
              absolute bg-white 
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-6  group-hover:opacity-100 group-hover:scale-100
              "
                    />
                  }
                />
              </div>
              <div
                className="flex justify-between items-center gap-10"
                data-cursor="none"
              >
                {/* <p className="text-white font-bold">GEN</p> */}
                <p ref={TitleRef} className="text-white font-bold">
                  {imagesMain[0].mainTitle}
                </p>
                <p ref={mainTitleRef} className="text-white font-semibold ">
                  {imagesMain[0].title}
                </p>
              </div>
            </div>
            <div className="relative  h-[450px] overflow-hidden bg-black mt-5">
              {/* All slides */}
              {imagesMain.map((img, index) => (
                <div
                  key={img.id}
                  ref={(el) => {
                    if (el) mainRef.current[index] = el;
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={img.url}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-out"
                    draggable={false}
                  />
                </div>
              ))}

              {/* Dots */}
              {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  i === currentIndex.current
                    ? "w-14 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div> */}

              {/* Optional: Loading indicator for first image */}
              {!mainLoaded.current[0] && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                  <div className="text-white text-2xl">Loading...</div>
                </div>
              )}
            </div>
          </div>
          <div className="w-[30%]">
            <div className="flex gap-2 items-center font-light text-white p-10 italic cursor-pointer">
              <span>
                <ArrowLeft size={18} />
              </span>
              <span data-cursor="none">Our Work</span>
            </div>
            <div className="py-16 flex gap-5 items-center justify-end w-full">
              <Instagram size={16} data-cursor="none" />
              <Linkedin size={16} data-cursor="none" />
              <BsWhatsapp size={16} data-cursor="none" />
              <button
                className="
    group relative z-30 p-1 backdrop-blur-lg 
    border  rounded-full w-12 h-12 flex items-center justify-center
    overflow-hidden transition-all cursor-pointer 
  "
                data-cursor="none"
              >
                {/* Dot Icon – hide on hover */}
                <DotIcon
                  size={30}
                  color="#000000"
                  className="
              absolute transition-all duration-300 
              opacity-100 group-hover:opacity-0
              scale-100 group-hover:scale-0
            "
                />

                {/* Chevron Icon – expand on hover */}
                <div
                  className="absolute bg-black 
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-full h-full group-hover:opacity-100 group-hover:scale-100 flex justify-center items-center rounded-full"
                >
                  <ChevronDown
                    size={25}
                    className="
              absolute  text-white 
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-6  group-hover:opacity-100 group-hover:scale-100
              "
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-[60%] ">
            <div className="flex gap-16 justify-end ">
              <div className="relative max-w-[400px] w-full h-[600px] overflow-hidden bg-black ">
                {/* All slides */}
                {imagesSecondary.map((img, index) => (
                  <div
                    key={img.id}
                    ref={(el) => {
                      if (el) secondaryRef.current[index] = el;
                    }}
                    className="absolute inset-0 max-w-[400px] w-full "
                  >
                    <img
                      src={img.url}
                      className=" w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-out"
                      draggable={false}
                    />

                    {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30" /> */}

                    {/* <div className="absolute bottom-32 left-12 text-white max-w-4xl">
                <h2 className="slide-title text-6xl md:text-8xl font-bold leading-tight">
                  {img.title}
                </h2>
                <p className="slide-title text-xl md:text-2xl mt-6 opacity-80">
                  Beautiful destination #{index + 1}
                </p>
              </div> */}
                  </div>
                ))}

                {/* Dots */}
                {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  i === currentIndex.current
                    ? "w-14 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div> */}

                {/* Optional: Loading indicator for first image */}
                {!secondaryLoaded.current[0] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                    <div className="text-white text-2xl">Loading...</div>
                  </div>
                )}
              </div>
              <div className="relative max-w-[400px] w-full h-[600px] overflow-hidden bg-black">
                {/* All slides */}
                {imagesThird.map((img, index) => (
                  <div
                    key={img.id}
                    ref={(el) => {
                      if (el) thirdRef.current[index] = el;
                    }}
                    className="absolute inset-0 max-w-[400px] w-full "
                  >
                    <img
                      src={img.url}
                      className=" w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-out"
                      draggable={false}
                    />

                    {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30" /> */}

                    {/* <div className="absolute bottom-32 left-12 text-white max-w-4xl">
                <h2 className="slide-title text-6xl md:text-8xl font-bold leading-tight">
                  {img.title}
                </h2>
                <p className="slide-title text-xl md:text-2xl mt-6 opacity-80">
                  Beautiful destination #{index + 1}
                </p>
              </div> */}
                  </div>
                ))}

                {/* Dots */}
                {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-3 rounded-full transition-all duration-500 ${
                  i === currentIndex.current
                    ? "w-14 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div> */}

                {/* Optional: Loading indicator for first image */}
                {!thirdLoaded.current[0] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                    <div className="text-white text-2xl">Loading...</div>
                  </div>
                )}
              </div>
            </div>
            <div className="" data-cursor="none">
              <div className="flex mt-10 gap-2.5">
                <ActionButton
                  dotColor="#000000"
                  iconClass="text-white bg-black"
                  icon={
                    <ChevronLeft
                      className="
              absolute 
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-6  group-hover:opacity-100 group-hover:scale-100
              "
                    />
                  }
                  navigationHandler={goPrev}
                />
                <ActionButton
                  dotColor="#000000"
                  iconClass="text-white bg-black"
                  icon={
                    <ChevronRight
                      className="
              absolute 
              transition-all duration-300 
              w-0 opacity-0 scale-0
              group-hover:w-6  group-hover:opacity-100 group-hover:scale-100
              "
                    />
                  }
                  navigationHandler={goNext}
                />
              </div>
              <div className="">{imagesSecondary.title}</div>
            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}
