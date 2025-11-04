// src/components/About.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ornament from "../assets/image109.png"; // -> ensure this exists
import bottomPattern from "../assets/mask_group.png";

const About = () => {
  const sectionRef = useRef(null);

  /**
   * Parallax control:
   * - useScroll with a target (the section) gives a progress value 0->1 as the section scrolls through viewport.
   * - We map that to different transforms for the pointy top, ornaments, and bottom pattern.
   *
   * Offsets used:
   *  ["start end", "end start"] => progress 0 when section top hits viewport bottom, 1 when section bottom hits viewport top.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Move the pointy top up *faster* so it leaves earlier (stronger parallax).
  const topTranslateY = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0, -30, -140, -260]);

  // Ornaments appear after the top starts moving up: small delay in transform and opacity.
  const ornamentsTranslateY = useTransform(scrollYProgress, [0, 0.15, 0.4, 1], [40, 10, 0, -30]);
  const ornamentsOpacity = useTransform(scrollYProgress, [0, 0.12, 0.3], [0, 0.6, 1]);

  // Bottom wave/ pattern should move slightly slower (gives depth).
  const bottomTranslateY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#6C0F0F] text-amber-200"
      aria-labelledby="about-heading"
    >
      {/* POINTY TOP SHAPE (SVG) — sits above content */}
      <motion.div
        style={{ translateY: topTranslateY }}
        className="absolute left-0 right-0 -top-28 pointer-events-none z-20"
        aria-hidden
      >
        {/* An SVG pointy edge — tweak path to taste. This creates the "pointy" silhouette */}
        <svg viewBox="0 0 1440 220" className="w-full h-auto">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#6C0F0F" />
              <stop offset="1" stopColor="#6C0F0F" />
            </linearGradient>
          </defs>
          <path
            d="M0,160 C160,120 240,120 360,140 C480,160 560,200 720,160 C880,120 960,80 1080,120 C1200,160 1280,160 1440,140 L1440,220 L0,220 Z"
            fill="url(#g)"
          />
        </svg>
      </motion.div>

      {/* ORNAMENTS (left + mirrored right) */}
      <motion.img
        src={ornament}
        alt="ornament left"
        style={{ translateY: ornamentsTranslateY, opacity: ornamentsOpacity }}
        initial={false}
        className="absolute z-30 top-12 left-4 w-20 sm:w-28 md:w-36 lg:w-48 object-contain"
        draggable={false}
      />

      <motion.img
        src={ornament}
        alt="ornament right"
        style={{ translateY: ornamentsTranslateY, opacity: ornamentsOpacity }}
        initial={false}
        className="absolute z-30 top-12 right-4 w-20 sm:w-28 md:w-36 lg:w-48 object-contain"
        draggable={false}
      />

      {/* MAIN CONTENT CARD / MAROON PANEL */}
      <div className="relative z-10 mx-auto px-6 sm:px-8 pt-36 sm:pt-44 pb-32 md:pb-40 max-w-[980px]">
        <div className="text-center mb-6">
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-6xl leading-tight tracking-widest"
            style={{ fontVariant: "small-caps" }}
          >
            ABOUT
          </h2>

          <h3 className="mt-0 font-display text-2xl sm:text-3xl md:text-4xl leading-tight tracking-wide">
            ODYSSEY
          </h3>

          <div className="mx-auto mt-4 w-28 sm:w-48 h-1 rounded-full bg-amber-200/90" />
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-amber-100/90 text-sm sm:text-base md:text-lg leading-relaxed">
            Get ready for an unforgettable celebration of culture, creativity,
            and camaraderie at the Indian Institute of Information Technology,
            Delhi. Ralto + Odyssey is back, and this year promises to be bigger
            and better than ever before! Explore the magic that awaits you and
            join us for a two-day extravaganza of talent, enthusiasm, and pure
            fun.
          </p>
        </div>
      </div>

      {/* BOTTOM PATTERN / WAVE */}
      <motion.div
        style={{ translateY: bottomTranslateY }}
        className="absolute inset-x-0 bottom-0 z-0 pointer-events-none"
        aria-hidden
      >
        {/* This image should align perfectly with the bottom curve in your design */}
        <img
          src={bottomPattern}
          alt="bottom pattern"
          className="w-full h-auto object-cover"
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

export default About;
