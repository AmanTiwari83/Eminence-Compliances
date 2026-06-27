
// import { useState, useEffect, } from "react";
// import { FaArrowRight, FaCompass, FaTruck, FaShieldAlt, FaUndo, FaHeadset, FaCheckCircle } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa6";
// import Link from "next/link";

// // ── Data ──
// const heroImages = [
//   { url: "/images/home/new-bg.png", alt: "Slider Image" },
//   // { url: "/images/home/new-bg2.png", alt: "Slider Image" },
//   { url: "/images/home/new-bg4.png", alt: "Slider Image" },
//   { url: "/images/home/new-bg3.png", alt: "Slider Image" },
//   // { url: "/images/slider/slider1.png", alt: "Slider Image" },
//   // { url: "/images/slider/slider1.png", alt: "Slider Image" },
//   // { url: "images/slider/slider1.png", alt: "Slider Image" },
// ];

// const stats = [
//   { num: "1200+", label: "Projects Delivered" },
//   { num: "98%", label: "Approval Success Rate" },
//   { num: "10+", label: "Years Experience" },
// ];

// const trustBadges = [
//   {
//     icon: FaShieldAlt,
//     label: "100% Compliance Assistance",
//     sub: "Accurate regulatory guidance",
//     color: "bg-blue-50",
//     iconColor: "text-blue-700",
//   },
//   {
//     icon: FaCheckCircle,
//     label: "Govt. Approved Process",
//     sub: "Trusted documentation support",
//     color: "bg-green-50",
//     iconColor: "text-green-700",
//   },
//   {
//     icon: FaBolt,
//     label: "Fast Approval Support",
//     sub: "Quick & hassle-free execution",
//     color: "bg-orange-50",
//     iconColor: "text-orange-600",
//   },
//   {
//     icon: FaHeadset,
//     label: "Dedicated Expert Team",
//     sub: "End-to-end consultation",
//     color: "bg-purple-50",
//     iconColor: "text-purple-700",
//   },
// ];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);

//   // // Auto-slide every 5s
//   // useEffect(() => {
//   //   const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 4000);
//   //   return () => clearInterval(t);
//   // }, []);

//   useEffect(() => {
//     const t = setInterval(() => {
//       setCurrent((p) => (p + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

//         /* Staggered fade-up */
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(22px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .h1 { animation: fadeUp 0.7s ease 0.1s both; }
//         .h2 { animation: fadeUp 0.7s ease 0.22s both; }
//         .h3 { animation: fadeUp 0.7s ease 0.34s both; }
//         .h4 { animation: fadeUp 0.7s ease 0.46s both; }
//         .h5 { animation: fadeUp 0.7s ease 0.58s both; }
//         .h6 { animation: fadeUp 0.7s ease 0.70s both; }

//         /* Animated gradient heading */
//         @keyframes gradShift {
//           0%,100% { background-position: 0% 50%; }
//           50%      { background-position: 100% 50%; }
//         }
//         .grad-text {
//         background: linear-gradient(
 
//   #fff,
//   #fefefe

// );
//   background-size: 300%;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   animation: gradShift 10s ease-in-out infinite;
//         }

//         /* Scroll dot */
//         @keyframes scrollDot {
//           0%,100% { transform: translateY(0); opacity: 1; }
//           60%      { transform: translateY(12px); opacity: 0; }
//         }
//         .scroll-dot { animation: scrollDot 1.8s ease infinite; }

//         /* Slide counter line */
//         @keyframes lineGrow {
//           from { transform: scaleX(0); }
//           to   { transform: scaleX(1); }
//         }
//         .counter-line {
//           transform-origin: left;
//           animation: lineGrow 5s linear infinite;
//         }

//         /* Ping dot */
//         @keyframes ping {
//           75%,100% { transform: scale(2); opacity: 0; }
//         }
//         .ping { animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }

//         /* Primary button shimmer */
//         .primary-btn {
//   position: relative;
//   overflow: hidden;
//   isolation: isolate;
// }

// .primary-btn::after {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(135deg, #20385c, #0f1b37);
//   opacity: 0;
//   transition: opacity 0.3s;
//   z-index: -1;
// }

// .primary-btn:hover::after {
//   opacity: 1;
// }

// .primary-btn:hover {
//   transform: translateY(-1px);
// }

// .primary-btn > * {
//   position: relative;
//   z-index: 2;
// }
//       `}</style>

//       <section className="relative h-[88vh] md:h-[88vh] overflow-hidden bg-black">

//         {/* ── Background images with crossfade ── */}
//         {/* {heroImages.map((img, i) => (
//           <div
//             key={i}
//             className="absolute inset-0 transition-opacity duration-1000"
//             style={{ opacity: current === i ? 1 : 0 }}
//           >
//             <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
//           </div>
//         ))} */}

//         {heroImages.map((img, i) => (
//   <div
//     key={i}
//     className="absolute inset-0"
//     style={{
//       opacity: current === i ? 1 : 0,
//       transition: "opacity 2.5s ease-in-out",  // slower crossfade = no blank gap
//       zIndex: current === i ? 1 : 0,            // active image on top
//     }}
//   >
//     <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
//   </div>
// ))}

//         {/* Overlays */}
//         {/* Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-black/10" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

//         {/* ── Content ── */}
//         <div className="relative z-10 h-full flex items-center">
//           <div className="w-full mx-auto  sm:px-10  px-4 md:px-16 lg:px-28">
//             <div className="max-w-3xl">

//               {/* Eyebrow badge */}
//               <div className="h1 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
//                 <span className="relative flex h-2 w-2">
//                   <span className="ping absolute inline-flex h-full w-full rounded-full bg-primary-800 opacity-75" />
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-700" />
//                 </span>
//                 <span
//                   className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white cursor-pointer"
//                   // style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 //   onClick={() => navigate("/products")}
//                 >
//                   Trusted Compliance Partner 2026
//                 </span>
//               </div>

//               {/* Heading */}
//               <h1
//                 className="h2 font-semibold text-white leading-tight mb-1  "
//                 style={{
//                   // fontFamily: "'Poppins', sans-serif",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "clamp(2rem, 5vw, 3.8rem)",
//                 }}
//               >
//                 Simplifying Your
//               </h1>

//               <h1
//                 className="h3 font-semibold grad-text leading-tight mb-5 "
//                 style={{
//                   // fontFamily: "'Poppins', sans-serif",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "clamp(2.1rem, 5vw, 3.9rem)",
//                 }}
//               >
//                 Compliance Journey.
//               </h1>

//               {/* Description */}
//               <p
//                 className="h4 text-gray-300 text-[0.5rem] md:text-base leading-relaxed max-w-md mb-8 font-regular"
//               // style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
//               >
//                 Get expert assistance for BIS, WPC, BEE, EPR, TEC, LMPC and other mandatory certifications with accurate documentation and faster approvals.
//               </p>

//               {/* CTA Buttons */}
//               <div className="h5 flex flex-wrap gap-3 mb-10">
//                 <Link
//                   href="/contact"
//                   className="primary-btn flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200"
//                   style={{
//                     fontFamily: "'DM Sans', sans-serif",
//                     background: "linear-gradient(135deg, #20385c, #0f1b37)",
//                     letterSpacing: "0.04em",
//                   }}
//                 >
//                   <span className="family-semibold">Get Free Consultation</span>
//                   <FaArrowRight size={11} />
//                 </Link>

//                 <Link
//                   href="/services"
//                   className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/25 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 backdrop-blur-sm"
//                   style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}
//                 >
//                   <FaCompass size={12} />
//                   Explore Services
//                 </Link>
//               </div>

//               {/* Stats */}
//               <div className="h6 flex gap-8 pt-5 border-t border-white/15">
//                 {stats.map((s) => (
//                   <div key={s.label}>
//                     <p
//                       className="text-xl md:text-2xl  text-white leading-none mb-1 family-semibold"
//                     >
//                       {s.num}
//                     </p>
//                     <p
//                       className="text-[10px] text-gray-400 tracking-[0.12em] uppercase family-semibold"
//                     >
//                       {s.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Slide counter — bottom right ── */}


//         {/* ── Dot indicators — bottom center ── */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
//           {heroImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className="transition-all duration-300 rounded-full"
//               style={{
//                 width: current === i ? "24px" : "6px",
//                 height: "6px",
//                 background: current === i
//                   ? "linear-gradient(90deg, #20385c, #0f1b37)"
//                   : "rgba(255,255,255,0.3)",
//               }}
//             />
//           ))}
//         </div>


//       </section>


//       <div className="bg-white border-y border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
//             {trustBadges.map((badge, idx) => (
//               <div
//                 key={idx}
//                 className="group flex flex-col items-center text-center gap-3 px-6 py-8 cursor-pointer hover:bg-primary-50/30 transition-all duration-300 relative"
//               >
//                 {/* Top accent on hover */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-gradient-to-r from-primary-700 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Icon circle — theme colored by default */}
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
//                   style={{
//                     background: "linear-gradient(135deg, #f2f5fa, #fdf7ef)",
//                     border: "1px solid #dbe4f0",
//                   }}
//                 >
//                   {/* SVG gradient for icon color */}
//                   <svg width="0" height="0" className="absolute">
//                     <defs>
//                       <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor="#2b3f6c" />
//                         <stop offset="100%" stopColor="#0f1b37" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                   <badge.icon
//                     size={19}
//                     style={{ fill: "url(#iconGrad)", color: "#20385c" }}
//                     className="group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Text */}
//                 <div>
//                   <h4
//                     className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-700 group-hover:text-primary-800 transition-colors duration-200"
//                     style={{ fontFamily: "'DM Sans', sans-serif" }}
//                   >
//                     {badge.label}
//                   </h4>
//                   <p
//                     className="text-[10px] text-gray-400 mt-1 leading-relaxed"
//                     style={{ fontFamily: "'DM Sans', sans-serif" }}
//                   >
//                     {badge.sub}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;





"use client";

import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaCompass, FaShieldAlt, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import Link from "next/link";

const heroImages = [
  { url: "/images/home/new-bg18.png", alt: "Slider Image" },
  { url: "/images/home/new-bg17.png", alt: "Slider Image" },
  { url: "/images/home/new-bg2.png", alt: "Slider Image" },
];

const stats = [
  { num: "1200+", label: "Projects Delivered" },
  { num: "98%", label: "Approval Success Rate" },
  { num: "10+", label: "Years Experience" },
];

const trustBadges = [
  {
    icon: FaShieldAlt,
    label: "100% Compliance Assistance",
    sub: "Accurate regulatory guidance",
  },
  {
    icon: FaCheckCircle,
    label: "Govt. Approved Process",
    sub: "Trusted documentation support",
  },
  {
    icon: FaBolt,
    label: "Fast Approval Support",
    sub: "Quick & hassle-free execution",
  },
  {
    icon: FaHeadset,
    label: "Dedicated Expert Team",
    sub: "End-to-end consultation",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SLIDE_DURATION = 4000; // ms between slides
  const FADE_DURATION = 1200;  // ms for crossfade — adjust here

  useEffect(() => {
    const t = setInterval(() => {
      goTo((c: number) => (c + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, []);

  const goTo = (getNext: (c: number) => number) => {
    if (transitioning) return;
    setCurrent((c) => {
      const next = getNext(c);
      setPrev(c);
      setTransitioning(true);
      // Clear previous timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      // After fade completes, clean up prev
      timeoutRef.current = setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, FADE_DURATION);
      return next;
    });
  };

  const goToIndex = (i: number) => {
    if (i === current || transitioning) return;
    goTo(() => i);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h1 { animation: fadeUp 0.7s ease 0.1s both; }
        .h2 { animation: fadeUp 0.7s ease 0.22s both; }
        .h3 { animation: fadeUp 0.7s ease 0.34s both; }
        .h4 { animation: fadeUp 0.7s ease 0.46s both; }
        .h5 { animation: fadeUp 0.7s ease 0.58s both; }
        .h6 { animation: fadeUp 0.7s ease 0.70s both; }

        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .grad-text {
          background: linear-gradient(#fff, #fefefe);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 10s ease-in-out infinite;
        }

        @keyframes ping {
          75%,100% { transform: scale(2); opacity: 0; }
        }
        .ping { animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }

        .primary-btn {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .primary-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #20385c, #0f1b37);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }
        .primary-btn:hover::after { opacity: 1; }
        .primary-btn:hover { transform: translateY(-1px); }
        .primary-btn > * { position: relative; z-index: 2; }

        /* Slide layers */
        .slide-layer {
          position: absolute;
          inset: 0;
        }
        /* Previous slide — stays fully visible, fades out */
        .slide-prev {
          z-index: 1;
          opacity: 1;
          animation: slideFadeOut ${1200}ms ease-in-out forwards;
        }
        /* Current slide — starts invisible, fades in on top */
        .slide-current {
          z-index: 2;
          opacity: 0;
          animation: slideFadeIn ${1200}ms ease-in-out forwards;
        }
        /* Idle slide — fully visible, no animation */
        .slide-idle {
          z-index: 0;
          opacity: 1;
        }

        @keyframes slideFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
      `}</style>

      <section className="relative h-[88vh] overflow-hidden bg-[#0d1f3c]">

        {/* ── Background layers ── */}
        {heroImages.map((img, i) => {
          let className = "slide-layer ";
          if (i === current) className += "slide-current";
          else if (i === prev) className += "slide-prev";
          else className += "slide-idle";

          return (
            <div key={i} className={className}>
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

        {/* Overlays — sit above all slides */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/25 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* ── Content ── */}
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full mx-auto px-4 sm:px-10 md:px-16 lg:px-28">
            <div className="max-w-3xl">

              {/* Eyebrow badge */}
              <div className="h1 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="ping absolute inline-flex h-full w-full rounded-full bg-primary-800 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-700" />
                </span>
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white">
                  Trusted Compliance Partner 2026
                </span>
              </div>

              {/* Heading */}
              <h1
                className="h2 font-semibold text-white leading-tight mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
              >
                Simplifying Your
              </h1>
              <h1
                className="h3 font-semibold grad-text leading-tight mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.1rem, 5vw, 3.9rem)" }}
              >
                Compliance Journey.
              </h1>

              {/* Description */}
              <p className="h4 text-gray-300 text-sm md:text-base leading-relaxed max-w-md mb-8">
                Get expert assistance for BIS, WPC, BEE, EPR, TEC, LMPC and other mandatory certifications with accurate documentation and faster approvals.
              </p>

              {/* CTA Buttons */}
              <div className="h5 flex flex-wrap gap-3 mb-10">
                <Link
                  href="/contact"
                  className="primary-btn flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #20385c, #0f1b37)", letterSpacing: "0.04em" }}
                >
                  <span className="family-semibold">Get Free Consultation</span>
                  <FaArrowRight size={11} />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white/80 border border-white/25 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 backdrop-blur-sm"
                >
                  <FaCompass size={12} />
                  Explore Services
                </Link>
              </div>

              {/* Stats */}
              {/* <div className="h6 flex gap-8 pt-5 border-t border-white/15"> */}
              <div className="h6 flex gap-8 pt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl md:text-2xl text-white leading-none mb-1 family-semibold">{s.num}</p>
                    <p className="text-[10px] text-gray-400 tracking-[0.12em] uppercase family-semibold">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === i ? "24px" : "6px",
                height: "6px",
                background: current === i
                  ? "linear-gradient(90deg, #20385c, #0f1b37)"
                  : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── Trust badges ── */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center gap-3 px-6 py-8 cursor-pointer hover:bg-primary-50/30 transition-all duration-300 relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-gradient-to-r from-primary-700 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #f2f5fa, #fdf7ef)", border: "1px solid #dbe4f0" }}
                >
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2b3f6c" />
                        <stop offset="100%" stopColor="#0f1b37" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <badge.icon
                    size={19}
                    style={{ fill: "url(#iconGrad)", color: "#20385c" }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-700 group-hover:text-primary-800 transition-colors duration-200">
                    {badge.label}
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;




