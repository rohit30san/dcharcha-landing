import HeroSection from "./components/HeroSection";
import TransformationGallery from "./components/TransformationGallery";
import ShareDream from "./components/ShareDream";
import WhyDcharcha from './components/WhyDcharcha';
import PillarsSection from './components/PillarsSection';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CivicRoles from "./components/CivicRoles.jsx";

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* ✅ Global background gradient — scrolls with page */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-cyan-200 via-white to-[#195554]"></div>

      {/* Navbar stays on top */}
      <Navbar />

      <main className="font-sans text-gray-900 scroll-smooth pt-20">
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="gallery" className="scroll-mt-20">
          <TransformationGallery />
        </section>
        <section id="pillars" className="scroll-mt-20">
          <PillarsSection />
        </section>
        <section id="civic">
          <CivicRoles />
        </section>
        <section id="why" className="scroll-mt-20">
          <WhyDcharcha />
        </section>
        <section id="share" className="scroll-mt-20">
          <ShareDream />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
