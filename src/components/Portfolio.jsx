// import { useState, useEffect, useRef } from "react";
// import { X, Maximize2, Layers, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { portfolioItems } from "../data/portfolioData";

// const categories = [
//   { id: "all", label: "All Works" },
//   { id: "painting", label: "Paintings" },
//   { id: "sketch", label: "Sketches" },
//   { id: "calligraphy", label: "Calligraphy" },
// ];

// export default function Portfolio() {
//   const [active, setActive] = useState("all");
//   const [lightboxIndex, setLightboxIndex] = useState(null);
//   const [currentSubImageIndex, setCurrentSubImageIndex] = useState(0);
//   const sectionRef = useRef(null);

//   const filtered =
//     active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

//   useEffect(() => {
//     setCurrentSubImageIndex(0);
//   }, [lightboxIndex]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (lightboxIndex === null) return;
//       if (e.key === "Escape") setLightboxIndex(null);
      
//       const currentItem = filtered[lightboxIndex];
//       const hasMultipleImages = currentItem.images && currentItem.images.length > 1;

//       if (e.key === "ArrowRight") {
//         if (hasMultipleImages && currentSubImageIndex < currentItem.images.length - 1) {
//           setCurrentSubImageIndex(prev => prev + 1);
//         } else {
//           handleNextProject();
//         }
//       }
//       if (e.key === "ArrowLeft") {
//         if (hasMultipleImages && currentSubImageIndex > 0) {
//           setCurrentSubImageIndex(prev => prev - 1);
//         } else {
//           handlePrevProject();
//         }
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [lightboxIndex, filtered, currentSubImageIndex]);

//   useEffect(() => {
//     document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
//   }, [lightboxIndex]);

//   const handleNextProject = () => {
//     setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrevProject = () => {
//     setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
//   };

//   const handleNextSubImage = (e) => {
//     e.stopPropagation();
//     const currentItem = filtered[lightboxIndex];
//     if (currentItem.images && currentSubImageIndex < currentItem.images.length - 1) {
//       setCurrentSubImageIndex(prev => prev + 1);
//     } else {
//       setCurrentSubImageIndex(0); // Loop back to first image of same project
//     }
//   };

//   const handlePrevSubImage = (e) => {
//     e.stopPropagation();
//     const currentItem = filtered[lightboxIndex];
//     if (currentItem.images && currentSubImageIndex > 0) {
//       setCurrentSubImageIndex(prev => prev - 1);
//     } else {
//       setCurrentSubImageIndex((currentItem.images?.length || 1) - 1); // Loop to last image
//     }
//   };

//   return (
//     <section id="portfolio" ref={sectionRef} className="py-32 bg-ink relative overflow-hidden">
//       <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/20 bg-gold/[0.02] rounded-full mb-4">
//             {/* <Layers size={11} className="text-gold/70" /> */}
//             <span className="font-body text-gold tracking-[0.3em] text-[10px] uppercase">
//               ✦ Curated Museum Exhibition ✦
//             </span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-6xl font-light text-parchment tracking-wide mt-2">
//             The Portfolio
//           </h2>
//           <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-6" />

//           {/* Premium Animated Filter Tabs */}
//           <div className="mt-12 flex justify-center max-w-full overflow-x-auto no-scrollbar pb-4">
//             <div className="flex gap-2 p-1.5 bg-white/[0.02] border border-parchment/10 rounded-full backdrop-blur-sm">
//               {categories.map((cat) => {
//                 const isSelected = active === cat.id;
//                 return (
//                   <button
//                     key={cat.id}
//                     onClick={() => setActive(cat.id)}
//                     className={`px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-body transition-colors duration-300 relative rounded-full flex-shrink-0 ${
//                       isSelected ? "text-ink font-semibold" : "text-parchment/60 hover:text-parchment"
//                     }`}
//                   >
//                     {isSelected && (
//                       <motion.div
//                         layoutId="activeTab"
//                         className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold rounded-full"
//                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                       />
//                     )}
//                     <span className="relative z-10">{cat.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Fluid Grid Layout */}
//         <motion.div 
//           layout
//           className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-8 space-y-8"
//         >
//           <AnimatePresence mode="popLayout">
//             {filtered.map((item, index) => {
//               const displayImage = item.images && item.images.length > 0 ? item.images[0] : item.image;
              
//               return (
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                   key={item.id}
//                   onClick={() => setLightboxIndex(index)}
//                   className="break-inside-avoid group relative border border-parchment/10 p-3 bg-white/[0.01] hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-500 cursor-pointer overflow-hidden rounded-sm"
//                 >
//                   <div className="relative overflow-hidden bg-neutral-950 aspect-auto">
//                     <img
//                       src={displayImage}
//                       alt={item.title}
//                       className="w-full h-auto block transition-transform duration-1000 scale-100 group-hover:scale-103 filter brightness-[0.92] group-hover:brightness-100"
//                       loading="lazy"
//                     />
                    
//                     {/* Multi-image indicator badge */}
//                     {item.images && item.images.length > 1 && (
//                       <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-ink/80 border border-gold/30 rounded-xs text-[9px] text-gold tracking-wider font-body backdrop-blur-sm">
//                         +{item.images.length - 1} Angles
//                       </div>
//                     )}
                    
//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6 backdrop-blur-[1px]">
                      
//                       <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-ink/60 border border-parchment/20 flex items-center justify-center text-parchment/80 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 delay-75 group-hover:text-gold group-hover:border-gold/50">
//                         <Maximize2 size={13} />
//                       </div>

//                       <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                         <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold font-semibold block mb-2">
//                           {item.category}
//                         </span>
//                         <h3 className="font-display text-2xl text-parchment font-light mb-2 tracking-wide">
//                           {item.title}
//                         </h3>
//                         <p className="font-body text-xs text-parchment/50 line-clamp-2 leading-relaxed font-light">
//                           {item.description || "Original museum grade masterpiece featuring precise execution."}
//                         </p>
//                       </div>

//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </motion.div>

//         {/* Empty State */}
//         {filtered.length === 0 && (
//           <div className="text-center py-32 border border-dashed border-parchment/10 rounded-lg">
//             <p className="font-body text-parchment/40 text-xs tracking-[0.2em] uppercase">
//               The archive is currently empty for this collection.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Cinematic Fullscreen Lightbox */}
//       <AnimatePresence>
//         {lightboxIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
//             onClick={() => setLightboxIndex(null)}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setLightboxIndex(null)}
//               className="absolute top-6 right-6 text-parchment/60 hover:text-gold border border-parchment/10 hover:border-gold/40 p-3 rounded-full bg-white/[0.02] backdrop-blur-md transition-all duration-300 z-50"
//               aria-label="Close Lightbox"
//             >
//               <X size={20} />
//             </button>

//             {/* Global Project Navigation Arrows */}
//             <button
//               onClick={(e) => { e.stopPropagation(); handlePrevProject(); }}
//               className="absolute left-6 text-parchment/30 hover:text-gold p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-parchment/5 transition-all z-50 hidden xl:block"
//               title="Previous Project"
//             >
//               <ChevronLeft size={28} />
//             </button>
//             <button
//               onClick={(e) => { e.stopPropagation(); handleNextProject(); }}
//               className="absolute right-6 text-parchment/30 hover:text-gold p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-parchment/5 transition-all z-50 hidden xl:block"
//               title="Next Project"
//             >
//               <ChevronRight size={28} />
//             </button>

//             {/* Main Showroom Box */}
//             <motion.div
//               initial={{ scale: 0.95, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.95, y: 20 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
//               onClick={(e) => e.stopPropagation()}
//             >
              
//               {/* Image Container with Inner Navigation */}
//               <div className="w-full flex flex-col items-center select-none relative group/lightbox">
                
//                 {/* Inner Navigation - Left (Only shows if project has multiple images) */}
//                 {filtered[lightboxIndex].images && filtered[lightboxIndex].images.length > 1 && (
//                   <>
//                     <button
//                       onClick={handlePrevSubImage}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold p-2 bg-ink/80 border border-gold/20 rounded-full backdrop-blur-md transition-all z-40"
//                     >
//                       <ChevronLeft size={20} />
//                     </button>
//                     <button
//                       onClick={handleNextSubImage}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold p-2 bg-ink/80 border border-gold/20 rounded-full backdrop-blur-md transition-all z-40"
//                     >
//                       <ChevronRight size={20} />
//                     </button>
//                   </>
//                 )}

//                 <img
//                   src={
//                     filtered[lightboxIndex].images 
//                       ? filtered[lightboxIndex].images[currentSubImageIndex] 
//                       : filtered[lightboxIndex].image
//                   }
//                   alt={filtered[lightboxIndex].title}
//                   className="max-h-[62vh] w-auto max-w-full object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5 rounded-xs transition-all duration-300"
//                 />
//               </div>

//               {/* Sub-images Dots Indicator / Thumbnails */}
//               {filtered[lightboxIndex].images && filtered[lightboxIndex].images.length > 1 && (
//                 <div className="flex gap-2 mt-4 z-40">
//                   {filtered[lightboxIndex].images.map((_, dotIdx) => (
//                     <button
//                       key={dotIdx}
//                       onClick={(e) => { e.stopPropagation(); setCurrentSubImageIndex(dotIdx); }}
//                       className={`h-1.5 rounded-full transition-all duration-300 ${
//                         dotIdx === currentSubImageIndex ? "w-6 bg-gold" : "w-1.5 bg-parchment/20 hover:bg-parchment/40"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               )}

//               {/* Dynamic Metadata Section */}
//               <div className="mt-6 text-center max-w-2xl px-4">
//                 <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold font-medium block mb-2">
//                   {filtered[lightboxIndex].category} {filtered[lightboxIndex].images && `• Angle ${currentSubImageIndex + 1}/${filtered[lightboxIndex].images.length}`}
//                 </span>
//                 <h3 className="font-display text-2xl md:text-3xl text-parchment font-light tracking-wide mb-2">
//                   {filtered[lightboxIndex].title}
//                 </h3>
//                 <p className="font-body text-parchment/60 text-xs md:text-sm leading-relaxed font-light">
//                   {filtered[lightboxIndex].description || "An exquisite display of artistic vision, balance, and fine textures."}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }





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

// Structural stylesheet overrides to suppress layout bars and maintain pristine padding
const premiumPortfolioStyles = `
  .portfolio-premium-scroll::-webkit-scrollbar { display: none !important; }
  .portfolio-premium-scroll { -ms-overflow-style: none !important; scrollbar-width: none !important; }
`;

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentSubImageIndex, setCurrentSubImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const filtered =
    active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

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
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      
      const currentItem = filtered[lightboxIndex];
      const hasMultipleImages = currentItem.images && currentItem.images.length > 1;

      if (e.key === "ArrowRight") {
        if (hasMultipleImages && currentSubImageIndex < currentItem.images.length - 1) {
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
  }, [lightboxIndex, filtered, currentSubImageIndex]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
  }, [lightboxIndex]);

  const handleNextProject = () => {
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  const handlePrevProject = () => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNextSubImage = (e) => {
    e.stopPropagation();
    const currentItem = filtered[lightboxIndex];
    if (currentItem.images && currentSubImageIndex < currentItem.images.length - 1) {
      setCurrentSubImageIndex(prev => prev + 1);
    } else {
      setCurrentSubImageIndex(0);
    }
  };

  const handlePrevSubImage = (e) => {
    e.stopPropagation();
    const currentItem = filtered[lightboxIndex];
    if (currentItem.images && currentSubImageIndex > 0) {
      setCurrentSubImageIndex(prev => prev - 1);
    } else {
      setCurrentSubImageIndex((currentItem.images?.length || 1) - 1);
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-ink relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/20 bg-gold/[0.02] rounded-full mb-4">
            <span className="font-body text-gold tracking-[0.3em] text-[9px] sm:text-[10px] uppercase">
              ✦ Curated Museum Exhibition ✦
            </span>
          </div>
          
          <h2 className="font-display text-3xl md:text-6xl font-light text-parchment tracking-wide mt-2">
            The Portfolio
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-6" />

          {/* Premium Filter Tabs Container - Fixed Cutoff Framework */}
          <div className="mt-10 md:mt-12 flex justify-start md:justify-center max-w-full overflow-x-auto portfolio-premium-scroll px-4 md:px-0 pb-4">
            <div className="flex gap-1.5 p-1.5 bg-white/[0.02] border border-parchment/10 rounded-full backdrop-blur-sm min-w-max mx-auto">
              {categories.map((cat) => {
                const isSelected = active === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`px-4 sm:px-6 py-2 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase font-body transition-all duration-300 relative rounded-full flex-shrink-0 whitespace-nowrap ${
                      isSelected ? "text-ink font-semibold" : "text-parchment/60 hover:text-parchment"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Fluid Grid Layout */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const displayImage = item.images && item.images.length > 0 ? item.images[0] : item.image;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid group relative border border-parchment/10 p-3 bg-white/[0.01] hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-500 cursor-pointer overflow-hidden rounded-sm"
                >
                  <div className="relative overflow-hidden bg-neutral-950 aspect-auto">
                    <img
                      src={displayImage}
                      alt={item.title}
                      className="w-full h-auto block transition-transform duration-1000 scale-100 group-hover:scale-103 filter brightness-[0.92] group-hover:brightness-100"
                      loading="lazy"
                    />
                    
                    {item.images && item.images.length > 1 && (
                      <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-ink/80 border border-gold/30 rounded-xs text-[9px] text-gold tracking-wider font-body backdrop-blur-sm">
                        +{item.images.length - 1} Angles
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-4 sm:p-6 backdrop-blur-[1px]">
                      
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-ink/60 border border-parchment/20 flex items-center justify-center text-parchment/80 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 delay-75 group-hover:text-gold group-hover:border-gold/50">
                        <Maximize2 size={13} />
                      </div>

                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold font-semibold block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl text-parchment font-light mb-1 sm:mb-2 tracking-wide">
                          {item.title}
                        </h3>
                        <p className="font-body text-[11px] sm:text-xs text-parchment/50 line-clamp-2 leading-relaxed font-light">
                          {item.description || "Original museum grade masterpiece featuring precise execution."}
                        </p>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 md:py-32 border border-dashed border-parchment/10 rounded-sm">
            <p className="font-body text-parchment/40 text-[11px] tracking-[0.2em] uppercase px-4">
              The archive is currently empty for this collection.
            </p>
          </div>
        )}
      </div>

      {/* Cinematic Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-parchment/60 hover:text-gold border border-parchment/10 hover:border-gold/40 p-2.5 md:p-3 rounded-full bg-white/[0.02] backdrop-blur-md transition-all duration-300 z-50"
              aria-label="Close Lightbox"
            >
              <X size={18} />
            </button>

            {/* Global Project Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevProject(); }}
              className="absolute left-6 text-parchment/30 hover:text-gold p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-parchment/5 transition-all z-50 hidden xl:block"
              title="Previous Project"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextProject(); }}
              className="absolute right-6 text-parchment/30 hover:text-gold p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-parchment/5 transition-all z-50 hidden xl:block"
              title="Next Project"
            >
              <ChevronRight size={28} />
            </button>

            {/* Main Showroom Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container with Inner Navigation */}
              <div className="w-full flex flex-col items-center select-none relative group/lightbox">
                
                {filtered[lightboxIndex].images && filtered[lightboxIndex].images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSubImage}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold p-1.5 md:p-2 bg-ink/80 border border-gold/20 rounded-full backdrop-blur-md transition-all z-40"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextSubImage}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold p-1.5 md:p-2 bg-ink/80 border border-gold/20 rounded-full backdrop-blur-md transition-all z-40"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                <img
                  src={
                    filtered[lightboxIndex].images 
                      ? filtered[lightboxIndex].images[currentSubImageIndex] 
                      : filtered[lightboxIndex].image
                  }
                  alt={filtered[lightboxIndex].title}
                  className="max-h-[55vh] md:max-h-[62vh] w-auto max-w-full object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5 rounded-xs transition-all duration-300"
                />
              </div>

              {/* Sub-images Dots Indicator */}
              {filtered[lightboxIndex].images && filtered[lightboxIndex].images.length > 1 && (
                <div className="flex gap-2 mt-4 z-40">
                  {filtered[lightboxIndex].images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => { e.stopPropagation(); setCurrentSubImageIndex(dotIdx); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentSubImageIndex ? "w-6 bg-gold" : "w-1.5 bg-parchment/20 hover:bg-parchment/40"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Dynamic Metadata Section */}
              <div className="mt-4 md:mt-6 text-center max-w-2xl px-4 overflow-y-auto max-h-[20vh] portfolio-premium-scroll">
                <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-gold font-medium block mb-1 md:mb-2">
                  {filtered[lightboxIndex].category} {filtered[lightboxIndex].images && `• Angle ${currentSubImageIndex + 1}/${filtered[lightboxIndex].images.length}`}
                </span>
                <h3 className="font-display text-xl md:text-3xl text-parchment font-light tracking-wide mb-1 md:mb-2">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="font-body text-parchment/60 text-xs md:text-sm leading-relaxed font-light">
                  {filtered[lightboxIndex].description || "An exquisite display of artistic vision, balance, and fine textures."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}