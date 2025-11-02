import { MapPin } from "lucide-react";

const Venue = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path 
            fill="hsl(var(--primary))" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-8 sm:pt-12">
        {/* Ornate Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-primary px-6 sm:px-8 md:px-12 py-3 sm:py-4 relative">
            {/* Decorative corners */}
            <div className="absolute -left-2 -top-2 w-6 h-6 border-t-4 border-l-4 border-secondary" />
            <div className="absolute -right-2 -top-2 w-6 h-6 border-t-4 border-r-4 border-secondary" />
            <div className="absolute -left-2 -bottom-2 w-6 h-6 border-b-4 border-l-4 border-secondary" />
            <div className="absolute -right-2 -bottom-2 w-6 h-6 border-b-4 border-r-4 border-secondary" />
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-wider">
              VENUE
            </h2>
          </div>
        </div>

        {/* Venue Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border-4 border-primary relative">
            {/* Decorative dots */}
            <div className="absolute -left-1 top-8 flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
              ))}
            </div>
            <div className="absolute -right-1 top-8 flex flex-col gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 sm:mt-1" />
              <div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-4">
                  Follow us on social media to stay updated!
                </h3>
                <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-body">
                  Stay tuned for all the exciting developments and sneak peeks leading up to the grand event.
                </p>
              </div>
            </div>

            {/* Decorative Frame - Placeholder for venue details */}
            <div className="mt-6 sm:mt-8 bg-primary/5 rounded-lg p-6 sm:p-8 border-2 border-dashed border-primary/30 min-h-[150px] sm:min-h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-center font-body italic text-sm sm:text-base">
                Venue details coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
