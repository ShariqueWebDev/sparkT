"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".item");

    // Initial hidden state (except first item)
    items.forEach((item, i) => {
      if (i !== 0) {
        gsap.set(item, { yPercent: 100 });
        const img = item.querySelector("img");
        if (img) gsap.set(img, { yPercent: -100 });
      }
    });

    // Main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: `+=${items.length * 100}vh`, // har item ke liye 100vh scroll
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, i) => {
      if (i < items.length - 1) {
        const nextItem = items[i + 1];
        const nextImg = nextItem.querySelector("img");

        tl.to(item, { yPercent: -100 }, "+=0.1")
          .to(item.querySelector("img"), { yPercent: 100 }, "<")
          .to(nextItem, { yPercent: 0 }, "<")
          .to(nextImg, { yPercent: 0 }, "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const images = [
    "/images/img1.jpg",
    "/images/img2.webp",
    "/images/img3.webp",
    "/images/img4.webp",
    "/images/img5.webp",
  ];

  const titles = [
    "The Journey Begins",
    "Into the Unknown",
    "Hidden Worlds",
    "Ocean Dreams",
    "Whispers of the Forest",
    "Peak of Silence",
  ];

  return (
    <>
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-6xl font-bold">Scroll Down ↓</h1>
      </div>

      <section className="wrapper relative bg-black">
        {images.map((src, index) => (
          <div key={index} className="item absolute inset-0 overflow-hidden">
            <div className="relative w-full h-screen">
              <Image
                src={src}
                alt={titles[index]}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-20 left-10 text-white">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">
                  {`0${index + 1}.`}
                </h2>
                <p className="text-4xl md:text-6xl mt-4 font-light">
                  {titles[index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-6xl font-bold">The End ✨</h1>
      </div>
    </>
  );
}

// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// export default function MaskedTextSwap() {
//   const maskRef = useRef(null);
//   const word1Ref = useRef(null);
//   const word2Ref = useRef(null);

//   useEffect(() => {
//     gsap.set(word2Ref.current, { y: "100%", opacity: 0 });
//   }, []);

//   const handleEnter = () => {
//     gsap.to(word1Ref.current, {
//       y: "-100%",
//       opacity: 0,
//       duration: 0.45,
//       ease: "power3.out",
//     });

//     gsap.to(word2Ref.current, {
//       y: "0%",
//       opacity: 1,
//       duration: 0.45,
//       ease: "power3.out",
//     });
//   };

//   const handleLeave = () => {
//     gsap.to(word1Ref.current, {
//       y: "0%",
//       opacity: 1,
//       duration: 0.45,
//       ease: "power3.out",
//     });

//     gsap.to(word2Ref.current, {
//       y: "100%",
//       opacity: 0,
//       duration: 0.45,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div
//       className="flex items-center gap-3 text-4xl font-bold"
//       style={{ userSelect: "none" }}
//     >
//       {/* Static text outside the circle (no change) */}
//       <span>Craft</span>

//       {/* Masked Circle Text */}
//       <div
//         ref={maskRef}
//         onMouseEnter={handleEnter}
//         onMouseLeave={handleLeave}
//         style={{
//           width: "120px",
//           height: "120px",
//           position: "relative",
//           overflow: "hidden",
//           clipPath: "circle(60px at center)",
//         }}
//       >
//         <span
//           ref={word1Ref}
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Half
//         </span>

//         <span
//           ref={word2Ref}
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Magic
//         </span>
//       </div>

//       {/* Static text outside mask */}
//       <span>Studio</span>
//     </div>
//   );
// }

// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// export default function MaskedTextTransition() {
//   const wrapperRef = useRef(null);
//   const text1Ref = useRef(null);
//   const text2Ref = useRef(null);

//   useEffect(() => {
//     // second text hidden initially
//     gsap.set(text2Ref.current, { y: "100%", opacity: 0 });
//   }, []);

//   const onEnter = () => {
//     gsap.to(text1Ref.current, {
//       y: "-100%",
//       opacity: 0,
//       duration: 0.5,
//       ease: "power3.out",
//     });

//     gsap.to(text2Ref.current, {
//       y: "0%",
//       opacity: 1,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   const onLeave = () => {
//     gsap.to(text1Ref.current, {
//       y: "0%",
//       opacity: 1,
//       duration: 0.5,
//       ease: "power3.out",
//     });

//     gsap.to(text2Ref.current, {
//       y: "100%",
//       opacity: 0,
//       duration: 0.5,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       {/* Masked Circle Wrapper */}
//       <div
//         ref={wrapperRef}
//         onMouseEnter={onEnter}
//         onMouseLeave={onLeave}
//         style={{
//           width: 150,
//           height: 150,
//           clipPath: "circle(75px at center)",
//           position: "relative",
//           overflow: "hidden",
//           background: "#f1f1f1",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "2rem",
//           fontWeight: "bold",
//         }}
//       >
//         {/* First Text */}
//         <div
//           ref={text1Ref}
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           Craft
//         </div>

//         {/* Second Text (reveals on hover) */}
//         <div
//           ref={text2Ref}
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           Create
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useRef } from "react";
// import gsap from "gsap";

// export default function SeamlessMaskedSwap() {
//   const textRef = useRef(null);
//   const words = ["Craft", "Design", "Create", "Build"];
//   let index = 0;

//   const swapWord = () => {
//     index = (index + 1) % words.length;

//     // invisible instant swap
//     gsap.set(textRef.current, {
//       opacity: 0,
//       onComplete: () => {
//         textRef.current.innerText = words[index];
//         gsap.set(textRef.current, { opacity: 1 });
//       },
//     });
//   };

//   return (
//     <div
//       onMouseEnter={swapWord}
//       style={{
//         width: 140,
//         height: 140,
//         clipPath: "circle(70px at center)",
//         overflow: "hidden",
//         background: "#f0f0f0",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "2rem",
//         fontWeight: "bold",
//       }}
//     >
//       <span ref={textRef}>Craft</span>
//     </div>
//   );
// }
