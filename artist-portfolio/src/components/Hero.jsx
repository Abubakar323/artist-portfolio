// import { useEffect, useRef } from "react";
// import { ChevronDown } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const items = heroRef.current?.querySelectorAll(".anim-item");
//     items?.forEach((el, i) => {
//       el.style.animationDelay = `${i * 0.15 + 0.3}s`;
//       el.classList.add("animate-fade-up");
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
//     >
//       {/* Decorative background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large decorative Arabic letter */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-arabic text-[40vw] text-white/3 select-none leading-none animate-pulse-gold">
//           ب
//         </div>
//         {/* Gold accent lines */}
//         <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
//         <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
//         <div className="absolute top-20 left-20 w-32 h-32 border border-gold/10 rotate-45 animate-float" />
//         <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold/10 rotate-12 animate-float" style={{ animationDelay: "2s" }} />
//         {/* Noise texture overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       {/* Hero content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         {/* Pre-title */}
//         <p className="anim-item opacity-0 font-body text-gold tracking-[0.4em] text-xs uppercase mb-6">
//           ✦ Visual Artist & Calligrapher ✦
//         </p>

//         {/* Main name */}
//         <h1 className="anim-item opacity-0 font-display text-6xl md:text-8xl lg:text-9xl font-light text-parchment leading-[0.9] mb-4">
//           {artistInfo.name}
//         </h1>

//         {/* Arabic tagline */}
//         <p className="anim-item opacity-0 font-arabic text-3xl md:text-4xl text-gold/80 mt-4 mb-2" dir="rtl">
//           فنان · رسام · خطاط
//         </p>

//         {/* English tagline */}
//         <p className="anim-item opacity-0 font-body text-parchment/50 tracking-[0.2em] text-sm uppercase mt-2 mb-12">
//           {artistInfo.tagline}
//         </p>

//         {/* CTA buttons */}
//         <div className="anim-item opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button
//             onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//             className="bg-gold text-ink px-10 py-4 text-xs tracking-[0.25em] uppercase font-body font-medium hover:bg-gold-light transition-all duration-300 hover:scale-105"
//           >
//             View My Work
//           </button>
//           <button
//             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//             className="border border-parchment/30 text-parchment px-10 py-4 text-xs tracking-[0.25em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300"
//           >
//             Commission Art
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="anim-item opacity-0 flex justify-center gap-12 mt-16 pt-12 border-t border-parchment/10">
//           {[
//             { num: "100+", label: "Artworks" },
//             { num: "50+", label: "Clients" },
//             { num: "5+", label: "Years" },
//           ].map((s) => (
//             <div key={s.label} className="text-center">
//               <div className="font-display text-3xl text-gold font-light">{s.num}</div>
//               <div className="font-body text-parchment/40 text-xs tracking-[0.2em] uppercase mt-1">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
//         <span className="font-body text-parchment/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
//         <ChevronDown size={16} className="text-gold/50" />
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
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-20 lg:py-0"
//     >


//       {/* Decorative Background Overlay */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large Decorative Arabic Letter */}
//         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 font-arabic text-[35vw] text-white/[0.02] select-none leading-none animate-pulse-gold hidden lg:block">
//           ایمان        </div>

//         {/* Premium Geometric Accent Lines */}
//         <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
//         <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
//         <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-gold/5 rotate-45 animate-float" />

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
//           <div className="anim-item opacity-0 flex items-center gap-2 text-gold tracking-[0.35em] text-xs uppercase mb-6 font-body font-medium">
//             <Sparkles size={14} className="text-gold/80 animate-pulse" />
//             <span>Visual Artist & Calligrapher</span>
//           </div>

//           {/* Main Name */}
//           <h1 className="anim-item opacity-0 font-display text-5xl md:text-7xl lg:text-8xl font-light text-parchment leading-[1.05] tracking-tight mb-4">
//             Eman Arts
//           </h1>

//           {/* Arabic Tagline */}
//           {/* <p className="anim-item opacity-0 font-arabic text-3xl md:text-4xl text-gold/90 my-3 tracking-wide" dir="rtl">
//             فنان · رسام · خطاط
//           </p> */}

//           {/* English Description/Tagline */}
//           <p className="anim-item opacity-0 font-body text-parchment/60 tracking-wide text-sm md:text-base max-w-xl leading-relaxed mb-10">
//             {artistInfo.tagline || "Crafting premium visual art and contemporary Arabic calligraphy that blends traditional heritage with modern elegance."}
//           </p>

//           {/* Action Buttons */}
//           <div className="anim-item opacity-0 flex flex-wrap gap-4 items-center">
//             <button
//               onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//               className="group bg-gold text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold hover:bg-gold-light transition-all duration-300 flex items-center gap-2"
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
//           <div className="anim-item opacity-0 flex gap-12 mt-16 pt-8 border-t border-parchment/10">
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
//         <div className="anim-item opacity-0 lg:col-span-5 relative flex items-center justify-center h-[450px] md:h-[550px] w-full">
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
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
//            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
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
      // Dynamic staggered entry delays smoothly attached
      el.style.animationDelay = `${i * 0.12 + 0.2}s`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink py-20 lg:py-0"
    >
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Decorative Arabic Letter */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 font-arabic text-[35vw] text-white/[0.02] select-none leading-none animate-pulse hidden lg:block">
          ایمان
        </div>

        {/* Premium Geometric Accent Lines */}
        <div className="absolute top-0 left-12 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-gold/5 rotate-45 animate-spin [animation-duration:25s]" />

        {/* Fine Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side: Professional Content */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          
          {/* Pre-title */}
          <div className="anim-item opacity-0 flex items-center gap-2 text-gold tracking-[0.35em] text-xs uppercase mb-2 font-body font-medium">
            <Sparkles size={14} className="text-gold/80 animate-pulse" />
            <span>Visual Artist & Calligrapher</span>
          </div>

          {/* Main Name - Handled with your specific spacing overrides */}
          <h1 className="anim-item mt-3 mb-5 opacity-0 font-aston text-3xl sm:text-4xl md:text-5xl lg:text-6xl normal-case text-parchment leading-[1.5] pt-2 pb-1 drop-shadow-[0_4px_20px_rgba(201,147,58,0.15)] select-none">
            Eman Arshad
          </h1>
          
          {/* English Description/Tagline */}
          <p className="anim-item opacity-0 font-body text-parchment/60 tracking-wide text-sm md:text-base max-w-xl leading-relaxed mb-8 mt-2">
            {artistInfo?.tagline || "Crafting premium visual art and contemporary Arabic calligraphy that blends traditional heritage with modern elegance."}
          </p>

          {/* Action Buttons */}
          <div className="anim-item opacity-0 flex flex-wrap gap-4 items-center mt-2">
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-gold text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase font-body font-semibold hover:bg-opacity-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-parchment/20 text-parchment px-8 py-4 text-xs tracking-[0.2em] uppercase font-body hover:border-gold hover:text-gold transition-all duration-300"
            >
              Commission Art
            </button>
          </div>

          {/* Stats Section */}
          <div className="anim-item opacity-0 flex gap-12 mt-14 pt-8 border-t border-parchment/10">
            {[
              { num: "100+", label: "Artworks Created" },
              { num: "50+", label: "Happy Clients" },
              { num: "5+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl md:text-3xl text-gold font-light">{s.num}</div>
                <div className="font-body text-parchment/40 text-[10px] tracking-[0.15em] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Premium Art Images Display - Implemented with your mt-5 spacing rule */}
        <div className="anim-item opacity-0 mt-5 lg:col-span-5 relative flex items-center justify-center h-[450px] md:h-[550px] w-full">
          {/* Main Background Glow */}
          <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full" />

          {/* Frame 1: Main Large Artwork */}
          <div className="absolute w-[70%] h-[75%] top-4 left-6 border border-gold/20 p-2 bg-ink/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 hover:scale-[1.02] z-10">
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
          <div className="absolute w-[55%] h-[55%] bottom-6 right-2 border border-parchment/10 p-2 bg-ink/80 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:scale-[1.03] z-20">
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-body text-parchment/40 text-[10px] tracking-[0.3em] uppercase">Explore</span>
        <ChevronDown size={14} className="text-gold animate-bounce" />
      </div>
    </section>
  );
}