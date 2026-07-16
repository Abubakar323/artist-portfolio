import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show the loader for ~2.5s, then fade it out smoothly before unmounting.
    const fadeTimer = setTimeout(() => setIsFadingOut(true), 2500);
    const removeTimer = setTimeout(() => setLoading(false), 3300); // 2500ms + 800ms fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && <Loader isFadingOut={isFadingOut} />}
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
