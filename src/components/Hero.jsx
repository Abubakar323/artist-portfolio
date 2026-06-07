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


import { useEffect, useRef } from "react";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import { artistInfo } from "../data/portfolioData";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll(".anim-item");
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12 + 0.2}s`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-16 md:py-20 lg:py-0"
    >
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Decorative Arabic Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[40vw] lg:text-[35vw] text-white/[0.02] select-none leading-none animate-pulse z-0">
          ایمان
        </div>

        {/* Premium Geometric Accent Lines */}
        <div className="hidden lg:block absolute top-0 left-12 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="hidden lg:block absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-40 md:h-40 border border-gold/5 rotate-45 animate-spin [animation-duration:25s]" />

        {/* Fine Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Container - Reduced top padding by exactly 50% */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 md:pt-12 lg:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left Side: Professional Content */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">

          {/* Pre-title */}
          <div className="anim-item opacity-0 flex items-center gap-2 text-gold tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs uppercase mb-3 font-body font-medium">
            <Sparkles size={12} className="text-gold/80 animate-pulse" />
            <span>Visual Artist &amp; Calligrapher</span>
          </div>

          {/* Main Name */}
          <h1
            className="anim-item my-4 opacity-0 font-aston text-2xl sm:text-4xl md:text-5xl lg:text-6xl normal-case leading-tight pt-1 pb-1 select-none"
            style={{ color: "white", filter: "drop-shadow(0 4px 20px rgba(201,147,58,0.15))" }}
          >
            Eman Arshad
          </h1>

          {/* English Description/Tagline */}
          <p className="anim-item opacity-0 font-body text-parchment/60 tracking-wide text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mt-2 mb-6 sm:mb-8">
            {artistInfo?.tagline || "Crafting premium visual art and contemporary Arabic calligraphy that blends traditional heritage with modern elegance."}
          </p>

          {/* Action Buttons */}
          <div className="anim-item opacity-0 inline-flex flex-row gap-3 items-center">
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-gold text-ink px-5 sm:px-8 py-3 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body font-semibold hover:bg-opacity-95 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Portfolio</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-parchment/20 text-parchment px-5 sm:px-8 py-3 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap"
            >
              Commission
            </button>
          </div>

          {/* Stats Section */}
          <div className="anim-item opacity-0 flex flex-row justify-between lg:justify-start lg:gap-12 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-parchment/10">
            {[
              { num: "100+", label: "Artworks" },
              { num: "50+", label: "Happy Clients" },
              { num: "5+", label: "Years Exp." },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-xl sm:text-2xl md:text-3xl text-gold font-light">{s.num}</div>
                <div className="font-body text-parchment/40 text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Premium Art Images Display */}
        <div className="anim-item opacity-0 mt-4 lg:col-span-5 relative flex items-center justify-center h-[380px] sm:h-[450px] md:h-[550px] w-full">
          {/* Main Background Glow */}
          <div className="absolute inset-0 bg-gold/5 blur-[60px] md:blur-[80px] rounded-full" />

          {/* Frame 1: Main Large Artwork */}
          <div className="absolute w-[68%] h-[72%] top-2 left-4 border border-gold/20 p-1.5 bg-ink/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 hover:scale-[1.02] z-10">
            <div className="w-full h-full overflow-hidden bg-neutral-900 relative group">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600"
                alt="Featured Arabic Calligraphy"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Frame 2: Secondary Overlapping Artwork */}
          <div className="absolute w-[52%] h-[52%] bottom-4 right-2 border border-parchment/10 p-1.5 bg-ink/80 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.03] z-20">
            <div className="w-full h-full overflow-hidden bg-neutral-900 relative group">
              <img
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=500"
                alt="Detailed Calligraphy Artwork"
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>

      </div>

      {/* Minimal Scroll Indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-body text-parchment/40 text-[9px] tracking-[0.25em] uppercase">Explore</span>
        <ChevronDown size={12} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}