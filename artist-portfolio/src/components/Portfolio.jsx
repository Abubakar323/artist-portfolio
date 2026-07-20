// import { useState, useEffect, useRef } from "react";
// import { X, ZoomIn } from "lucide-react";
// import { portfolioItems } from "../data/portfolioData";

// const categories = [
//   { id: "all", label: "All Works" },
//   { id: "painting", label: "Paintings" },
//   { id: "sketch", label: "Sketches" },
//   { id: "calligraphy", label: "Calligraphy" },
// ];

// export default function Portfolio() {
//   const [active, setActive] = useState("all");
//   const [lightbox, setLightbox] = useState(null);
//   const sectionRef = useRef(null);

//   const filtered =
//     active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

//   // Close lightbox on Escape
//   useEffect(() => {
//     const handler = (e) => e.key === "Escape" && setLightbox(null);
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // Prevent scroll when lightbox open
//   useEffect(() => {
//     document.body.style.overflow = lightbox ? "hidden" : "";
//   }, [lightbox]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => {
//                 el.style.opacity = "1";
//                 el.style.transform = "translateY(0)";
//               }, i * 100);
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="portfolio" ref={sectionRef} className="py-28 bg-ink">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             <p className="font-body text-gold tracking-[0.4em] text-xs uppercase mb-3">
//               ✦ My Work ✦
//             </p>
//           </div>
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             <h2 className="font-display text-5xl md:text-6xl font-light text-parchment mb-10">
//               Portfolio
//             </h2>
//           </div>

//           {/* Filter buttons */}
//           <div
//             className="reveal flex flex-wrap justify-center gap-3"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActive(cat.id)}
//                 className={`px-6 py-2 text-xs tracking-[0.2em] uppercase font-body border transition-all duration-300 ${
//                   active === cat.id
//                     ? "bg-gold border-gold text-ink"
//                     : "border-parchment/20 text-parchment/60 hover:border-gold hover:text-gold"
//                 }`}
//               >
//                 {cat.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Masonry Grid */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
//           {filtered.map((item, i) => (
//             <div
//               key={item.id}
//               className="break-inside-avoid group relative overflow-hidden cursor-pointer"
//               onClick={() => setLightbox(item)}
//               style={{
//                 opacity: 0,
//                 transform: "translateY(20px)",
//                 transition: `all 0.6s ease ${i * 0.05}s`,
//               }}
//               ref={(el) => {
//                 if (el) {
//                   setTimeout(() => {
//                     el.style.opacity = "1";
//                     el.style.transform = "translateY(0)";
//                   }, i * 80 + 200);
//                 }
//               }}
//             >
//               <div className="relative overflow-hidden bg-ink-soft">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
//                   loading="lazy"
//                 />
//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
//                   <ZoomIn size={28} className="text-gold" />
//                   <h3 className="font-display text-xl text-parchment text-center font-light">
//                     {item.title}
//                   </h3>
//                   <p className="font-body text-xs text-parchment/50 tracking-wider text-center">
//                     {item.description}
//                   </p>
//                   <span className="font-body text-xs tracking-[0.2em] uppercase text-gold border border-gold/50 px-3 py-1">
//                     {item.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty state */}
//         {filtered.length === 0 && (
//           <div className="text-center py-20">
//             <p className="font-body text-parchment/30 text-sm tracking-widest uppercase">
//               No items in this category yet
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={() => setLightbox(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close btn */}
//             <button
//               onClick={() => setLightbox(null)}
//               className="absolute -top-12 right-0 text-parchment/60 hover:text-gold transition-colors z-10"
//             >
//               <X size={28} />
//             </button>

//             {/* Image */}
//             <img
//               src={lightbox.image}
//               alt={lightbox.title}
//               className="max-h-[75vh] w-auto max-w-full object-contain"
//             />

//             {/* Info */}
//             <div className="mt-6 text-center">
//               <h3 className="font-display text-2xl text-parchment font-light mb-1">
//                 {lightbox.title}
//               </h3>
//               <p className="font-body text-parchment/40 text-xs tracking-widest uppercase">
//                 {lightbox.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }



// import { useState, useEffect, useRef } from "react";
// import { X, Maximize2, Layers } from "lucide-react";
// import { portfolioItems } from "../data/portfolioData";

// const categories = [
//   { id: "all", label: "All Works" },
//   { id: "painting", label: "Paintings" },
//   { id: "sketch", label: "Sketches" },
//   { id: "calligraphy", label: "Calligraphy" },
// ];

// export default function Portfolio() {
//   const [active, setActive] = useState("all");
//   const [lightbox, setLightbox] = useState(null);
//   const sectionRef = useRef(null);

//   const filtered =
//     active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

//   // Close lightbox on Escape key
//   useEffect(() => {
//     const handler = (e) => e.key === "Escape" && setLightbox(null);
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // Prevent background scroll when lightbox is active
//   useEffect(() => {
//     document.body.style.overflow = lightbox ? "hidden" : "";
//   }, [lightbox]);

//   // Clean Intersection Observer for entry animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => {
//                 el.classList.add("translate-y-0", "opacity-100");
//                 el.classList.remove("translate-y-10", "opacity-0");
//               }, i * 100);
//             });
//           }
//         });
//       },
//       { threshold: 0.05 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="portfolio" ref={sectionRef} className="py-32 bg-ink relative">
//       {/* Tiny background ambient graphic */}
//       <div className="absolute left-6 top-12 text-white/[0.02] font-arabic text-4xl pointer-events-none select-none">
//         معرض
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out mb-4">
//             <p className="font-body text-gold tracking-[0.4em] text-xs uppercase flex items-center justify-center gap-2">
//               <Layers size={12} className="text-gold/60" />
//               <span>Curated Masterpieces</span>
//             </p>
//           </div>
          
//           <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out mb-12">
//             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-parchment">
//               The Portfolio
//             </h2>
//             <div className="w-12 h-px bg-gold/30 mx-auto mt-4" />
//           </div>

//           {/* Premium Filter Tabs */}
//           <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-wrap justify-center gap-2 md:gap-4">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActive(cat.id)}
//                 className={`px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 relative rounded-none ${
//                   active === cat.id
//                     ? "bg-gold text-ink font-semibold"
//                     : "bg-white/[0.02] border border-parchment/10 text-parchment/60 hover:border-gold/50 hover:text-gold"
//                 }`}
//               >
//                 {cat.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Clean Masonry / Dynamic Grid Layout */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
//           {filtered.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => setLightbox(item)}
//               className="break-inside-avoid group relative border border-parchment/[0.05] p-2 bg-white/[0.01] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in"
//             >
//               <div className="relative overflow-hidden bg-neutral-900">
//                 {/* Artwork Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-auto block transition-transform duration-700 scale-100 group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
//                   loading="lazy"
//                 />
                
//                 {/* Sophisticated Minimalist Hover Overlay */}
//                 <div className="absolute inset-0 bg-ink/85 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                  
//                   {/* Top Right Zoom Icon Indicator */}
//                   <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-parchment/20 flex items-center justify-center text-parchment/60 group-hover:text-gold group-hover:border-gold/50 transition-colors duration-300">
//                     <Maximize2 size={12} />
//                   </div>

//                   {/* Artwork Typography Details */}
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <span className="font-body text-[9px] tracking-[0.25em] uppercase text-gold font-medium block mb-2">
//                       {item.category}
//                     </span>
//                     <h3 className="font-display text-xl text-parchment font-light mb-1.5 tracking-wide">
//                       {item.title}
//                     </h3>
//                     <p className="font-body text-xs text-parchment/40 line-clamp-2 leading-relaxed">
//                       {item.description || "Original artwork showcasing intricate details, strokes, and traditional composition styles."}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Empty State */}
//         {filtered.length === 0 && (
//           <div className="text-center py-24 border border-dashed border-parchment/10 my-8">
//             <p className="font-body text-parchment/30 text-xs tracking-[0.25em] uppercase">
//               No masterpieces listed in this collection yet.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Lightbox / Fullscreen Viewer */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
//           onClick={() => setLightbox(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-white/[0.02] border border-parchment/5 p-4 md:p-6"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button Trigger */}
//             <button
//               onClick={() => setLightbox(null)}
//               className="absolute -top-14 right-0 md:right-4 text-parchment/40 hover:text-gold border border-parchment/10 hover:border-gold/40 p-2 transition-all duration-300"
//               aria-label="Close Lightbox"
//             >
//               <X size={20} />
//             </button>

//             {/* Lightbox High-Res Image display */}
//             <div className="w-full overflow-hidden flex items-center justify-center bg-neutral-950/40">
//               <img
//                 src={lightbox.image}
//                 alt={lightbox.title}
//                 className="max-h-[65vh] w-auto max-w-full object-contain shadow-2xl transition-transform duration-300"
//               />
//             </div>

//             {/* Description Meta Text */}
//             <div className="mt-6 text-center max-w-xl">
//               <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-1.5">
//                 {lightbox.category}
//               </span>
//               <h3 className="font-display text-2xl text-parchment font-light tracking-wide mb-1">
//                 {lightbox.title}
//               </h3>
//               <p className="font-body text-parchment/50 text-xs leading-relaxed">
//                 {lightbox.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }




// import { useState, useEffect, useRef } from "react";
// import { X, Maximize2, Layers } from "lucide-react";
// import { portfolioItems } from "../data/portfolioData";

// const categories = [
//   { id: "all", label: "All Works" },
//   { id: "painting", label: "Paintings" },
//   { id: "sketch", label: "Sketches" },
//   { id: "calligraphy", label: "Calligraphy" },
// ];

// export default function Portfolio() {
//   const [active, setActive] = useState("all");
//   const [lightbox, setLightbox] = useState(null);
//   const sectionRef = useRef(null);

//   const filtered =
//     active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

//   // Close lightbox on Escape key
//   useEffect(() => {
//     const handler = (e) => e.key === "Escape" && setLightbox(null);
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, []);

//   // Prevent background scroll when lightbox is active
//   useEffect(() => {
//     document.body.style.overflow = lightbox ? "hidden" : "";
//   }, [lightbox]);

//   // Clean Intersection Observer for entry animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal").forEach((el, i) => {
//               setTimeout(() => {
//                 el.classList.add("translate-y-0", "opacity-100");
//                 el.classList.remove("translate-y-10", "opacity-0");
//               }, i * 100);
//             });
//           }
//         });
//       },
//       { threshold: 0.05 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="portfolio" ref={sectionRef} className="py-32 bg-ink relative">
//       {/* Tiny background ambient graphic */}
//       <div className="absolute left-6 top-12 text-white/[0.02] font-arabic text-4xl pointer-events-none select-none">
//         معرض
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out mb-4">
//             <p className="font-body text-gold tracking-[0.4em] text-xs uppercase flex items-center justify-center gap-2">
//               <Layers size={12} className="text-gold/60" />
//               <span>Curated Masterpieces</span>
//             </p>
//           </div>
          
//           <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out mb-12">
//             <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-parchment">
//               The Portfolio
//             </h2>
//             <div className="w-12 h-px bg-gold/30 mx-auto mt-4" />
//           </div>

//           {/* Premium Filter Tabs - Optimized with Horizontal Scrollbar */}
//           <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gold/20 pb-4">
//             <div className="flex flex-nowrap md:justify-center gap-3 min-w-max px-2">
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActive(cat.id)}
//                   className={`px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 relative rounded-none flex-shrink-0 ${
//                     active === cat.id
//                       ? "bg-gold text-ink font-semibold"
//                       : "bg-white/[0.02] border border-parchment/10 text-parchment/60 hover:border-gold/50 hover:text-gold"
//                   }`}
//                 >
//                   {cat.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Clean Masonry / Dynamic Grid Layout */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
//           {filtered.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => setLightbox(item)}
//               className="break-inside-avoid group relative border border-parchment/[0.05] p-2 bg-white/[0.01] hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in"
//             >
//               <div className="relative overflow-hidden bg-neutral-900">
//                 {/* Artwork Image */}
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-auto block transition-transform duration-700 scale-100 group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
//                   loading="lazy"
//                 />
                
//                 {/* Sophisticated Minimalist Hover Overlay */}
//                 <div className="absolute inset-0 bg-ink/85 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                  
//                   {/* Top Right Zoom Icon Indicator */}
//                   <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-parchment/20 flex items-center justify-center text-parchment/60 group-hover:text-gold group-hover:border-gold/50 transition-colors duration-300">
//                     <Maximize2 size={12} />
//                   </div>

//                   {/* Artwork Typography Details */}
//                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <span className="font-body text-[9px] tracking-[0.25em] uppercase text-gold font-medium block mb-2">
//                       {item.category}
//                     </span>
//                     <h3 className="font-display text-xl text-parchment font-light mb-1.5 tracking-wide">
//                       {item.title}
//                     </h3>
//                     <p className="font-body text-xs text-parchment/40 line-clamp-2 leading-relaxed">
//                       {item.description || "Original artwork showcasing intricate details, strokes, and traditional composition styles."}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Empty State */}
//         {filtered.length === 0 && (
//           <div className="text-center py-24 border border-dashed border-parchment/10 my-8">
//             <p className="font-body text-parchment/30 text-xs tracking-[0.25em] uppercase">
//               No masterpieces listed in this collection yet.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Lightbox / Fullscreen Viewer */}
//       {lightbox && (
//         <div
//           className="fixed inset-0 z-50 bg-ink/98 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
//           onClick={() => setLightbox(null)}
//         >
//           <div
//             className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center bg-white/[0.02] border border-parchment/5 p-4 md:p-6"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button Trigger */}
//             <button
//               onClick={() => setLightbox(null)}
//               className="absolute -top-14 right-0 md:right-4 text-parchment/40 hover:text-gold border border-parchment/10 hover:border-gold/40 p-2 transition-all duration-300"
//               aria-label="Close Lightbox"
//             >
//               <X size={20} />
//             </button>

//             {/* Lightbox High-Res Image display */}
//             <div className="w-full overflow-hidden flex items-center justify-center bg-neutral-950/40">
//               <img
//                 src={lightbox.image}
//                 alt={lightbox.title}
//                 className="max-h-[65vh] w-auto max-w-full object-contain shadow-2xl transition-transform duration-300"
//               />
//             </div>

//             {/* Description Meta Text */}
//             <div className="mt-6 text-center max-w-xl">
//               <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold block mb-1.5">
//                 {lightbox.category}
//               </span>
//               <h3 className="font-display text-2xl text-parchment font-light tracking-wide mb-1">
//                 {lightbox.title}
//               </h3>
//               <p className="font-body text-parchment/50 text-xs leading-relaxed">
//                 {lightbox.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }




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
//   const sectionRef = useRef(null);

//   const filtered =
//     active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

//   // Keyboard controls for lightbox
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (lightboxIndex === null) return;
//       if (e.key === "Escape") setLightboxIndex(null);
//       if (e.key === "ArrowRight") handleNext();
//       if (e.key === "ArrowLeft") handlePrev();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [lightboxIndex, filtered]);

//   // Prevent scroll background
//   useEffect(() => {
//     document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
//   }, [lightboxIndex]);

//   const handleNext = () => {
//     setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
//   };

//   return (
//     <section id="portfolio" ref={sectionRef} className="py-32 bg-ink relative overflow-hidden">
//       {/* Background Subtle Luxury elements */}
       
//       <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/20 bg-gold/[0.02] rounded-full mb-4">
//             <Layers size={11} className="text-gold/70" />
//             <span className="font-body text-gold tracking-[0.3em] text-[10px] uppercase">
//               Curated Museum Exhibition
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
//             {filtered.map((item, index) => (
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 key={item.id}
//                 onClick={() => setLightboxIndex(index)}
//                 className="break-inside-avoid group relative border border-parchment/10 p-3 bg-white/[0.01] hover:border-gold/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] transition-all duration-500 cursor-pointer overflow-hidden rounded-sm"
//               >
//                 <div className="relative overflow-hidden bg-neutral-950 aspect-auto">
//                   {/* Artwork Image */}
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-auto block transition-transform duration-1000 scale-100 group-hover:scale-103 filter brightness-[0.92] group-hover:brightness-100"
//                     loading="lazy"
//                   />
                  
//                   {/* Sophisticated Luxury Hover Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6 backdrop-blur-[1px]">
                    
//                     {/* Top Right Zoom Button */}
//                     <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-ink/60 border border-parchment/20 flex items-center justify-center text-parchment/80 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 delay-75 group-hover:text-gold group-hover:border-gold/50">
//                       <Maximize2 size={13} />
//                     </div>

//                     {/* Meta Text details with Mask reveal logic */}
//                     <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                       <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold font-semibold block mb-2">
//                         {item.category}
//                       </span>
//                       <h3 className="font-display text-2xl text-parchment font-light mb-2 tracking-wide">
//                         {item.title}
//                       </h3>
//                       <p className="font-body text-xs text-parchment/50 line-clamp-2 leading-relaxed font-light">
//                         {item.description || "Original museum grade masterpiece featuring precise execution and heritage line work."}
//                       </p>
//                     </div>

//                   </div>
//                 </div>
//               </motion.div>
//             ))}
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

//             {/* Navigation Arrows */}
//             <button
//               onClick={(e) => { e.stopPropagation(); handlePrev(); }}
//               className="absolute left-6 text-parchment/40 hover:text-gold p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-parchment/5 transition-all z-50 hidden md:block"
//             >
//               <ChevronLeft size={28} />
//             </button>
//             <button
//               onClick={(e) => { e.stopPropagation(); handleNext(); }}
//               className="absolute right-6 text-parchment/40 hover:text-gold p-3 rounded-full bg-white/[0.01] hover:bg-white/[0.05] border border-parchment/5 transition-all z-50 hidden md:block"
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
//               <div className="w-full flex flex-col items-center select-none">
//                 <img
//                   src={filtered[lightboxIndex].image}
//                   alt={filtered[lightboxIndex].title}
//                   className="max-h-[68vh] w-auto max-w-full object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5 rounded-xs"
//                 />
//               </div>

//               {/* Dynamic Metadata Section */}
//               <div className="mt-8 text-center max-w-2xl px-4">
//                 <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold font-medium block mb-2">
//                   {filtered[lightboxIndex].category}
//                 </span>
//                 <h3 className="font-display text-2xl md:text-3xl text-parchment font-light tracking-wide mb-2">
//                   {filtered[lightboxIndex].title}
//                 </h3>
//                 <p className="font-body text-parchment/60 text-xs md:text-sm leading-relaxed font-light">
//                   {filtered[lightboxIndex].description || "An exquisite display of artistic vision, balance, and fine textures developed over dedicated studio hours."}
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
import { X, Maximize2, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../data/portfolioData";

const categories = [
  { id: "all", label: "All Works" },
  { id: "painting", label: "Paintings" },
  { id: "sketch", label: "Sketches" },
  { id: "calligraphy", label: "Calligraphy" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  // New State: Yeh track karega ke select kiye huay project ki kaunsi image open hai
  const [currentSubImageIndex, setCurrentSubImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const filtered =
    active === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

  // Jab bhi main project change ho, sub-image index ko 0 (first image) par reset kar dein
  useEffect(() => {
    setCurrentSubImageIndex(0);
  }, [lightboxIndex]);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      
      const currentItem = filtered[lightboxIndex];
      const hasMultipleImages = currentItem.images && currentItem.images.length > 1;

      if (e.key === "ArrowRight") {
        if (hasMultipleImages && currentSubImageIndex < currentItem.images.length - 1) {
          // Agar usi project ki aur images hain tu agli image dikhao
          setCurrentSubImageIndex(prev => prev + 1);
        } else {
          // Agar images khatam ho gayin tu agle project par jao
          handleNextProject();
        }
      }
      if (e.key === "ArrowLeft") {
        if (hasMultipleImages && currentSubImageIndex > 0) {
          // Usi project ki pichli image par jao
          setCurrentSubImageIndex(prev => prev - 1);
        } else {
          // Pichle project par jao
          handlePrevProject();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filtered, currentSubImageIndex]);

  // Prevent scroll background
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
  }, [lightboxIndex]);

  // Global Navigation: Next Project
  const handleNextProject = () => {
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  // Global Navigation: Previous Project
  const handlePrevProject = () => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  // Project Inner Navigation: Next Image
  const handleNextSubImage = (e) => {
    e.stopPropagation();
    const currentItem = filtered[lightboxIndex];
    if (currentItem.images && currentSubImageIndex < currentItem.images.length - 1) {
      setCurrentSubImageIndex(prev => prev + 1);
    } else {
      setCurrentSubImageIndex(0); // Loop back to first image of same project
    }
  };

  // Project Inner Navigation: Previous Image
  const handlePrevSubImage = (e) => {
    e.stopPropagation();
    const currentItem = filtered[lightboxIndex];
    if (currentItem.images && currentSubImageIndex > 0) {
      setCurrentSubImageIndex(prev => prev - 1);
    } else {
      setCurrentSubImageIndex((currentItem.images?.length || 1) - 1); // Loop to last image
    }
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-ink relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/20 bg-gold/[0.02] rounded-full mb-4">
            <Layers size={11} className="text-gold/70" />
            <span className="font-body text-gold tracking-[0.3em] text-[10px] uppercase">
              Curated Museum Exhibition
            </span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-light text-parchment tracking-wide mt-2">
            The Portfolio
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mt-6" />

          {/* Premium Animated Filter Tabs */}
          <div className="mt-12 flex justify-center max-w-full overflow-x-auto no-scrollbar pb-4">
            <div className="flex gap-2 p-1.5 bg-white/[0.02] border border-parchment/10 rounded-full backdrop-blur-sm">
              {categories.map((cat) => {
                const isSelected = active === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`px-6 py-2.5 text-[11px] tracking-[0.15em] uppercase font-body transition-colors duration-300 relative rounded-full flex-shrink-0 ${
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
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              // Grid me display karne ke liye pehli image use karein
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
                    
                    {/* Multi-image indicator badge */}
                    {item.images && item.images.length > 1 && (
                      <div className="absolute top-4 left-4 z-20 px-2.5 py-1 bg-ink/80 border border-gold/30 rounded-xs text-[9px] text-gold tracking-wider font-body backdrop-blur-sm">
                        +{item.images.length - 1} Angles
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6 backdrop-blur-[1px]">
                      
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-ink/60 border border-parchment/20 flex items-center justify-center text-parchment/80 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 delay-75 group-hover:text-gold group-hover:border-gold/50">
                        <Maximize2 size={13} />
                      </div>

                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold font-semibold block mb-2">
                          {item.category}
                        </span>
                        <h3 className="font-display text-2xl text-parchment font-light mb-2 tracking-wide">
                          {item.title}
                        </h3>
                        <p className="font-body text-xs text-parchment/50 line-clamp-2 leading-relaxed font-light">
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
          <div className="text-center py-32 border border-dashed border-parchment/10 rounded-lg">
            <p className="font-body text-parchment/40 text-xs tracking-[0.2em] uppercase">
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
              className="absolute top-6 right-6 text-parchment/60 hover:text-gold border border-parchment/10 hover:border-gold/40 p-3 rounded-full bg-white/[0.02] backdrop-blur-md transition-all duration-300 z-50"
              aria-label="Close Lightbox"
            >
              <X size={20} />
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
                
                {/* Inner Navigation - Left (Only shows if project has multiple images) */}
                {filtered[lightboxIndex].images && filtered[lightboxIndex].images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSubImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold p-2 bg-ink/80 border border-gold/20 rounded-full backdrop-blur-md transition-all z-40"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextSubImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/70 hover:text-gold p-2 bg-ink/80 border border-gold/20 rounded-full backdrop-blur-md transition-all z-40"
                    >
                      <ChevronRight size={20} />
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
                  className="max-h-[62vh] w-auto max-w-full object-contain shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5 rounded-xs transition-all duration-300"
                />
              </div>

              {/* Sub-images Dots Indicator / Thumbnails */}
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
              <div className="mt-6 text-center max-w-2xl px-4">
                <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold font-medium block mb-2">
                  {filtered[lightboxIndex].category} {filtered[lightboxIndex].images && `• Angle ${currentSubImageIndex + 1}/${filtered[lightboxIndex].images.length}`}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-parchment font-light tracking-wide mb-2">
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