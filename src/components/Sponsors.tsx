import mandala from "@/assets/mandala-pattern.png";

const Sponsors = () => {
  const sponsorSlots = Array(6).fill(null);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${mandala})`, backgroundSize: '400px', backgroundRepeat: 'repeat' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with decorative line */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-16 md:w-24 bg-secondary rounded-full" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-wider">
              SPONSORS
            </h2>
            <div className="h-1 w-12 sm:w-16 md:w-24 bg-secondary rounded-full" />
          </div>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {sponsorSlots.map((_, index) => (
            <div
              key={index}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Ornate Sponsor Frame */}
              <div className="relative bg-secondary aspect-square p-4 sm:p-6 md:p-8 flex items-center justify-center rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Decorative corners */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg" />
                
                {/* Pearl dots on edges */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`top-${i}`}
                    className="absolute top-0 w-2 h-2 rounded-full bg-primary shadow-sm"
                    style={{ left: `${(i + 1) * 14.28}%` }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`bottom-${i}`}
                    className="absolute bottom-0 w-2 h-2 rounded-full bg-primary shadow-sm"
                    style={{ left: `${(i + 1) * 14.28}%` }}
                  />
                ))}

                <div className="text-center">
                  <p className="text-muted-foreground font-body text-xs sm:text-sm italic">
                    Sponsor Logo
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg font-body px-4">
            Interested in sponsoring Odyssey 2026?{" "}
            <a href="#contact" className="text-secondary hover:underline font-semibold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
