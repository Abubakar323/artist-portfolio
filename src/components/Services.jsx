// import { useEffect, useRef } from "react";
// import * as Icons from "lucide-react";
// import { services } from "../data/portfolioData";

// export default function Services() {
//   const sectionRef = useRef(null);

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
//     <section id="services" ref={sectionRef} className="py-28 bg-[#f8f5f0] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header Section */}
//         <div className="text-center mb-24">
//           {/* <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//           >
//             <p className="font-body text-gold tracking-[0.4em] text-xs uppercase mb-3">
//               ✦ Studio Offerings ✦
//             </p>
//           </div> */}

//           <div
//             className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4"
//             style={{
//               borderColor: "rgba(201, 147, 58, 0.2)", // 20% opacity ke sath premium gold border
//               backgroundColor: "transparent"          // Background bilkul transparent (koi color nahi)
//             }}
//           >
//             <span
//               className="text-[10px] uppercase tracking-[0.3em] font-medium"
//               style={{ color: "rgb(201, 147, 58)" }}
//             >
//               ✦ Studio Offerings ✦
//             </span>
//           </div>
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//           >
//             <h2 className="font-display text-4xl md:text-5xl font-light text-ink tracking-wide mb-5">
//               Artistic Services
//             </h2>
//           </div>
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//           >
//             <p className="font-body text-ink/60 text-sm max-w-xl mx-auto tracking-wide leading-relaxed">
//               Every creation is born from a blend of traditional discipline and modern minimalism.
//               Accepting premium commissions for private collections and interior spaces.
//             </p>
//           </div>
//         </div>

//         {/* Services Grid (Exact Curved-Notch Tag UI) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
//           {services.map((service, i) => {
//             const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

//             return (
//               <div
//                 key={i}
//                 className="reveal group relative bg-white border border-transparent rounded-[1.5rem] p-9 min-h-[380px] flex flex-col justify-between transition-all duration-500 cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] hover:border-gold/20 overflow-hidden"
//                 style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//               >
//                 {/* Custom Curved Notch Top-Right Corner */}
//                 <div className="absolute top-0 right-0 w-12 h-12 bg-[#f8f5f0] rounded-bl-[1.5rem] transition-colors duration-500 z-10">
//                   <div className="absolute top-0 right-12 w-4 h-4 bg-white group-hover:bg-[#fbf9f5] rounded-tr-[1rem] transition-colors duration-500" />
//                   <div className="absolute top-12 right-0 w-4 h-4 bg-white group-hover:bg-[#fbf9f5] rounded-tr-[1rem] transition-colors duration-500" />
//                   <div className="w-full h-full bg-[#f6f1e7] opacity-40 rounded-bl-[1.5rem]" />
//                 </div>

//                 {/* Soft Radial Core Glow on Card Hover */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

//                 <div className="relative z-20">
//                   {/* Icon Box */}
//                   <div className="w-14 h-14 rounded-[1rem] bg-[#f7f5f1] group-hover:bg-amber-50 flex items-center justify-center text-ink/60 group-hover:text-gold transition-all duration-500 mb-8 shadow-inner">
//                     <IconComponent size={24} strokeWidth={1.2} />
//                   </div>

//                   {/* Title */}
//                   <h3 className="font-display text-xl font-normal tracking-wide text-ink mb-4 transition-colors duration-500 group-hover:text-gold">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="font-body text-ink/60 text-xs leading-relaxed tracking-wide font-light transition-colors duration-500 group-hover:text-ink/80">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Highlight Line Trigger */}
//                 <div className="relative z-20 pt-6">
//                   <div className="w-0 group-hover:w-10 h-[2px] bg-gold/70 transition-all duration-500 ease-out rounded-full" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Process Section with Absolute Structural Premium Highlights & Drop Shadow */}
//         <div
//           className="reveal bg-ink text-parchment p-12 md:p-20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.02] shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
//           style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//         >
//           {/* Enhanced Subtle Ambient Lighting Background Elements */}
//           <div className="absolute right-0 top-0 w-96 h-96 bg-gold/[0.02] blur-[120px] rounded-full pointer-events-none" />
//           <div className="absolute left-1/3 bottom-0 w-80 h-40 bg-gold/[0.01] blur-[80px] rounded-full pointer-events-none" />

//           {/* Section Header Text */}
//           <div className="text-center mb-20 relative z-10">
//   <div 
//     className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4"
//     style={{ 
//       borderColor: "rgba(201, 147, 58, 0.2)", // Wahi premium gold color 20% opacity ke sath
//       backgroundColor: "transparent"          // Background completely transparent (no color)
//     }}
//   >
//     <span className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: "rgb(201, 147, 58)" }}>
//       ✦ The Commission Workflow ✦
//     </span>
//   </div>

//   <h3 className="font-display text-3xl md:text-4xl font-light tracking-wide text-white">
//     How It Works
//   </h3>
//   <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
// </div>

//           {/* Steps Grid — Permanent Elegant Highlighting */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
//             {[
//               { step: "01", title: "Vision & Brief", desc: "Share your core concept, reference inspirations, dimensions, and color palettes." },
//               { step: "02", title: "Creative Blueprint", desc: "We structure the composition framework, final materials, pricing blueprints, and timelines." },
//               { step: "03", title: "The Execution", desc: "I craft your masterpiece layer by layer, sharing high-fidelity progress reviews upon request." },
//               { step: "04", title: "Secured Delivery", desc: "Your art arrives archival-wrapped, fully ready for display, alongside a Certificate of Authenticity." },
//             ].map((p, idx) => (
//               <div key={p.step} className="text-center relative flex flex-col items-center">

//                 {/* Connecting Line — Crisp Static Visibility */}
//                 {idx < 3 && (
//                   <div className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[1px] bg-gradient-to-r from-gold/30 via-gold/10 to-transparent pointer-events-none z-0" />
//                 )}

//                 {/* Permanent Golden Highlighted Step Numbers */}
//                 <div className="font-display text-5xl md:text-6xl font-extralight text-gold drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)] mb-4 tracking-tighter select-none relative z-10">
//                   {p.step}
//                 </div>

//                 {/* Title — Always Distinct */}
//                 <h4 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-white mb-3">
//                   {p.title}
//                 </h4>

//                 {/* Description Text — Highly Legible */}
//                 <p className="font-body text-parchment/50 text-[12px] leading-relaxed max-w-[210px] mx-auto font-light">
//                   {p.desc}
//                 </p>

//                 {/* Elegant Permanent Bottom Accent Bar */}
//                 <div className="w-5 h-[1px] bg-gold/40 mt-5" />
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }












































import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { services } from "../data/portfolioData";

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section - Updated to Purple-Cyan */}
        <div className="text-center mb-24">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4"
            style={{
              borderColor: "rgba(139, 92, 246, 0.2)",
              backgroundColor: "transparent"
            }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "rgb(139, 92, 246)" }}
            >
              ✦ Studio Offerings ✦
            </span>
          </div>

          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-white tracking-wide mb-5">
              Artistic 
            <span className="text-gradient-purple"> Services</span>

            </h2>
          </div>

          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <p className="font-body text-white/60 text-sm max-w-xl mx-auto tracking-wide leading-relaxed">
              Every creation is born from a blend of traditional discipline and modern minimalism.
              Accepting premium commissions for private collections and interior spaces.
            </p>
          </div>
        </div>

        {/* Services Grid - Updated to Purple-Cyan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((service, i) => {
            const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

            return (
              <div
                key={i}
                className="reveal group relative bg-white/5 border border-white/10 rounded-[1.5rem] p-9 min-h-[380px] flex flex-col justify-between transition-all duration-500 cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)] hover:border-purple-500/20 overflow-hidden"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {/* Custom Curved Notch Top-Right Corner - Updated to Purple-Cyan */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#050505] rounded-bl-[1.5rem] transition-colors duration-500 z-10">
       
                  <div className="w-full h-full  opacity-40 rounded-bl-[1.5rem]" />
                </div>

                {/* Soft Radial Core Glow on Card Hover - Updated to Purple-Cyan */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-20">
                  {/* Icon Box - Updated to Purple-Cyan */}
                  <div className="w-14 h-14 rounded-[1rem] bg-white/5 group-hover:bg-purple-500/10 flex items-center justify-center text-white/60 group-hover:text-purple-400 transition-all duration-500 mb-8 shadow-inner">
                    <IconComponent size={24} strokeWidth={1.2} />
                  </div>

                  {/* Title - Updated to Purple-Cyan */}
                  <h3 className="font-display text-xl font-normal tracking-wide text-white mb-4 transition-colors duration-500 group-hover:text-purple-400">
                    {service.title}
                  </h3>

                  {/* Description - Updated to Purple-Cyan */}
                  <p className="font-body text-white/60 text-xs leading-relaxed tracking-wide font-light transition-colors duration-500 group-hover:text-white/80">
                    {service.description}
                  </p>
                </div>

                {/* Highlight Line Trigger - Updated to Purple-Cyan */}
                <div className="relative z-20 pt-6">
                  <div className="w-0 group-hover:w-10 h-[2px] bg-purple-500/70 transition-all duration-500 ease-out rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section - Updated to Purple-Cyan */}
        <div
          className="reveal bg-white/5 backdrop-blur-sm text-white p-12 md:p-20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.02] shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Enhanced Subtle Ambient Lighting Background Elements - Updated to Purple-Cyan */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-purple-500/[0.02] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-80 h-40 bg-cyan-500/[0.01] blur-[80px] rounded-full pointer-events-none" />

          {/* Section Header Text - Updated to Purple-Cyan */}
          <div className="text-center mb-20 relative z-10">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4"
              style={{ 
                borderColor: "rgba(139, 92, 246, 0.2)",
                backgroundColor: "transparent"
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium" style={{ color: "rgb(139, 92, 246)" }}>
                ✦ The Commission Workflow ✦
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-light tracking-wide text-white">
              How It 
            <span className="text-gradient-purple"> Works</span>

            </h3>
            <div className="w-12 h-[1px] bg-purple-500/40 mx-auto mt-4" />
          </div>

          {/* Steps Grid - Updated to Purple-Cyan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {[
              { step: "01", title: "Vision & Brief", desc: "Share your core concept, reference inspirations, dimensions, and color palettes." },
              { step: "02", title: "Creative Blueprint", desc: "We structure the composition framework, final materials, pricing blueprints, and timelines." },
              { step: "03", title: "The Execution", desc: "I craft your masterpiece layer by layer, sharing high-fidelity progress reviews upon request." },
              { step: "04", title: "Secured Delivery", desc: "Your art arrives archival-wrapped, fully ready for display, alongside a Certificate of Authenticity." },
            ].map((p, idx) => (
              <div key={p.step} className="text-center relative flex flex-col items-center">

                {/* Connecting Line - Updated to Purple-Cyan */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[1px] bg-gradient-to-r from-purple-500/30 via-cyan-500/10 to-transparent pointer-events-none z-0" />
                )}

                {/* Step Numbers - Updated to Purple-Cyan */}
                <div className="font-display text-5xl md:text-6xl font-extralight text-purple-400 drop-shadow-[0_2px_15px_rgba(139,92,246,0.2)] mb-4 tracking-tighter select-none relative z-10">
                  {p.step}
                </div>

                {/* Title */}
                <h4 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-white mb-3">
                  {p.title}
                </h4>

                {/* Description Text */}
                <p className="font-body text-white/50 text-[12px] leading-relaxed max-w-[210px] mx-auto font-light">
                  {p.desc}
                </p>

                {/* Elegant Permanent Bottom Accent Bar - Updated to Purple-Cyan */}
                <div className="w-5 h-[1px] bg-purple-500/40 mt-5" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}