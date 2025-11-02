import { Music, Palette, Drama, Mic2 } from "lucide-react";

const Events = () => {
  const events = [
    { icon: Music, title: "Music Night", color: "hsl(var(--bunting-pink))" },
    { icon: Drama, title: "Drama Fest", color: "hsl(var(--bunting-blue))" },
    { icon: Palette, title: "Art Exhibition", color: "hsl(var(--bunting-orange))" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Bunting Flags */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <svg className="w-full h-12 sm:h-16" viewBox="0 0 1440 64" preserveAspectRatio="none">
          {[...Array(20)].map((_, i) => {
            const colors = ['var(--bunting-pink)', 'var(--bunting-blue)', 'var(--bunting-orange)', 'var(--bunting-purple)'];
            const color = `hsl(${colors[i % colors.length]})`;
            return (
              <g key={i} className="animate-swing" style={{ animationDelay: `${i * 0.1}s` }}>
                <polygon
                  points={`${i * 72 + 20},0 ${i * 72 + 50},0 ${i * 72 + 35},30`}
                  fill={color}
                  stroke="hsl(var(--gold))"
                  strokeWidth="2"
                />
              </g>
            );
          })}
          <line x1="0" y1="0" x2="1440" y2="0" stroke="hsl(var(--gold))" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16 sm:pt-20">
        {/* Header with decorative line */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-1 w-12 sm:w-16 md:w-24 bg-secondary rounded-full" />
            <Mic2 className="text-secondary w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-wider">
              EVENTS
            </h2>
            <Mic2 className="text-secondary w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            <div className="h-1 w-12 sm:w-16 md:w-24 bg-secondary rounded-full" />
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Ornate Frame */}
              <div className="relative bg-secondary p-6 sm:p-8 rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 rounded-tl-lg" style={{ borderColor: event.color }} />
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 rounded-tr-lg" style={{ borderColor: event.color }} />
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 rounded-bl-lg" style={{ borderColor: event.color }} />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 rounded-br-lg" style={{ borderColor: event.color }} />
                
                {/* Pearl dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white shadow-md"
                    style={{
                      top: i < 4 ? '-4px' : 'auto',
                      bottom: i >= 4 ? '-4px' : 'auto',
                      left: `${(i % 4) * 25 + 12.5}%`,
                    }}
                  />
                ))}

                <div className="aspect-square flex items-center justify-center">
                  <event.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-accent-foreground" />
                </div>
                <h3 className="text-center font-display text-lg sm:text-xl font-semibold text-accent-foreground mt-3 sm:mt-4">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
