import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ornament from "../assets/image109.png";
import bottomPattern from "../assets/mask_group.png";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ornamentsTranslateY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 1],
    [40, 10, 0, -30]
  );

  const ornamentsOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.3],
    [0, 0.6, 1]
  );

  const sectionBg = {
    backgroundImage: `url(${bottomPattern})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 28%",
    backgroundSize: "120% auto",
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={sectionBg}
      className="relative overflow-hidden bg-[#6C0F0F] text-amber-200 min-h-[520px]"
      aria-labelledby="about-heading"
    >
      {/* ORNAMENTS */}
      <motion.img
        src={ornament}
        alt=""
        draggable={false}
        style={{ y: ornamentsTranslateY, opacity: ornamentsOpacity }}
        className="
          absolute top-8 left-8 
          z-30 w-24 sm:w-32 md:w-40 lg:w-48 
          object-contain pointer-events-none
        "
      />

      <motion.img
        src={ornament}
        alt=""
        draggable={false}
        style={{ y: ornamentsTranslateY, opacity: ornamentsOpacity }}
        className="
          absolute top-8 right-8 
          z-30 w-24 sm:w-32 md:w-40 lg:w-48 
          object-contain pointer-events-none
          scale-x-[-1]
        "
      />

      {/* BORDER LIGHT ANIMATION */}
      <div className="absolute inset-0 z-10 pointer-events-none borderGlow"></div>

      {/* CONTENT */}
      <div className="relative z-20 w-full">
        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm rounded-lg px-8 py-12 text-center border-2 border-amber-200 relative">
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-6xl tracking-widest leading-tight"
            style={{ fontVariant: "small-caps" }}
          >
            ABOUT
          </h2>

          <h3 className="font-display mt-0 text-2xl sm:text-3xl md:text-4xl tracking-wide">
            ODYSSEY
          </h3>

          <div className="mx-auto mt-4 w-28 sm:w-48 h-1 bg-amber-200/90 rounded-full" />

          <p className="mt-4 text-amber-100/95 text-sm sm:text-base md:text-lg leading-relaxed">
            Get ready for an unforgettable celebration of culture, creativity,
            and camaraderie at the Indian Institute of Information Technology,
            Delhi. Ralto + Odyssey is back, and this year promises to be bigger
            and better than ever before! Explore the magic that awaits you and
            join us for a two-day extravaganza of talent, enthusiasm, and pure
            fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
