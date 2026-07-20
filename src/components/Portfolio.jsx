import { useState, useEffect, useRef } from "react";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../data/portfolioData";

const categories = [
  { id: "all", label: "All Works" },
  { id: "painting", label: "Paintings" },
  { id: "sketch", label: "Sketches" },
  { id: "calligraphy", label: "Calligraphy" },
];

const premiumPortfolioStyles = `
  .portfolio-premium-scroll::-webkit-scrollbar { display: none !important; }
  .portfolio-premium-scroll { -ms-overflow-style: none !important; scrollbar-width: none !important; }
`;

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSubImageIndex, setCurrentSubImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const filtered =
    active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

  const currentFilteredIndex = selectedItem 
    ? filtered.findIndex(item => item.id === selectedItem.id) 
    : -1;

  useEffect(() => {
    if (!document.getElementById("portfolio-premium-overrides")) {
      const style = document.createElement("style");
      style.id = "portfolio-premium-overrides";
      style.textContent = premiumPortfolioStyles;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    setCurrentSubImageIndex(0);
  }, [selectedItem]);

  // Keyboard navigation controls
  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (e) => {
      const hasMultipleImages = selectedItem.images && selectedItem.images.length > 1;

      if (e.key === "Escape") setSelectedItem(null);
      
      if (e.key === "ArrowRight") {
        if (hasMultipleImages && currentSubImageIndex < selectedItem.images.length - 1) {
          setCurrentSubImageIndex(prev => prev + 1);
        } else {
          handleNextProject();
        }
      }
      if (e.key === "ArrowLeft") {
        if (hasMultipleImages && currentSubImageIndex > 0) {
          setCurrentSubImageIndex(prev => prev - 1);
        } else {
          handlePrevProject();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentSubImageIndex, filtered]);

  useEffect(() => {
    document.body.style.overflow = selectedItem !== null ? "hidden" : "";
  }, [selectedItem]);

  const handleNextProject = () => {
    if (currentFilteredIndex === -1) return;
    const nextIdx = currentFilteredIndex === filtered.length - 1 ? 0 : currentFilteredIndex + 1;
    setSelectedItem(filtered[nextIdx]);
  };

  const handlePrevProject = () => {
    if (currentFilteredIndex === -1) return;
    const prevIdx = currentFilteredIndex === 0 ? filtered.length - 1 : currentFilteredIndex - 1;
    setSelectedItem(filtered[prevIdx]);
  };

  const handleNextSubImage = (e) => {
    e.stopPropagation();
    if (selectedItem.images && currentSubImageIndex < selectedItem.images.length - 1) {
      setCurrentSubImageIndex(prev => prev + 1);
    } else {
      setCurrentSubImageIndex(0);
    }
  };

  const handlePrevSubImage = (e) => {
    e.stopPropagation();
    if (selectedItem.images && currentSubImageIndex > 0) {
      setCurrentSubImageIndex(prev => prev - 1);
    } else {
      setCurrentSubImageIndex((selectedItem.images?.length || 1) - 1);
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Dynamic Ambiance Gradients */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/20 bg-purple-500/[0.02] rounded-full mb-4">
            <span className="font-body text-purple-400 tracking-[0.3em] text-[9px] sm:text-[10px] uppercase">
              ✦ Curated Museum Exhibition ✦
            </span>
          </div>
          
          <h2 className="font-display text-3xl md:text-6xl font-light text-white tracking-wide mt-2">
            The 
            <span className="text-gradient-purple"> Portfolio</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mt-6" />

          {/* Minimalist Filter Tabs */}
          <div className="mt-10 md:mt-12 flex justify-start md:justify-center max-w-full overflow-x-auto portfolio-premium-scroll px-4 md:px-0 pb-4">
            <div className="flex gap-1.5 p-1.5 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-sm min-w-max mx-auto">
              {categories.map((cat) => {
                const isSelected = active === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`px-4 sm:px-6 py-2 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-body transition-all duration-300 relative rounded-full flex-shrink-0 whitespace-nowrap ${
                      isSelected ? "text-white font-semibold bg-purple-500/10 border border-purple-500/30" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bulletproof CSS Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((item) => {
              const displayImage = item.images && item.images.length > 0 ? item.images[0] : item.image;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative border border-white/10 p-3 bg-white/[0.01] hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgb(var(--c-primary-500)/0.1)] transition-all duration-500 cursor-pointer overflow-hidden rounded-sm"
                >
                  <div className="relative overflow-hidden bg-neutral-950 aspect-[4/5] rounded-xs">
                    <img
                      src={displayImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                      loading="lazy"
                    />
                    
                    {item.images && item.images.length > 1 && (
                      <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-[#050505]/80 border border-purple-500/30 rounded-xs text-[9px] text-purple-400 tracking-wider font-body backdrop-blur-sm">
                        +{item.images.length - 1} Angles
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-6 backdrop-blur-[1px]">
                      
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#050505]/60 border border-white/20 flex items-center justify-center text-white/80 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 group-hover:text-purple-400 group-hover:border-purple-500/50">
                        <Maximize2 size={13} />
                      </div>

                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-purple-400 font-semibold block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl text-white font-light mb-1 sm:mb-2 tracking-wide">
                          {item.title}
                        </h3>
                        <p className="font-body text-[11px] sm:text-xs text-white/50 line-clamp-2 leading-relaxed font-light">
                          {item.description || "Original masterpiece featuring precise execution."}
                        </p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 md:py-32 border border-dashed border-white/10 rounded-sm">
            <p className="font-body text-white/40 text-[11px] tracking-[0.2em] uppercase px-4">
              The archive is currently empty for this collection.
            </p>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/60 hover:text-purple-400 border border-white/10 hover:border-purple-500/40 p-2.5 md:p-3 rounded-full bg-white/[0.02] backdrop-blur-md transition-all duration-300 z-50"
              aria-label="Close Lightbox"
            >
              <X size={18} />
            </button>

            {/* Global Project Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevProject(); }}
              className="absolute left-6 text-white/30 hover:text-purple-400 p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-white/5 transition-all z-50 hidden xl:block"
              title="Previous Project"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextProject(); }}
              className="absolute right-6 text-white/30 hover:text-purple-400 p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-white/5 transition-all z-50 hidden xl:block"
              title="Next Project"
            >
              <ChevronRight size={28} />
            </button>

            {/* Main Showroom Box */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="w-full flex flex-col items-center select-none relative group/lightbox">
                
                {selectedItem.images && selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSubImage}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-purple-400/70 hover:text-purple-400 p-1.5 md:p-2 bg-[#050505]/80 border border-purple-500/20 rounded-full backdrop-blur-md transition-all z-40"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextSubImage}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-purple-400/70 hover:text-purple-400 p-1.5 md:p-2 bg-[#050505]/80 border border-purple-500/20 rounded-full backdrop-blur-md transition-all z-40"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                <img
                  src={
                    selectedItem.images 
                      ? selectedItem.images[currentSubImageIndex] 
                      : selectedItem.image
                  }
                  alt={selectedItem.title}
                  className="max-h-[55vh] md:max-h-[62vh] w-auto max-w-full object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5 rounded-xs transition-all duration-300"
                />
              </div>

              {/* Sub-images Dots Indicator */}
              {selectedItem.images && selectedItem.images.length > 1 && (
                <div className="flex gap-2 mt-4 z-40">
                  {selectedItem.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => { e.stopPropagation(); setCurrentSubImageIndex(dotIdx); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentSubImageIndex ? "w-6 bg-purple-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Dynamic Metadata Section */}
              <div className="mt-4 md:mt-6 text-center max-w-2xl px-4 overflow-y-auto max-h-[20vh] portfolio-premium-scroll">
                <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-purple-400 font-medium block mb-1 md:mb-2">
                  {selectedItem.category} {selectedItem.images && `• Angle ${currentSubImageIndex + 1}/${selectedItem.images.length}`}
                </span>
                <h3 className="font-display text-xl md:text-3xl text-white font-light tracking-wide mb-1 md:mb-2">
                  {selectedItem.title}
                </h3>
                <p className="font-body text-white/60 text-xs md:text-sm leading-relaxed font-light">
                  {selectedItem.description || "An exquisite display of artistic vision, balance, and fine textures."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}