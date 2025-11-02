import logo from "@/assets/odyssey-logo.png";
import deityPattern from "@/assets/deity-pattern.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ 
          backgroundImage: `url(${deityPattern})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Decorative ornamental border */}
      <div className="absolute inset-0 border-8 border-gold/30 pointer-events-none" />
      
      {/* Top ornamental wave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-maroon-deep/20 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo with decorative frame - appears first with roll animation */}
        <div className="flex justify-center mb-12">
          <div className="relative animate-rollIn">
            {/* Decorative corner elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-gold opacity-0" />
            <div className="absolute -top-8 -right-8 w-16 h-16 border-t-4 border-r-4 border-gold opacity-0" />
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-4 border-l-4 border-gold opacity-0" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-gold opacity-0" />
            
            <img 
              src={logo} 
              alt="Odyssey Festival Logo" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Band Baja prefix - appears after logo */}
        <div className="mb-4 opacity-0 animate-slideUpFade" style={{ animationDelay: '1.5s' }}>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-gold font-semibold tracking-wider">
            Band Baja
          </p>
        </div>
        
        {/* Odyssey Title - appears after Band Baja */}
        <div className="mb-8 opacity-0 animate-slideUpFade" style={{ animationDelay: '1.8s' }}>
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold text-primary tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Odyssey
          </h1>
        </div>
        
        {/* Tagline - appears last */}
        <div className="opacity-0 animate-slideUpFade" style={{ animationDelay: '2.1s' }}>
          <p className="font-body text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto">
            A Celebration of Culture, Music & Art
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
