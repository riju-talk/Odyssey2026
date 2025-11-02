// About.jsx
import React from "react";

/**
 * Replace these image paths with your final assets:
 *  - /assets/header-ornament.png  => decorative top band silhouette
 *  - /assets/logo-mark.png        => small logo near the top title (optional)
 *  - /assets/central-emblem.png   => circular emblem under the title
 *  - /assets/bottom-floral.png    => floral pattern used at the bottom
 *
 * This component uses Tailwind classes. If you have custom colors,
 * replace the inline style color values or map them to your theme variables.
 */

const About = () => {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Top decorative band (placeholder image) */}
      <div className="absolute inset-x-0 -top-2 pointer-events-none">
        <img
          src="/assets/header-ornament.png"
          alt="Top decorative ornament (placeholder)"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main maroon panel */}
      <div
        className="relative z-10 mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 lg:pb-36 max-w-[960px]"
      >
        {/* Title block */}
        <div className="text-center mb-8">
          {/* optional small logo above the title */}
          <img
            src="/assets/logo-mark.png"
            alt="Odyssey logo mark (placeholder)"
            className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 md:mb-4 object-contain"
          />

          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide sm:tracking-widest text-amber-200"
            style={{ fontVariant: "small-caps" }}
          >
            ABOUT
          </h2>

          <h3 className="mt-0 font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide sm:tracking-widest text-amber-200">
            Odyssey
          </h3>

          {/* decorative divider */}
          <div className="mx-auto mt-4 md:mt-6 w-32 sm:w-48 h-1 rounded-full bg-amber-200/90" />
        </div>

        {/* Description copy panel */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-amber-100/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-body">
            Get ready for an unforgettable celebration of culture, creativity,
            and camaraderie at the Indian Institute of Information Technology,
            Delhi. Ralto + Odyssey is back, and this year promises to be bigger
            and better than ever before! Explore the music that speaks to your
            soul. Attend fun-filled events and meet peers leading up to the
            grand event.
          </p>
        </div>
      </div>

      {/* Bottom maroon-to-cream wave + floral pattern */}
      <div className="absolute inset-x-0 bottom-0">
        {/* Floral pattern overlay (placeholder) */}
        <div className="relative -mt-6">
          <img
            src="src/assets/mask_group.png"
            alt="Bottom floral decorative pattern (placeholder)"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Background maroon color layer (full bleed) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "#6C0F0F" /* deep maroon — change to theme var */ }}
      />
    </section>
  );
};

export default About;
