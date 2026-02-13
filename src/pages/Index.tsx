import Hero from "@/sections/Hero";
import Header from "@/components/Header";
import About from "@/sections/About";
import Themes from "@/sections/Themes";
import Agenda from "@/sections/Agenda";
import Speakers from "@/sections/Speakers";
import WhyAttend from "@/sections/WhyAttend";
import RSVP from "@/sections/RSVP";
import Footer from "@/sections/Footer";

const Index = () => (
  <>
    <Header />
    <div className="grain-overlay" />
    <main>
      <Hero />
      <About />
      <Themes />
      <Agenda />
      <Speakers />
      <WhyAttend />
      <RSVP />
    </main>
    <Footer />
  </>
);

export default Index;
