import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const Registrations = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto">
          <path 
            fill="hsl(var(--primary))" 
            d="M0,48L48,45.3C96,43,192,37,288,37.3C384,37,480,43,576,48C672,53,768,57,864,56C960,55,1056,49,1152,42.7C1248,37,1344,31,1392,28L1440,25L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Golden scallop border */}
      <div className="hidden sm:flex absolute top-20 left-0 right-0 h-8 justify-center items-center gap-1">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-secondary"
            style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-20 sm:pt-32 pb-8 relative z-10">
        {/* Ornate Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-primary px-6 sm:px-8 md:px-12 py-3 sm:py-4 relative">
            <div className="absolute -left-2 -top-2 w-6 h-6 border-t-4 border-l-4 border-secondary" />
            <div className="absolute -right-2 -top-2 w-6 h-6 border-t-4 border-r-4 border-secondary" />
            <div className="absolute -left-2 -bottom-2 w-6 h-6 border-b-4 border-l-4 border-secondary" />
            <div className="absolute -right-2 -bottom-2 w-6 h-6 border-b-4 border-r-4 border-secondary" />
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-wider">
              REGISTRATIONS
            </h2>
          </div>
        </div>

        {/* Registration Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-6 sm:p-8 rounded-lg border-4 border-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 text-center">
              Individual Registration
            </h3>
            <p className="text-muted-foreground text-center mb-4 sm:mb-6 font-body text-sm sm:text-base">
              Register as an individual participant
            </p>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display text-base sm:text-lg py-5 sm:py-6">
              <UserPlus className="mr-2" />
              Register Now
            </Button>
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-lg border-4 border-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 text-center">
              Team Registration
            </h3>
            <p className="text-muted-foreground text-center mb-4 sm:mb-6 font-body text-sm sm:text-base">
              Register your team for group events
            </p>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display text-base sm:text-lg py-5 sm:py-6">
              <UserPlus className="mr-2" />
              Register Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registrations;
