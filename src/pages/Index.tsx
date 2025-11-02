import Hero from "@/components/Hero";
import About from "@/components/About";
import Venue from "@/components/Venue";
import Events from "@/components/Events";
import Registrations from "@/components/Registrations";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-body">
      <Hero />
      <About />
      <Venue />
      <Events />
      <Registrations />
      <Sponsors />
      <Footer />
    </main>
  );
};

export default Index;
