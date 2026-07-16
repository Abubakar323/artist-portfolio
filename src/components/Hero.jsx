// import { useEffect, useRef } from "react";
// import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const items = heroRef.current?.querySelectorAll(".anim-item");
//     items?.forEach((el, i) => {
//       el.style.animationDelay = `${i * 0.12 + 0.2}s`;
//       el.classList.add("animate-fade-up");
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-20 lg:py-0"
//     >
//       {/* Decorative Background Overlay */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large Decorative Arabic Text */}
//        {/* Large Decorative Arabic Text */}
// <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[35vw] text-white/[0.02] select-none leading-none animate-pulse hidden lg:block">
//   ایمان
// </div>

//         {/* Premium Geometric Accent Lines */}
//         <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
//         <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
//         <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-gold/5 rotate-45 animate-spin [animation-duration:25s]" />

//         {/* Fine Noise Texture */}
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

//         {/* Left Side: Professional Content */}
//         <div className="lg:col-span-7 text-left flex flex-col justify-center">

//           {/* Pre-title */}
//           <div className="anim-item opacity-0 flex items-center gap-2 text-gold tracking-[0.35em] text-xs uppercase mb-2 font-body font-medium">
//             <Sparkles size={14} className="text-gold/80 animate-pulse" />
//             <span>Visual Artist &amp; Calligrapher</span>
//           </div>

//           {/* Main Name — highlighted with gold color RGB(201,147,58) */}
//           <h1
//             className="anim-item mt-3 mb-5 opacity-0 font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl normal-case leading-[1.5] pt-2 pb-1 select-none"
//             style={{ color: "white", filter: "drop-shadow(0 4px 20px rgba(201,147,58,0.15))" }}
//           >
//             Eman Arshad
//           </h1>

//           {/* English Description/Tagline */}
//           <p className="anim-item opacity-0 font-body text-parchment/60 tracking-wide text-sm md:text-base max-w-xl leading-relaxed mb-8 mt-2">
//             {artistInfo?.tagline || "Crafting premium visual art and contemporary Arabic calligraphy that blends traditional heritage with modern elegance."}
//           </p>

//           {/* Action Buttons */}
//           <div className="anim-item opacity-0 flex flex-wrap gap-4 items-center mt-2">
//             <button
//               onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//               className="group bg-gold text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold hover:bg-opacity-95 transition-all duration-300 flex items-center gap-2"
//             >
//               <span>View Portfolio</span>
//               <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </button>
//             <button
//               onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               className="border border-parchment/20 text-parchment px-8 py-4 text-xs tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300"
//             >
//               Commission Art
//             </button>
//           </div>

//           {/* Stats Section */}
//           <div className="anim-item opacity-0 flex gap-12 mt-14 pt-8 border-t border-parchment/10">
//             {[
//               { num: "100+", label: "Artworks Created" },
//               { num: "50+", label: "Happy Clients" },
//               { num: "5+", label: "Years Experience" },
//             ].map((s) => (
//               <div key={s.label}>
//                 <div className="font-display text-2xl md:text-3xl text-gold font-light">{s.num}</div>
//                 <div className="font-body text-parchment/40 text-[10px] tracking-[0.15em] uppercase mt-1">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Premium Art Images Display */}
//         <div className="anim-item opacity-0 mt-5 lg:col-span-5 relative flex items-center justify-center h-[450px] md:h-[550px] w-full">
//           {/* Main Background Glow */}
//           <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full" />

//           {/* Frame 1: Main Large Artwork */}
//           <div className="absolute w-[70%] h-[75%] top-4 left-6 border border-gold/20 p-2 bg-ink/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 hover:scale-[1.02] z-10">
//             <div className="w-full h-full overflow-hidden bg-neutral-900 relative group">
//               <img
//                 src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600"
//                 alt="Featured Arabic Calligraphy"
//                 className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
//             </div>
//           </div>

//           {/* Frame 2: Secondary Overlapping Artwork */}
//           <div className="absolute w-[55%] h-[55%] bottom-6 right-2 border border-parchment/10 p-2 bg-ink/80 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.03] z-20">
//             <div className="w-full h-full overflow-hidden bg-neutral-900 relative group">
//               <img
//                 src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=500"
//                 alt="Detailed Calligraphy Artwork"
//                 className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-40" />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Minimal Scroll Indicator */}
//       <div
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//         onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//       >
//         <span className="font-body text-parchment/40 text-[10px] tracking-[0.3em] uppercase">Explore</span>
//         <ChevronDown size={14} className="text-gold animate-bounce" />
//       </div>
//     </section>
//   );
// }

// import { useEffect, useRef } from "react";
// import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const items = heroRef.current?.querySelectorAll(".anim-item");
//     items?.forEach((el, i) => {
//       el.style.animationDelay = `${i * 0.12 + 0.2}s`;
//       el.classList.add("animate-fade-up");
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-16 md:py-20 lg:py-0"
//     >
//       {/* Decorative Background Overlay */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large Decorative Arabic Text */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[40vw] lg:text-[35vw] text-white/[0.02] select-none leading-none animate-pulse z-0">
//           ایمان
//         </div>

//         {/* Note: Golden accent lines and the rotating square box have been removed from here */}

//         {/* Fine Noise Texture */}
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-12 lg:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

//         {/* Left Side: Professional Content */}
//         <div className="lg:col-span-7 text-left flex flex-col justify-center">

//           {/* Pre-title */}
//           <div className="anim-item opacity-0 flex items-center gap-2 text-gold tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs uppercase mb-3 font-body font-medium">
//             <Sparkles size={12} className="text-gold/80 animate-pulse" />
//             <span>Visual Artist &amp; Calligrapher</span>
//           </div>

//           {/* Main Name */}
//           <h1
//             className="anim-item my-4 opacity-0 font-aston text-2xl sm:text-4xl md:text-5xl lg:text-6xl normal-case leading-tight pt-1 pb-1 select-none"
//             style={{ color: "white", filter: "drop-shadow(0 4px 20px rgba(201,147,58,0.15))" }}
//           >
//             Eman Arshad
//           </h1>

//           {/* English Description/Tagline */}
//           <p className="anim-item opacity-0 font-body text-parchment/60 tracking-wide text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mt-2 mb-6 sm:mb-8">
//             {artistInfo?.tagline || "Crafting premium visual art and contemporary Arabic calligraphy that blends traditional heritage with modern elegance."}
//           </p>

//           {/* Action Buttons */}
//           <div className="anim-item opacity-0 inline-flex flex-row gap-3 items-center">
//             <button
//               onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//               className="group bg-gold text-ink px-5 sm:px-8 py-3 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body font-semibold hover:bg-opacity-95 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
//             >
//               <span>Portfolio</span>
//               <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//             </button>
//             <button
//               onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               className="border border-parchment/20 text-parchment px-5 sm:px-8 py-3 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap"
//             >
//               Commission
//             </button>
//           </div>

//           {/* Stats Section */}
//           <div className="anim-item opacity-0 flex flex-row justify-between lg:justify-start lg:gap-12 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-parchment/10">
//             {[
//               { num: "100+", label: "Artworks" },
//               { num: "50+", label: "Happy Clients" },
//               { num: "5+", label: "Years Exp." },
//             ].map((s) => (
//               <div key={s.label} className="text-center lg:text-left">
//                 <div className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-light">{s.num}</div>
//                 <div className="font-body text-parchment/40 text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-1">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Premium Art Images Display */}
//         <div className="anim-item opacity-0 mt-4 lg:col-span-5 relative flex items-center justify-center h-[380px] sm:h-[450px] md:h-[550px] w-full">
//           {/* Main Background Glow */}
//           <div className="absolute inset-0 bg-gold/5 blur-[60px] md:blur-[80px] rounded-full" />

//           {/* Frame 1: Main Large Artwork */}
//           <div className="absolute w-[68%] h-[72%] top-2 left-4 border border-gold/20 p-1.5 bg-ink/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 hover:scale-[1.02] z-10">
//             <div className="w-full h-full overflow-hidden bg-neutral-900 relative group">
//               <img
//                 src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600"
//                 alt="Featured Arabic Calligraphy"
//                 className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
//             </div>
//           </div>

//           {/* Frame 2: Secondary Overlapping Artwork */}
//           <div className="absolute w-[52%] h-[52%] bottom-4 right-2 border border-parchment/10 p-1.5 bg-ink/80 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.03] z-20">
//             <div className="w-full h-full overflow-hidden bg-neutral-900 relative group">
//               <img
//                 src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=500"
//                 alt="Detailed Calligraphy Artwork"
//                 className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-40" />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Minimal Scroll Indicator */}
//       <div
//         className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//         onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//       >
//         <span className="font-body text-parchment/40 text-[9px] tracking-[0.25em] uppercase">Explore</span>
//         <ChevronDown size={12} className="text-gold animate-bounce" />
//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// // Hook for safe and continuous React Count-up tracking
// function useCountUp(target, duration, delay = 800) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTimestamp = null;
//     let timer = setTimeout(() => {
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         setCount(Math.floor(progress * target));
//         if (progress < 1) {
//           window.requestAnimationFrame(step);
//         }
//       };
//       window.requestAnimationFrame(step);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [target, duration, delay]);

//   return count;
// }

// export default function Hero() {
//   const heroRef = useRef(null);
//   const canvasRef = useRef(null);

//   // Smooth Countup initialization values
//   const stat1 = useCountUp(100, 1200);
//   const stat2 = useCountUp(50, 1000);
//   const stat3 = useCountUp(5, 800);

//   // Sequential Fade-Up Entrance Trigger logic
//   useEffect(() => {
//     const items = heroRef.current?.querySelectorAll(".anim-item");
//     items?.forEach((el, i) => {
//       el.style.animationDelay = `${i * 0.12 + 0.2}s`;
//       el.classList.add("animate-fade-up");
//     });
//   }, []);

//   // Micro-Particle Interactive Background Canvas Effect
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const particles = Array.from({ length: 35 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 1.4 + 0.4,
//       speed: Math.random() * 0.25 + 0.1,
//       opacity: Math.random() * 0.25 + 0.05,
//       drift: (Math.random() - 0.5) * 0.4,
//     }));

//     let rafId;
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.y -= p.speed;
//         p.x += p.drift * 0.25;
//         p.opacity += (Math.random() - 0.5) * 0.01;
//         p.opacity = Math.max(0.02, Math.min(0.3, p.opacity));
//         if (p.y < -10) {
//           p.y = canvas.height + 10;
//           p.x = Math.random() * canvas.width;
//         }
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(201,147,58,${p.opacity})`;
//         ctx.fill();
//       });
//       rafId = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(22px); filter: blur(4px); }
//           to { opacity: 1; transform: translateY(0); filter: blur(0); }
//         }
//         @keyframes heroRotate {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//         .animate-fade-up { 
//           animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
//         }
//       `}</style>

//       <section
//         id="home"
//         ref={heroRef}
//         className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-16 md:py-20 lg:py-0 select-none"
//       >
//         {/* Dynamic Canvas Particles */}
//         <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[1]" />

//         {/* Premium Background Accent Layers */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          
//           {/* Subtle Golden Geometric Line Grids */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(201,147,58,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(201,147,58,0.025)_1px,transparent_1px)] bg-[size:70px_70px] opacity-70" />
          
//           {/* Border Lining Accent Strips */}
//           <div className="absolute top-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(201,147,58,0.25),transparent)]" />
//           <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(201,147,58,0.12),transparent)]" />

//           {/* Large Ghost Arabic Calligraphy */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[38vw] lg:text-[32vw] text-gold/[0.015] select-none leading-none z-0">
//             ایمان
//           </div>

//           {/* Noise Overlay */}
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//             }}
//           />
//         </div>

//         {/* Outer Corner Ornaments */}
//         <div className="absolute w-12 h-12 top-6 left-6 border-t border-l border-gold/30 hidden sm:block pointer-events-none z-10" />
//         <div className="absolute w-12 h-12 top-6 right-6 border-t border-r border-gold/30 hidden sm:block pointer-events-none z-10" />
//         <div className="absolute w-12 h-12 bottom-6 left-6 border-b border-l border-gold/30 hidden sm:block pointer-events-none z-10" />
//         <div className="absolute w-12 h-12 bottom-6 right-6 border-b border-r border-gold/30 hidden sm:block pointer-events-none z-10" />

//         {/* Main Interface Content Box */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10 md:pt-12 lg:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

//           {/* Left Block Details */}
//           <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
//             {/* Tag / Eyebrow */}
//             <div className="anim-item opacity-0 flex items-center gap-2 text-gold tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs uppercase mb-3 font-body font-medium">
//               <Sparkles size={11} className="text-gold/80 animate-pulse" />
//               <span>Visual Artist &amp; Calligrapher</span>
//             </div>

//             {/* Typography Header */}
//             <h1
//               className="anim-item my-3 opacity-0 font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl normal-case leading-tight pt-1 pb-1 select-none"
//               style={{ color: "white", filter: "drop-shadow(0 4px 15px rgba(201,147,58,0.12))" }}
//             >
//               Eman Arshad
//             </h1>

//             {/* Dynamic Text Strip Separator */}
//             <div className="anim-item opacity-0 flex items-center gap-3 my-4 w-full max-w-[360px]">
//               <div className="flex-1 h-[1px] bg-parchment/10" />
//               <div className="w-1.5 h-1.5 bg-gold/70 rotate-45 flex-shrink-0" />
//               <div className="flex-1 h-[1px] bg-parchment/10" />
//             </div>

//             {/* Description */}
//             <p className="anim-item opacity-0 font-body text-parchment/60 tracking-wide text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mt-1 mb-6 sm:mb-8">
//               {artistInfo?.tagline || "Crafting premium visual art and contemporary Arabic calligraphy that blends traditional heritage with modern elegance."}
//             </p>

//             {/* Action Buttons */}
//             <div className="anim-item opacity-0 inline-flex flex-row gap-3 items-center">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative bg-gold text-ink px-6 sm:px-8 py-3.5 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body font-semibold hover:bg-opacity-95 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap overflow-hidden"
//               >
//                 <span>Portfolio</span>
//                 <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </button>
//               <button
//                 onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//                 className="border border-parchment/20 text-parchment px-6 sm:px-8 py-3.5 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap"
//               >
//                 Commission
//               </button>
//             </div>

//             {/* Animated Incremental Counters Section */}
//             <div className="anim-item opacity-0 flex flex-row justify-between lg:justify-start lg:gap-14 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-parchment/10">
//               {[
//                 { currentVal: stat1, label: "Artworks" },
//                 { currentVal: stat2, label: "Happy Clients" },
//                 { currentVal: stat3, label: "Years Exp." },
//               ].map((s, index) => (
//                 <div key={s.label} className="text-center lg:text-left relative">
//                   <div className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-light tracking-wide">
//                     {s.currentVal}+
//                   </div>
//                   <div className="font-body text-parchment/40 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.15em] uppercase mt-1">
//                     {s.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Block: Premium Framed Imagery Showcase */}
//           <div className="anim-item opacity-0 mt-6 lg:mt-0 lg:col-span-5 relative flex items-center justify-center h-[360px] sm:h-[460px] lg:h-[540px] w-full">
            
//             {/* Concentric Decorative Radial Rings */}
//             <div className="absolute border border-gold/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[320px] md:h-[320px]" style={{ animation: "heroRotate 22s linear infinite" }} />
//             <div className="absolute border border-dashed border-gold/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[410px] md:h-[410px]" style={{ animation: "heroRotate 32s linear infinite reverse" }} />
            
//             {/* Main Soft Ambient Glow */}
//             <div className="absolute inset-0 bg-gold/5 blur-[70px] md:blur-[90px] rounded-full" />

//             {/* Frame 1: Core Primary Piece */}
//             <div className="absolute w-[68%] h-[72%] top-[4%] left-[2%] border border-gold/20 p-1 bg-ink/40 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-gold/5 group z-10">
//               <div className="w-full h-full overflow-hidden bg-neutral-900 relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600"
//                   alt="Featured Arabic Calligraphy"
//                   className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 brightness-[0.85] contrast-[1.05]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60 pointer-events-none" />
//               </div>
//               <div className="absolute bottom-3 left-3 z-20 text-[8px] sm:text-[9px] tracking-[0.15em] text-parchment/90 uppercase bg-ink/80 border border-gold/20 px-2.5 py-1.5 font-medium">
//                 Featured Work
//               </div>
//             </div>

//             {/* Frame 2: Secondary Intersecting Showcase */}
//             <div className="absolute w-[50%] h-[50%] bottom-[4%] right-0 border border-parchment/10 p-1 bg-ink/70 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-gold/5 group z-20">
//               <div className="w-full h-full overflow-hidden bg-neutral-900 relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=500"
//                   alt="Detailed Calligraphy Artwork"
//                   className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 brightness-[0.85] contrast-[1.05]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-40 pointer-events-none" />
//               </div>
//               <div className="absolute bottom-3 left-3 z-20 text-[8px] sm:text-[9px] tracking-[0.15em] text-parchment/90 uppercase bg-ink/80 border border-parchment/10 px-2.5 py-1.5 font-medium">
//                 Latest Piece
//               </div>
//             </div>

//             {/* Decorative Vector Dot Grid Chart */}
//             <div className="absolute bottom-[20%] left-[-15px] z-20 hidden sm:block pointer-events-none">
//               <svg width="50" height="50" viewBox="0 0 60 60">
//                 {[10, 25, 40].map((cx) =>
//                   [10, 25, 40].map((cy) => (
//                     <circle
//                       key={`${cx}-${cy}`}
//                       cx={cx}
//                       cy={cy}
//                       r={cx === 25 && cy === 25 ? 2.2 : 1.4}
//                       fill={`rgba(201,147,58,${cx === 25 && cy === 25 ? 0.65 : 0.25})`}
//                     />
//                   ))
//                 )}
//               </svg>
//             </div>

//             <div className="absolute left-[-16px] top-[35%] w-[2px] h-16 bg-[linear-gradient(180deg,transparent,#C9933A,transparent)] z-20 hidden lg:block" />
//           </div>

//         </div>

//         {/* Global Minimal Scroll Anchor */}
//         <div
//           className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-30"
//           onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//         >
//           <span className="font-body text-parchment/40 text-[8px] sm:text-[9px] tracking-[0.25em] uppercase">Explore</span>
//           <ChevronDown size={12} className="text-gold animate-bounce" />
//         </div>
//       </section>
//     </>
//   );
// }


// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useAnimation, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
// import { ArrowRight, Instagram, Dribbble, Linkedin, ChevronDown, Sparkles, PenTool, Brush, Feather } from 'lucide-react';

// const Hero = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.1 });
//   const controls = useAnimation();

//   // Mouse position state tracking
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Framer Motion values for 3D Tilt Effect
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth springs for lag-free 3D tilt
//   const springConfig = { damping: 25, stiffness: 120 };
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
    
//     const rect = containerRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
    
//     // Normalize coordinates to range between -0.5 and 0.5
//     const mouseX = (e.clientX - rect.left) / width - 0.5;
//     const mouseY = (e.clientY - rect.top) / height - 0.5;
    
//     x.set(mouseX);
//     y.set(mouseY);
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   // Updated text content as requested
//   const textLines = [
//     { text: "WHERE", highlight: false },
//     { text: "CREATIVITY", highlight: false },
//     { text: "MEETS", highlight: false },
//     { text: "PERFECTION.", highlight: true }
//   ];

//   return (
//     <section 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-['Inter'] flex items-center"
//     >
//       {/* Background Aurora Effect */}
//       <DynamicBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

//       <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20 lg:flex-row lg:py-0">
        
//         {/* Left Column: Typography & Content */}
//         <div className="flex w-full flex-col items-start justify-center lg:w-1/2 lg:pr-12">
          
//           {/* Updated Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 y: 0,
//                 transition: { duration: 0.6, ease: 'easeOut' }
//               }
//             }}
//             className="group mb-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 px-5 py-2 backdrop-blur-md"
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
//             >
//               <Sparkles className="h-4 w-4 text-purple-400" />
//             </motion.div>
//             <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
//               CONTEMPORARY ARTIST
//             </span>
//           </motion.div>

//           {/* Updated Heading */}
//          <div className="mb-4 space-y-1">
//   {textLines.map((line, index) => (
//     <div key={index} className="overflow-hidden">
//       <motion.h1
//         initial={{ y: "100%", rotate: 2 }}
//         animate={controls}
//         variants={{
//           visible: { 
//             y: 0, 
//             rotate: 0,
//             transition: { 
//               duration: 1, 
//               delay: index * 0.12,
//               ease: [0.16, 1, 0.3, 1] 
//             }
//           }
//         }}
//         className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] leading-none ${
//           line.highlight 
//             ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'
//             : 'text-white'
//         }`}
//       >
//         {line.text}
//       </motion.h1>
//     </div>
//   ))}
// </div>

//           {/* Updated Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 y: 0,
//                 transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' }
//               }
//             }}
//             className="mb-8 max-w-lg text-base text-white/60 sm:text-lg leading-relaxed"
//           >
//             Transforming ideas into extraordinary works of art through innovation, craftsmanship, and artistic excellence.
//           </motion.p>

//           {/* Interactive CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 y: 0,
//                 transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' }
//               }
//             }}
//             className="flex flex-wrap items-center gap-4"
//           >
//             <motion.button
//               whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: '0 0 40px rgba(139,92,246,0.3)'
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/10 transition-all duration-300"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Gallery
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-5 w-5" />
//                 </motion.span>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             </motion.button>

//             <motion.button
//               whileHover={{ 
//                 scale: 1.03,
//                 borderColor: 'rgba(255,255,255,0.25)',
//                 backgroundColor: 'rgba(255,255,255,0.08)'
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="group relative rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300"
//             >
//               <span className="relative z-10">View Portfolio</span>
//             </motion.button>
//           </motion.div>

         
//         </div>

//         {/* Right Column: Interactive 3D Art Frame */}
//         <div className="relative mt-16 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 scale: 1,
//                 rotateY: 0,
//                 transition: { duration: 1.2, delay: 0.3, ease: 'easeOut' }
//               }
//             }}
//             className="relative"
//             style={{ perspective: '1200px' }}
//           >
//             {/* Orbital Rings */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div
//                 className="absolute h-[520px] w-[520px] rounded-full border border-purple-500/10"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//               />
//               <motion.div
//                 className="absolute h-[420px] w-[420px] rounded-full border border-cyan-500/10"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//               />
//               <motion.div
//                 className="absolute h-[480px] w-[480px] rounded-full border border-dashed border-pink-500/5"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
//               />
//             </div>

//             {/* Interactive 3D Card Frame */}
//             <motion.div
//               style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: 'preserve-3d',
//               }}
//               className="relative transition-all duration-200 ease-out"
//             >
//               <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3 backdrop-blur-md">
//                 <div className="relative h-[400px] w-[320px] overflow-hidden rounded-2xl md:h-[500px] md:w-[400px]">
//                   <img
//                     src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&auto=format&fit=crop&q=80"
//                     alt="Artistic Creation"
//                     className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
                  
//                   {/* Overlays */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10" />
//                   <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(139,92,246,0.15)]" />
//                 </div>
//               </div>

//               {/* Floating Info Cards */}
//               <FloatingInfoCard
//                 className="absolute -left-10 top-12 md:-left-14 md:top-16"
//                 delay={0.8}
//                 icon={PenTool}
//                 title="Artworks"
//                 value="200+"
//                 gradient="from-purple-500 to-pink-500"
//               />
              
//               <FloatingInfoCard
//                 className="absolute -right-10 top-1/3 md:-right-14"
//                 delay={1.0}
//                 icon={Brush}
//                 title="Projects"
//                 value="150+"
//                 gradient="from-cyan-500 to-blue-500"
//               />
              
//               <FloatingInfoCard
//                 className="absolute -bottom-6 left-1/4"
//                 delay={1.2}
//                 icon={Feather}
//                 title="Clients"
//                 value="80+"
//                 gradient="from-pink-500 to-purple-500"
//               />
//             </motion.div>

//             {/* Decorative Orbs */}
//             <FloatingOrb className="absolute -left-20 -top-20 h-40 w-40 bg-purple-500/10" delay={0.5} />
//             <FloatingOrb className="absolute -right-20 bottom-16 h-36 w-36 bg-cyan-500/10" delay={1.5} />
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Progress Ring */}
//       <ScrollIndicator />
//     </section>
//   );
// };

// /* -------------------------------------------------------------------------- */
// /*                              Helper Components                             */
// /* -------------------------------------------------------------------------- */

// // Background design containing smooth particles & Aurora effect
// const DynamicBackground = ({ mouseX, mouseY }) => {
//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10">
//       <div className="absolute inset-0 bg-[#050505]" />
      
//       {/* Animated Aurora Glows */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         animate={{
//           background: [
//             'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)',
//             'radial-gradient(circle at 80% 70%, rgba(6,182,212,0.2) 0%, transparent 50%)',
//             'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, transparent 60%)',
//             'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)',
//           ]
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//       />

//       {/* Interactive Cursor Spotlight */}
//       <motion.div
//         className="absolute h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent 60%)',
//           left: mouseX - 300,
//           top: mouseY - 300,
//         }}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />

//       {/* Grid */}
//       <div className="absolute inset-0" style={{ perspective: '1000px' }}>
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       {/* Noise Texture */}
//       <div className="absolute inset-0 opacity-[0.03]" style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//         backgroundSize: '200px 200px',
//       }} />

//       {/* Floating Particles */}
//       {[...Array(30)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute h-1 w-1 rounded-full bg-white/10"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -40, 0],
//             opacity: [0.1, 0.5, 0.1],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 8,
//             repeat: Infinity,
//             delay: Math.random() * 4,
//             ease: 'easeInOut',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// const FloatingInfoCard = ({ className, delay, icon: Icon, title, value, gradient }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30, scale: 0.85 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.8, delay, ease: 'easeOut' }}
//       whileHover={{ 
//         scale: 1.05,
//         borderColor: 'rgba(139,92,246,0.35)',
//         boxShadow: '0 15px 35px rgba(139,92,246,0.1)'
//       }}
//       style={{ transformStyle: 'preserve-3d', translateZ: '50px' }}
//       className={`min-w-[120px] rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md transition-colors duration-300 ${className}`}
//     >
//       <div className="flex items-center gap-2">
//         <div className={`rounded-lg bg-gradient-to-br ${gradient} p-1.5`}>
//           <Icon className="h-3.5 w-3.5 text-white" />
//         </div>
//         <p className="text-[10px] font-bold tracking-wider uppercase text-white/40">{title}</p>
//       </div>
//       <p className="mt-1.5 text-lg font-bold text-white">{value}</p>
//     </motion.div>
//   );
// };

// const FloatingOrb = ({ className, delay }) => {
//   return (
//     <motion.div
//       className={`rounded-full blur-3xl ${className}`}
//       animate={{
//         y: [0, -15, 0],
//         x: [0, 10, 0],
//         scale: [1, 1.05, 1],
//       }}
//       transition={{
//         duration: 8 + Math.random() * 4,
//         repeat: Infinity,
//         delay,
//         ease: 'easeInOut',
//       }}
//     />
//   );
// };

// const ScrollIndicator = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
//       setProgress(currentProgress);
//     };

//     window.addEventListener('scroll', updateProgress);
//     return () => window.removeEventListener('scroll', updateProgress);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1, delay: 1.5 }}
//       className="absolute bottom-6 left-1/2 -translate-x-1/2"
//     >
//       <div className="relative flex flex-col items-center gap-1.5">
//         <svg className="h-8 w-8 -rotate-90">
//           <circle
//             cx="16"
//             cy="16"
//             r="13"
//             fill="none"
//             stroke="rgba(255,255,255,0.05)"
//             strokeWidth="2"
//           />
//           <circle
//             cx="16"
//             cy="16"
//             r="13"
//             fill="none"
//             stroke="url(#scrollGradient)"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeDasharray={81.6} 
//             strokeDashoffset={81.6 - (81.6 * progress) / 100}
//           />
//           <defs>
//             <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#8B5CF6" />
//               <stop offset="100%" stopColor="#06B6D4" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <motion.div
//           animate={{ y: [0, 4, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <ChevronDown className="h-4 w-4 text-white/40" />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;






























































// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useAnimation, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
// import { ArrowRight, Sparkles, PenTool, Brush, Feather, ChevronDown } from 'lucide-react';

// const Hero = () => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.1 });
//   const controls = useAnimation();

//   // Mouse position state tracking
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Framer Motion values for 3D Tilt Effect
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth springs for lag-free 3D tilt
//   const springConfig = { damping: 25, stiffness: 120 };
//   const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
//   const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   // Smooth scroll handler (Just like Navbar)
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id.toLowerCase());
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;
    
//     const rect = containerRef.current.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
    
//     // Normalize coordinates to range between -0.5 and 0.5
//     const mouseX = (e.clientX - rect.left) / width - 0.5;
//     const mouseY = (e.clientY - rect.top) / height - 0.5;
    
//     x.set(mouseX);
//     y.set(mouseY);
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   // Updated text content
//   const textLines = [
//     { text: "WHERE", highlight: false },
//     { text: "CREATIVITY", highlight: false },
//     { text: "MEETS", highlight: false },
//     { text: "PERFECTION.", highlight: true }
//   ];

//   return (
//     <section 
//       id="home"
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-['Inter'] flex items-center"
//     >
//       {/* MASH PATTERN BACKGROUND - White & Bright Colors Enabled */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         {/* Pattern 1: Diagonal Lines Mash */}
//         <div className="absolute inset-0 opacity-[0.18]" style={{
//           backgroundImage: `
//             repeating-linear-gradient(
//               45deg,
//               transparent,
//               transparent 30px,
//               rgba(255,255,255,0.15) 30px,
//               rgba(255,255,255,0.15) 31px,
//               transparent 31px,
//               transparent 60px
//             ),
//             repeating-linear-gradient(
//               -45deg,
//               transparent,
//               transparent 30px,
//               rgba(6,182,212,0.2) 30px,
//               rgba(6,182,212,0.2) 31px,
//               transparent 31px,
//               transparent 60px
//             )
//           `,
//           backgroundSize: '80px 80px, 80px 80px'
//         }} />

//         {/* Pattern 2: Dot Matrix Mash */}
//         <div className="absolute inset-0 opacity-[0.15]" style={{
//           backgroundImage: `
//             radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1.5px, transparent 1.5px),
//             radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 1px, transparent 1px)
//           `,
//           backgroundSize: '35px 35px, 45px 45px',
//           backgroundPosition: '0 0, 20px 20px'
//         }} />

//         {/* Pattern 3: Geometric Overlay Mash */}
//         <div className="absolute inset-0 opacity-[0.12]" style={{
//           backgroundImage: `
//             linear-gradient(60deg, transparent 70%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0.12) 73%, transparent 73%),
//             linear-gradient(-60deg, transparent 70%, rgba(6,182,212,0.15) 70%, rgba(6,182,212,0.15) 73%, transparent 73%),
//             linear-gradient(0deg, transparent 80%, rgba(255,255,255,0.08) 80%, rgba(255,255,255,0.08) 83%, transparent 83%),
//             linear-gradient(90deg, transparent 80%, rgba(139,92,246,0.12) 80%, rgba(139,92,246,0.12) 83%, transparent 83%)
//           `,
//           backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px'
//         }} />

//         {/* Pattern 4: Triangle Mash Pattern */}
//         <div className="absolute inset-0 opacity-[0.1]" style={{
//           backgroundImage: `
//             repeating-linear-gradient(
//               45deg,
//               transparent,
//               transparent 20px,
//               rgba(255,255,255,0.1) 20px,
//               rgba(255,255,255,0.1) 21px,
//               transparent 21px,
//               transparent 40px
//             )
//           `,
//           backgroundSize: '40px 40px'
//         }} />

//         {/* Pattern 5: Wave/Curve Mash Pattern */}
//         <div className="absolute inset-0 opacity-[0.06]" style={{
//           backgroundImage: `
//             radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
//             radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.1) 0%, transparent 60%)
//           `,
//           backgroundSize: '200px 200px, 200px 200px',
//           backgroundPosition: '0 0, 100px 0'
//         }} />
//       </div>

//       {/* Background Aurora Effect */}
//       <DynamicBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

//       <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20 lg:flex-row lg:py-0">
        
//         {/* Left Column: Typography & Content */}
//         <div className="flex w-full flex-col items-start justify-center lg:w-1/2 lg:pr-12">
          
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 y: 0,
//                 transition: { duration: 0.6, ease: 'easeOut' }
//               }
//             }}
//             className="group mb-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 px-5 py-2 backdrop-blur-md"
//           >
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
//             >
//               <Sparkles className="h-4 w-4 text-purple-400" />
//             </motion.div>
//             <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
//               CONTEMPORARY ARTIST
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <div className="mb-4 space-y-1">
//             {textLines.map((line, index) => (
//               <div key={index} className="overflow-hidden">
//                 <motion.h1
//                   initial={{ y: "100%", rotate: 2 }}
//                   animate={controls}
//                   variants={{
//                     visible: { 
//                       y: 0, 
//                       rotate: 0,
//                       transition: { 
//                         duration: 1, 
//                         delay: index * 0.12,
//                         ease: [0.16, 1, 0.3, 1] 
//                       }
//                     }
//                   }}
//                   className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] leading-none ${
//                     line.highlight 
//                       ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'
//                       : 'text-white'
//                   }`}
//                 >
//                   {line.text}
//                 </motion.h1>
//               </div>
//             ))}
//           </div>

//           {/* Subtext */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 y: 0,
//                 transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' }
//               }
//             }}
//             className="mb-8 max-w-lg text-base text-white/60 sm:text-lg leading-relaxed"
//           >
//             Transforming ideas into extraordinary works of art through innovation, craftsmanship, and artistic excellence.
//           </motion.p>

//           {/* Interactive CTAs with onClick scroll logic */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 y: 0,
//                 transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' }
//               }
//             }}
//             className="flex flex-wrap items-center gap-4"
//           >
//             {/* Explore Gallery -> Scroll directly to Portfolio section */}
//             <motion.button
//               onClick={() => scrollToSection("portfolio")}
//               whileHover={{ 
//                 scale: 1.03,
//                 boxShadow: '0 0 40px rgba(139,92,246,0.3)'
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/10 transition-all duration-300 flex items-center justify-center cursor-pointer"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 Explore Gallery
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 >
//                   <ArrowRight className="h-5 w-5" />
//                 </motion.span>
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             </motion.button>

//             {/* View Profile -> Scroll directly to About section */}
//             <motion.button
//               onClick={() => scrollToSection("about")}
//               whileHover={{ 
//                 scale: 1.03,
//                 borderColor: 'rgba(255,255,255,0.25)',
//                 backgroundColor: 'rgba(255,255,255,0.08)'
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="group relative rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 flex items-center justify-center cursor-pointer"
//             >
//               <span className="relative z-10">View Profile</span>
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Right Column: Interactive 3D Art Frame */}
//         <div className="relative mt-16 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
//             animate={controls}
//             variants={{
//               visible: { 
//                 opacity: 1, 
//                 scale: 1,
//                 rotateY: 0,
//                 transition: { duration: 1.2, delay: 0.3, ease: 'easeOut' }
//               }
//             }}
//             className="relative"
//             style={{ perspective: '1200px' }}
//           >
//             {/* Orbital Rings */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <motion.div
//                 className="absolute h-[468px] w-[468px] rounded-full border border-purple-500/10"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//               />
//               <motion.div
//                 className="absolute h-[378px] w-[378px] rounded-full border border-cyan-500/10"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//               />
//               <motion.div
//                 className="absolute h-[432px] w-[432px] rounded-full border border-dashed border-pink-500/5"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
//               />
//             </div>

//             {/* Interactive 3D Card Frame */}
//             <motion.div
//               style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: 'preserve-3d',
//               }}
//               className="relative transition-all duration-200 ease-out"
//             >
//               <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3 backdrop-blur-md">
//                 <div className="relative h-[360px] w-[288px] overflow-hidden rounded-2xl md:h-[450px] md:w-[360px]">
//                   <img
//                     src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&auto=format&fit=crop&q=80"
//                     alt="Artistic Creation"
//                     className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                   />
                  
//                   {/* Overlays */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10" />
//                   <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(139,92,246,0.15)]" />
//                 </div>
//               </div>

//               {/* Floating Info Cards */}
//               <FloatingInfoCard
//                 className="absolute -left-10 top-12 md:-left-14 md:top-16"
//                 delay={0.8}
//                 icon={PenTool}
//                 title="Artworks"
//                 value="200+"
//                 gradient="from-purple-500 to-pink-500"
//               />
              
//               <FloatingInfoCard
//                 className="absolute -right-10 top-1/3 md:-right-14"
//                 delay={1.0}
//                 icon={Brush}
//                 title="Projects"
//                 value="150+"
//                 gradient="from-cyan-500 to-blue-500"
//               />
              
//               <FloatingInfoCard
//                 className="absolute -bottom-6 left-1/4"
//                 delay={1.2}
//                 icon={Feather}
//                 title="Clients"
//                 value="80+"
//                 gradient="from-pink-500 to-purple-500"
//               />
//             </motion.div>

//             {/* Decorative Orbs */}
//             <FloatingOrb className="absolute -left-20 -top-20 h-36 w-36 bg-purple-500/10" delay={0.5} />
//             <FloatingOrb className="absolute -right-20 bottom-16 h-32 w-32 bg-cyan-500/10" delay={1.5} />
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Progress Ring */}
//       <ScrollIndicator />
//     </section>
//   );
// };

// /* Helper Components */

// const DynamicBackground = ({ mouseX, mouseY }) => {
//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10">
//       <div className="absolute inset-0 bg-[#050505]" />
      
//       {/* Animated Aurora Glows */}
//       <motion.div
//         className="absolute inset-0 opacity-20"
//         animate={{
//           background: [
//             'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)',
//             'radial-gradient(circle at 80% 70%, rgba(6,182,212,0.2) 0%, transparent 50%)',
//             'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, transparent 60%)',
//             'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)',
//           ]
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//       />

//       {/* Interactive Cursor Spotlight */}
//       <motion.div
//         className="absolute h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent 60%)',
//           left: mouseX - 300,
//           top: mouseY - 300,
//         }}
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 5, repeat: Infinity }}
//       />

//       {/* Grid */}
//       <div className="absolute inset-0" style={{ perspective: '1000px' }}>
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       {/* Noise Texture */}
//       <div className="absolute inset-0 opacity-[0.03]" style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//         backgroundSize: '200px 200px',
//       }} />

//       {/* Floating Particles */}
//       {[...Array(30)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute h-1 w-1 rounded-full bg-white/20"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -40, 0],
//             opacity: [0.15, 0.6, 0.15],
//           }}
//           transition={{
//             duration: 6 + Math.random() * 8,
//             repeat: Infinity,
//             delay: Math.random() * 4,
//             ease: 'easeInOut',
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// const FloatingInfoCard = ({ className, delay, icon: Icon, title, value, gradient }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30, scale: 0.85 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 0.8, delay, ease: 'easeOut' }}
//       whileHover={{ 
//         scale: 1.05,
//         borderColor: 'rgba(255,255,255,0.25)',
//         boxShadow: '0 15px 35px rgba(255,255,255,0.05)'
//       }}
//       style={{ transformStyle: 'preserve-3d', translateZ: '50px' }}
//       className={`min-w-[120px] rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md transition-colors duration-300 ${className}`}
//     >
//       <div className="flex items-center gap-2">
//         <div className={`rounded-lg bg-gradient-to-br ${gradient} p-1.5`}>
//           <Icon className="h-3.5 w-3.5 text-white" />
//         </div>
//         <p className="text-[10px] font-bold tracking-wider uppercase text-white/40">{title}</p>
//       </div>
//       <p className="mt-1.5 text-lg font-bold text-white">{value}</p>
//     </motion.div>
//   );
// };

// const FloatingOrb = ({ className, delay }) => {
//   return (
//     <motion.div
//       className={`rounded-full blur-3xl ${className}`}
//       animate={{
//         y: [0, -15, 0],
//         x: [0, 10, 0],
//         scale: [1, 1.05, 1],
//       }}
//       transition={{
//         duration: 8 + Math.random() * 4,
//         repeat: Infinity,
//         delay,
//         ease: 'easeInOut',
//       }}
//     />
//   );
// };

// const ScrollIndicator = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const updateProgress = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
//       setProgress(currentProgress);
//     };

//     window.addEventListener('scroll', updateProgress);
//     return () => window.removeEventListener('scroll', updateProgress);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1, delay: 1.5 }}
//       className="absolute bottom-6 left-1/2 -translate-x-1/2"
//     >
//       <div className="relative flex flex-col items-center gap-1.5">
//         <svg className="h-8 w-8 -rotate-90">
//           <circle
//             cx="16"
//             cy="16"
//             r="13"
//             fill="none"
//             stroke="rgba(255,255,255,0.05)"
//             strokeWidth="2"
//           />
//           <circle
//             cx="16"
//             cy="16"
//             r="13"
//             fill="none"
//             stroke="url(#scrollGradient)"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeDasharray={81.6} 
//             strokeDashoffset={81.6 - (81.6 * progress) / 100}
//           />
//           <defs>
//             <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#8B5CF6" />
//               <stop offset="100%" stopColor="#06B6D4" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <motion.div
//           animate={{ y: [0, 4, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <ChevronDown className="h-4 w-4 text-white/40" />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;





import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, PenTool, Brush, Feather, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Mouse position state tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Framer Motion values for 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for lag-free 3D tilt
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Text content
  const textLines = [
    { text: "WHERE", highlight: false },
    { text: "CREATIVITY", highlight: false },
    { text: "MEETS", highlight: false },
    { text: "PERFECTION.", highlight: true }
  ];

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-['Inter'] flex items-center"
    >
      {/* MASH PATTERN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              rgba(255,255,255,0.15) 30px,
              rgba(255,255,255,0.15) 31px,
              transparent 31px,
              transparent 60px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              rgba(6,182,212,0.2) 30px,
              rgba(6,182,212,0.2) 31px,
              transparent 31px,
              transparent 60px
            )
          `,
          backgroundSize: '80px 80px, 80px 80px'
        }} />

        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1.5px, transparent 1.5px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '35px 35px, 45px 45px',
          backgroundPosition: '0 0, 20px 20px'
        }} />

        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `
            linear-gradient(60deg, transparent 70%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0.12) 73%, transparent 73%),
            linear-gradient(-60deg, transparent 70%, rgba(6,182,212,0.15) 70%, rgba(6,182,212,0.15) 73%, transparent 73%),
            linear-gradient(0deg, transparent 80%, rgba(255,255,255,0.08) 80%, rgba(255,255,255,0.08) 83%, transparent 83%),
            linear-gradient(90deg, transparent 80%, rgba(139,92,246,0.12) 80%, rgba(139,92,246,0.12) 83%, transparent 83%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 25px 25px, 25px 25px'
        }} />

        <div className="absolute inset-0 opacity-[0.1]" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.1) 20px,
              rgba(255,255,255,0.1) 21px,
              transparent 21px,
              transparent 40px
            )
          `,
          backgroundSize: '40px 40px'
        }} />

        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.1) 0%, transparent 60%)
          `,
          backgroundSize: '200px 200px, 200px 200px',
          backgroundPosition: '0 0, 100px 0'
        }} />
      </div>

      {/* Background Aurora Effect */}
      <DynamicBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-20 lg:flex-row lg:py-0">
        
        {/* Left Column: Typography & Content */}
        <div className="flex w-full flex-col items-start justify-center lg:w-1/2 lg:pr-12">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' }
              }
            }}
            className="group mb-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 px-5 py-2 backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
              CONTEMPORARY ARTIST
            </span>
          </motion.div>

          {/* Heading */}
          <div className="mb-4 space-y-1 w-full">
            {textLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", rotate: 2 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      y: 0, 
                      rotate: 0,
                      transition: { 
                        duration: 1, 
                        delay: index * 0.12,
                        ease: [0.16, 1, 0.3, 1] 
                      }
                    }
                  }}
                  className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] leading-none ${
                    line.highlight 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.6, ease: 'easeOut' }
              }
            }}
            className="mb-8 max-w-lg text-base text-white/60 sm:text-lg leading-relaxed"
          >
            Transforming ideas into extraordinary works of art through innovation, craftsmanship, and artistic excellence.
          </motion.p>

          {/* Updated Responsive Row Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.8, ease: 'easeOut' }
              }
            }}
            className="flex flex-row items-center gap-3 w-full sm:w-auto"
          >
            {/* Explore Gallery Button */}
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 40px rgba(139,92,246,0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-3.5 sm:px-8 sm:py-4 font-semibold text-white text-sm sm:text-base shadow-lg shadow-purple-500/10 transition-all duration-300 flex flex-1 sm:flex-none items-center justify-center cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                Explore Gallery
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>

            {/* View Profile Button */}
            <motion.button
              onClick={() => scrollToSection("about")}
              whileHover={{ 
                scale: 1.03,
                borderColor: 'rgba(255,255,255,0.25)',
                backgroundColor: 'rgba(255,255,255,0.08)'
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 sm:px-8 sm:py-4 font-semibold text-white text-sm sm:text-base backdrop-blur-sm transition-all duration-300 flex flex-1 sm:flex-none items-center justify-center cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">View Profile</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column: Interactive 3D Art Frame */}
        <div className="relative mt-20 flex w-full items-center justify-center lg:mt-0 lg:w-1/2 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
                transition: { duration: 1.2, delay: 0.3, ease: 'easeOut' }
              }
            }}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            {/* Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute h-[320px] w-[320px] md:h-[468px] md:w-[468px] rounded-full border border-purple-500/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute h-[260px] w-[260px] md:h-[378px] md:w-[378px] rounded-full border border-cyan-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute h-[300px] w-[300px] md:h-[432px] md:w-[432px] rounded-full border border-dashed border-pink-500/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Interactive 3D Card Frame */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative transition-all duration-200 ease-out"
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3 backdrop-blur-md">
                <div className="relative h-[280px] w-[220px] overflow-hidden rounded-2xl sm:h-[360px] sm:w-[288px] md:h-[450px] md:w-[360px]">
                  <img
                    src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&auto=format&fit=crop&q=80"
                    alt="Artistic Creation"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_60px_rgba(139,92,246,0.15)]" />
                </div>
              </div>

              {/* Updated Floating Info Cards - Responsive coordinates prevent overflow */}
              <FloatingInfoCard
                className="absolute -left-4 top-4 sm:-left-10 sm:top-12 md:-left-14 md:top-16"
                delay={0.8}
                icon={PenTool}
                title="Artworks"
                value="200+"
                gradient="from-purple-500 to-pink-500"
              />
              
              <FloatingInfoCard
                className="absolute -right-4 top-1/3 sm:-right-10 md:-right-14"
                delay={1.0}
                icon={Brush}
                title="Projects"
                value="150+"
                gradient="from-cyan-500 to-blue-500"
              />
              
              <FloatingInfoCard
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-bottom-6 sm:left-1/4 sm:translate-x-0"
                delay={1.2}
                icon={Feather}
                title="Clients"
                value="80+"
                gradient="from-pink-500 to-purple-500"
              />
            </motion.div>

            {/* Decorative Orbs */}
            <FloatingOrb className="absolute -left-10 -top-10 sm:-left-20 sm:-top-20 h-24 w-24 sm:h-36 sm:w-36 bg-purple-500/10" delay={0.5} />
            <FloatingOrb className="absolute -right-10 bottom-8 sm:-right-20 sm:bottom-16 h-20 w-20 sm:h-32 sm:w-32 bg-cyan-500/10" delay={1.5} />
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Ring */}
      <ScrollIndicator />
    </section>
  );
};

/* Helper Components */

const DynamicBackground = ({ mouseX, mouseY }) => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Animated Aurora Glows */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(6,182,212,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.1) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="absolute h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08), transparent 60%)',
          left: mouseX - 300,
          top: mouseY - 300,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Grid */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const FloatingInfoCard = ({ className, delay, icon: Icon, title, value, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.05,
        borderColor: 'rgba(255,255,255,0.25)',
        boxShadow: '0 15px 35px rgba(255,255,255,0.05)'
      }}
      style={{ transformStyle: 'preserve-3d', translateZ: '50px' }}
      className={`min-w-[95px] sm:min-w-[120px] rounded-xl border border-white/10 bg-black/75 p-2.5 sm:p-4 backdrop-blur-md transition-colors duration-300 ${className}`}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className={`rounded-lg bg-gradient-to-br ${gradient} p-1 sm:p-1.5`}>
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
        </div>
        <p className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-white/40">{title}</p>
      </div>
      <p className="mt-1 text-sm sm:text-lg font-bold text-white">{value}</p>
    </motion.div>
  );
};

const FloatingOrb = ({ className, delay }) => {
  return (
    <motion.div
      className={`rounded-full blur-3xl ${className}`}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
};

const ScrollIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <div className="relative flex flex-col items-center gap-1.5">
        <svg className="h-8 w-8 -rotate-90">
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="url(#scrollGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={81.6} 
            strokeDashoffset={81.6 - (81.6 * progress) / 100}
          />
          <defs>
            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-4 w-4 text-white/40" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;