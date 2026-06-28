// "use client";

// import Link from "next/link";
// import { useRef, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   useSpring,
//   type Variants,
// } from "framer-motion";


// export const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.08 },
//   },
// };

// export const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
//   show: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// // ─── Decorative SVG elements ──────────────────────────────────────────────────

// function CardRings({ active }: { active: boolean }) {
//   return (
//     <svg
//       className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 transition-opacity duration-500"
//       style={{ opacity: active ? 0.1 : 0.04 }}
//       viewBox="0 0 180 180"
//       fill="none"
//       aria-hidden="true"
//     >
//       <circle cx="150" cy="150" r="120" stroke="#20385c" strokeWidth="0.7" />
//       <circle cx="150" cy="150" r="85"  stroke="#bc8737" strokeWidth="0.7" />
//       <circle cx="150" cy="150" r="52"  stroke="#20385c" strokeWidth="0.7" />
//       <circle cx="150" cy="150" r="26"  stroke="#bc8737" strokeWidth="0.7" />
//     </svg>
//   );
// }

// function TopDash({ active }: { active: boolean }) {
//   return (
//     <svg
//       className="pointer-events-none absolute left-6 top-6 h-8 w-14 transition-opacity duration-500"
//       style={{ opacity: active ? 0.2 : 0.08 }}
//       viewBox="0 0 56 32"
//       fill="none"
//       aria-hidden="true"
//     >
//       <line x1="0" y1="4"  x2="56" y2="4"  stroke="#bc8737" strokeWidth="1" strokeLinecap="round" />
//       <line x1="0" y1="16" x2="36" y2="16" stroke="#20385c" strokeWidth="1" strokeLinecap="round" />
//       <line x1="0" y1="28" x2="20" y2="28" stroke="#bc8737" strokeWidth="1" strokeLinecap="round" />
//     </svg>
//   );
// }

// // ─── Service Card ─────────────────────────────────────────────────────────────

// const ServiceCard = ({ id, icon: Icon, title, description }: any ) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   // 3-D tilt
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const rotX = useTransform(my, [-60, 60], [4, -4]);
//   const rotY = useTransform(mx, [-60, 60], [-4, 4]);
//   const springX = useSpring(rotX, { stiffness: 200, damping: 24 });
//   const springY = useSpring(rotY, { stiffness: 200, damping: 24 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const r = cardRef.current?.getBoundingClientRect();
//     if (!r) return;
//     mx.set(e.clientX - r.left - r.width / 2);
//     my.set(e.clientY - r.top - r.height / 2);
//   };
//   const handleMouseLeave = () => {
//     mx.set(0);
//     my.set(0);
//     setIsHovered(false);
//   };

//   return (
//     <motion.div variants={cardVariants} style={{ perspective: "1100px" }}>
//       <motion.div
//         ref={cardRef}
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           rotateX: springX,
//           rotateY: springY,
//           transformStyle: "preserve-3d",
//         }}
//         className="group relative h-full cursor-default"
//       >
//         {/* ── Card Shell ── */}
//         <article
//           className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border transition-all duration-500"
//           style={{
//             background: isHovered
//               ? "linear-gradient(158deg, #ffffff 0%, #f2f6fb 55%, #eaf0f8 100%)"
//               : "linear-gradient(158deg, #ffffff 0%, #f8fafd 100%)",
//             borderColor: isHovered
//               ? "rgba(32,56,92,0.22)"
//               : "rgba(32,56,92,0.08)",
//             boxShadow: isHovered
//               ? "0 28px 60px rgba(32,56,92,0.13), 0 6px 18px rgba(32,56,92,0.07), 0 0 0 1px rgba(32,56,92,0.07)"
//               : "0 2px 16px rgba(32,56,92,0.06), 0 1px 4px rgba(32,56,92,0.04)",
//           }}
//         >
//           {/* ── Top accent bar ── */}
//           <div
//             className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500"
//             style={{
//               background:
//                 "linear-gradient(90deg, transparent, rgba(32,56,92,0.45), rgba(188,135,55,0.4), transparent)",
//               opacity: isHovered ? 1 : 0.22,
//             }}
//           />

//           {/* ── Primary navy fill on hover (slides up from bottom) ── */}
//           <motion.div
//             className="pointer-events-none absolute inset-0 rounded-[1.6rem]"
//             style={{
//               background:
//                 "linear-gradient(160deg, #20385c 0%, #1a2e4a 60%, #162544 100%)",
//             }}
//             initial={{ opacity: 0, y: "100%" }}
//             animate={
//               isHovered
//                 ? { opacity: 1, y: "0%" }
//                 : { opacity: 0, y: "100%" }
//             }
//             transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
//           />

//           {/* ── Gold glow – top center (active on hover) ── */}
//           <div
//             className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full transition-all duration-700"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(188,135,55,0.2) 0%, transparent 70%)",
//               opacity: isHovered ? 1 : 0,
//               filter: "blur(28px)",
//             }}
//           />

//           {/* ── Blue glow – bottom right ── */}
//           <div
//             className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full transition-all duration-700"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(188,135,55,0.15) 0%, transparent 70%)",
//               opacity: isHovered ? 1 : 0,
//               filter: "blur(20px)",
//             }}
//           />

//           <CardRings active={isHovered} />
//           <TopDash active={isHovered} />

//           {/* ── Inner Content ── */}
//           <div className="relative z-10 flex flex-col p-7 pb-8 md:p-8">

//             {/* ── Icon Box ── */}
//             <div className="mb-7">
//               <div className="relative inline-flex">
//                 {/* Spinning ring on hover */}
//                 <motion.div
//                   className="absolute -inset-[3px] rounded-2xl"
//                   style={{
//                     background:
//                       "conic-gradient(from 0deg, rgba(188,135,55,0.8), transparent 35%, rgba(255,255,255,0.4) 55%, transparent 75%, rgba(188,135,55,0.8))",
//                     borderRadius: "1.1rem",
//                     opacity: isHovered ? 1 : 0,
//                   }}
//                   animate={{ rotate: isHovered ? 360 : 0 }}
//                   transition={{
//                     duration: 3.5,
//                     repeat: isHovered ? Infinity : 0,
//                     ease: "linear",
//                   }}
//                 />

//                 {/* Icon container */}
//                 <motion.div
//                   className="relative flex h-14 w-14 items-center justify-center rounded-[1rem] border transition-all duration-400"
//                   style={{
//                     background: isHovered
//                       ? "rgba(255,255,255,0.14)"
//                       : "linear-gradient(135deg, rgba(32,56,92,0.07) 0%, rgba(32,56,92,0.03) 100%)",
//                     borderColor: isHovered
//                       ? "rgba(255,255,255,0.25)"
//                       : "rgba(32,56,92,0.1)",
//                     backdropFilter: isHovered ? "blur(8px)" : "none",
//                   }}
//                   animate={
//                     isHovered ? { scale: 1.06, y: -3 } : { scale: 1, y: 0 }
//                   }
//                   transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <Icon
//                     className="text-2xl transition-colors duration-400"
//                     style={{
//                       color: isHovered ? "#bc8737" : "#20385c",
//                     }}
//                   />
//                 </motion.div>
//               </div>
//             </div>

//             {/* ── Title ── */}
//             <h3
//               className="mb-1.5 text-[1.08rem] font-bold leading-snug tracking-tight transition-colors duration-400"
//               style={{
//                 fontFamily: "'Georgia', 'Times New Roman', serif",
//                 color: isHovered ? "#ffffff" : "#1e2d42",
//                 letterSpacing: "-0.018em",
//               }}
//             >
//               {title}
//             </h3>

//             {/* ── Animated accent bar ── */}
//             <div className="mb-4 h-px w-10 overflow-hidden rounded-full">
//               <motion.div
//                 className="h-full w-full rounded-full"
//                 style={{
//                   background: isHovered
//                     ? "linear-gradient(90deg, #bc8737, rgba(255,255,255,0.6))"
//                     : "linear-gradient(90deg, #20385c, #bc8737)",
//                   transformOrigin: "left",
//                 }}
//                 animate={isHovered ? { scaleX: 1.5, opacity: 1 } : { scaleX: 1, opacity: 0.45 }}
//                 transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//               />
//             </div>

//             {/* ── Description ── */}
//             <p
//               className="mb-8 text-[0.84rem] leading-relaxed transition-colors duration-400"
//               style={{
//                 color: isHovered
//                   ? "rgba(255,255,255,0.72)"
//                   : "rgb(32,56,92)",
//               }}
//             >
//               {description}
//             </p>

//             {/* ── Divider ── */}
//             <div
//               className="mb-5 mt-auto h-px w-full transition-all duration-500"
//               style={{
//                 background: isHovered
//                   ? "linear-gradient(90deg, transparent, rgba(188,135,55,0.45), transparent)"
//                   : "linear-gradient(90deg, transparent, rgba(32,56,92,0.08), transparent)",
//               }}
//             />

//             {/* ── CTA ── */}
//             <Link
//              href={`/services/${id}`}
//               className="group/cta inline-flex items-center gap-2.5 text-[0.76rem] font-bold uppercase tracking-[0.12em] transition-colors duration-400"
//               style={{
//                 color: isHovered ? "#bc8737" : "rgba(32,56,92)",
//               }}
//               tabIndex={0}
//             >
//               <span>Learn More</span>

//               {/* Arrow pill */}
//               <span
//                 className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border transition-all duration-400"
//                 style={{
//                   borderColor: isHovered
//                     ? "rgba(188,135,55,0.55)"
//                     : "rgba(32,56,92,0.14)",
//                   background: isHovered
//                     ? "rgba(188,135,55,0.12)"
//                     : "transparent",
//                 }}
//               >
//                 <motion.svg
//                   viewBox="0 0 10 10"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="h-2.5 w-2.5"
//                   animate={isHovered ? { x: [0, 3, 0] } : { x: 0 }}
//                   transition={{ duration: 0.42, ease: "easeInOut" }}
//                 >
//                   <path d="M2 5h6M5 2l3 3-3 3" />
//                 </motion.svg>
//               </span>
//             </Link>
//           </div>
//         </article>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ServiceCard;
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

type ServiceCardProps = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  tag?: string | null;
  logo?: string | null;
  abbr?: string | null;
  index?: number;
};

const ServiceCard = ({
  id,
  icon: Icon,
  title,
  description,
  tag,
  logo,
  abbr,
  index = 0,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showLogo = logo && !imgError;
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div variants={cardVariants} className="h-full">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? { y: -9 } : { y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <article
          className="relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-white"
          style={{
            borderColor: isHovered
              ? "rgba(32,56,92,0.14)"
              : "rgba(32,56,92,0.09)",
            boxShadow: isHovered
              ? "0 36px 64px rgba(32,56,92,0.16), 0 8px 24px rgba(32,56,92,0.09)"
              : "0 4px 20px rgba(32,56,92,0.07)",
            transition:
              "box-shadow 0.4s ease, border-color 0.4s ease",
          }}
        >
          {/* ════════════════════════════════
              HEADER
          ════════════════════════════════ */}
          <div
            className="relative h-[128px] overflow-hidden"
            style={{
              background:
                "linear-gradient(148deg, #1a2e4a 0%, #20385c 55%, #162444 100%)",
            }}
          >
            {/* Orb 1 — gold top-right */}
            <motion.div
              className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(188,135,55,0.28) 0%, transparent 65%)",
              }}
              animate={isHovered ? { scale: 1.4, opacity: 0.9 } : { scale: 1, opacity: 0.6 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            />

            {/* Orb 2 — blue bottom-left */}
            <motion.div
              className="pointer-events-none absolute -bottom-11 -left-6 h-32 w-32 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(40,80,170,0.3) 0%, transparent 65%)",
              }}
              animate={isHovered ? { scale: 1.55 } : { scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            />

            {/* Orb 3 — gold accent, fades in */}
            <motion.div
              className="pointer-events-none absolute bottom-5 right-14 h-16 w-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(188,135,55,0.18) 0%, transparent 65%)",
              }}
              animate={isHovered ? { opacity: 1, scale: 1.4 } : { opacity: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Grid lines */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.45 }}
            />

            {/* Top gold bar */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #bc8737, rgba(255,220,140,0.55), #bc8737, transparent)",
              }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.32 }}
            />

            {/* Shine sweep */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
              }}
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Card number watermark */}
            <motion.span
              className="pointer-events-none absolute -bottom-2.5 right-3 select-none font-serif text-[5.8rem] font-black leading-none"
              style={{ color: "rgba(255,255,255,0.04)" }}
              animate={
                isHovered
                  ? { color: "rgba(188,135,55,0.07)", scale: 1.07, y: -4 }
                  : { color: "rgba(255,255,255,0.04)", scale: 1, y: 0 }
              }
              transition={{ duration: 0.4 }}
            >
              {cardNumber}
            </motion.span>

            {/* Header inner row */}
            <div className="relative z-10 flex items-start justify-between p-5">
              {/* Logo / Icon box */}
              <div className="relative h-[46px] w-[46px] flex-shrink-0">
                {/* Spinning conic ring */}
                <motion.div
                  className="absolute -inset-[3px] rounded-[15px]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #bc8737, rgba(255,255,255,0.08), #bc8737, rgba(255,255,255,0.04), #bc8737)",
                  }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    rotate: isHovered ? 360 : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.32 },
                    rotate: {
                      duration: 3,
                      repeat: isHovered ? Infinity : 0,
                      ease: "linear",
                    },
                  }}
                />

                {/* Box */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center rounded-[13px] border"
                  animate={{
                    background: isHovered
                      ? "rgba(255,255,255,0.17)"
                      : "rgba(255,255,255,0.1)",
                    borderColor: isHovered
                      ? "rgba(188,135,55,0.55)"
                      : "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.32 }}
                >
                  {showLogo ? (
                    // <img
                    //   src={logo}
                    //   alt={`${title} logo`}
                    //   onError={() => setImgError(true)}
                    //   className="h-[25px] w-[25px] object-contain transition-all duration-300"
                    //   style={{
                    //     filter: isHovered
                    //       ? "brightness(0) saturate(100%) invert(68%) sepia(45%) saturate(700%) hue-rotate(2deg)"
                    //       : "brightness(0) invert(1)",
                    //     opacity: isHovered ? 1 : 0.82,
                    //   }}
                    // />
                    <img
  src={logo}
  alt={`${title} logo`}
  className="w-full h-full object-cover rounded-[15px] transition-all duration-300 p-0.5"
/>
                  ) : (
                    <Icon
                      className="text-[1.1rem] transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? "#bc8737"
                          : "rgba(255,255,255,0.82)",
                      }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Badge */}
              {tag && (
                <motion.div
                  className="inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.1em]"
                  animate={{
                    background: isHovered
                      ? "rgba(188,135,55,0.22)"
                      : "rgba(188,135,55,0.14)",
                    borderColor: isHovered
                      ? "rgba(188,135,55,0.5)"
                      : "rgba(188,135,55,0.28)",
                    color: isHovered
                      ? "#e8a83a"
                      : "rgba(188,135,55,0.88)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="h-1 w-1 rounded-full"
                    style={{ background: "currentColor" }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {tag}
                </motion.div>
              )}
            </div>
          </div>

          {/* ════════════════════════════════
              BODY
          ════════════════════════════════ */}
          <div className="relative flex flex-1 flex-col overflow-hidden p-5">
            {/* Dot grid texture */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(32,56,92,0.07) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.4 }}
            />

            {/* Gold corner glow */}
            <motion.div
              className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(188,135,55,0.08) 0%, transparent 70%)",
              }}
              animate={isHovered ? { opacity: 1, scale: 1.4 } : { opacity: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-1 flex-col">
              {/* Title */}
              <motion.h3
                className="mb-2 font-serif text-[1.05rem] font-bold leading-snug"
                style={{ letterSpacing: "-0.016em" }}
                animate={{ color: isHovered ? "#20385c" : "#1b2a3d" }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>

              {/* Progress bar */}
              <div
                className="mb-3 h-[2px] overflow-hidden rounded-full"
                style={{ background: "rgba(32,56,92,0.07)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #20385c, #bc8737)",
                  }}
                  animate={{ width: isHovered ? "100%" : "22%" }}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Description */}
              <motion.p
                className="mb-4 flex-1 text-[0.79rem] text-gray leading-relaxed font-semibold"
                animate={{
                  color: isHovered
                    ? "rgba(32,56,92,0.74)"
                    : "rgba(32,56,92,0.52)",
                }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {/* CTA */}
                <Link
                  href={`/services/${id}`}
                  className="inline-flex items-center text-[0.67rem] font-bold uppercase tracking-[0.11em] transition-all duration-300"
                  style={{
                    color: isHovered ? "#bc8737" : "#20385c",
                    gap: isHovered ? "0.68rem" : "0.45rem",
                  }}
                >
                  <span>Learn More</span>
                  <motion.span
                    className="flex h-6 w-6 items-center justify-center rounded-full border"
                    animate={{
                      borderColor: isHovered
                        ? "#bc8737"
                        : "rgba(32,56,92,0.14)",
                      background: isHovered
                        ? "rgba(188,135,55,0.1)"
                        : "transparent",
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{ duration: 0.32 }}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-2 w-2"
                    >
                      <path d="M2 5h6M5 2l3 3-3 3" />
                    </svg>
                  </motion.span>
                </Link>

                {/* Stat chip */}
                {abbr && (
                  <motion.div
                    className="flex items-center gap-1.5 rounded-[10px] border px-2.5 py-1.5"
                    animate={{
                      background: isHovered
                        ? "rgba(188,135,55,0.07)"
                        : "rgba(32,56,92,0.05)",
                      borderColor: isHovered
                        ? "rgba(188,135,55,0.22)"
                        : "rgba(32,56,92,0.08)",
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <motion.span
                      className="font-serif text-[0.78rem] font-extrabold leading-none tracking-wide"
                      animate={{
                        color: isHovered
                          ? "#bc8737"
                          : "rgba(32,56,92,0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {abbr}
                    </motion.span>
                    <motion.div
                      className="h-3.5 w-px"
                      animate={{
                        background: isHovered
                          ? "rgba(188,135,55,0.25)"
                          : "rgba(32,56,92,0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="text-[0.55rem] font-bold uppercase tracking-[0.08em]"
                      animate={{
                        color: isHovered
                          ? "rgba(188,135,55,0.55)"
                          : "rgba(32,56,92,0.28)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Standard
                    </motion.span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </article>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;