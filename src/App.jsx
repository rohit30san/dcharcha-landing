import HeroSection from "./components/HeroSection";
import TransformationGallery from "./components/TransformationGallery";
import ShareDream from "./components/ShareDream";
import WhyDcharcha from './components/WhyDcharcha';
import LocalVision from './components/LocalVision';
import CallToAction from './components/CallToAction';
import PillarsSection from './components/PillarsSection';
import Navbar from './components/Navbar';
<<<<<<< HEAD
=======
import Footer from "./components/Footer";
>>>>>>> 0e4920fdeb1428b73d44df5c81394a58d0fdd4db

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
        <section id="why" className="scroll-mt-20">
          <WhyDcharcha />
        </section>
        <section id="pillars" className="scroll-mt-20">
          <PillarsSection />
        </section>
        <section id="vision" className="scroll-mt-20">
          <LocalVision />
        </section>
        <section id="share" className="scroll-mt-20">
          <ShareDream />
        </section>
<<<<<<< HEAD
        <section id="cta" className="scroll-mt-20">
          <CallToAction />
        </section>
      </main>
=======
      </main>
      <Footer />
>>>>>>> 0e4920fdeb1428b73d44df5c81394a58d0fdd4db
    </div>
  );
}

export default App;
