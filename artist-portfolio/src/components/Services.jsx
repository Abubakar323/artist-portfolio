// import { useEffect, useRef } from "react";
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
//               }, i * 120);
//             });
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="services" ref={sectionRef} className="py-28 bg-parchment overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             <p className="font-body text-gold tracking-[0.4em] text-xs uppercase mb-3">
//               ✦ What I Offer ✦
//             </p>
//           </div>
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             <h2 className="font-display text-5xl md:text-6xl font-light text-ink mb-4">
//               Services
//             </h2>
//           </div>
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//           >
//             <p className="font-body text-ink/50 text-sm max-w-lg mx-auto tracking-wide leading-relaxed">
//               Every artwork is handcrafted with care. I take custom commissions
//               for individuals, families, businesses, and special occasions.
//             </p>
//           </div>
//         </div>

//         {/* Services grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className="reveal group border border-ink/10 p-8 hover:border-gold hover:bg-gold/5 transition-all duration-400 cursor-default"
//               style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//             >
//               <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
//                 {service.icon}
//               </div>
//               <h3 className="font-display text-xl font-light text-ink mb-3 group-hover:text-gold-dark transition-colors">
//                 {service.title}
//               </h3>
//               <p className="font-body text-ink/55 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Process */}
//         <div
//           className="reveal bg-ink text-parchment p-10 md:p-14"
//           style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease" }}
//         >
//           <div className="text-center mb-10">
//             <h3 className="font-display text-3xl font-light mb-2">
//               How It Works
//             </h3>
//             <p className="font-body text-parchment/40 text-xs tracking-[0.2em] uppercase">
//               Simple 4-step process
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { step: "01", title: "Get in Touch", desc: "Share your idea, reference images, and requirements." },
//               { step: "02", title: "Discussion", desc: "We discuss details, size, style, timeline, and pricing." },
//               { step: "03", title: "Creation", desc: "I craft your artwork with full dedication and skill." },
//               { step: "04", title: "Delivery", desc: "You receive your artwork with a certificate of authenticity." },
//             ].map((p) => (
//               <div key={p.step} className="text-center">
//                 <div className="font-display text-5xl font-light text-gold/30 mb-3">{p.step}</div>
//                 <h4 className="font-body text-sm tracking-[0.15em] uppercase text-parchment mb-2">{p.title}</h4>
//                 <p className="font-body text-parchment/40 text-xs leading-relaxed">{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



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
//               }, i * 100); // Smoother sequential delay
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
//     <section id="services" ref={sectionRef} className="py-28 bg-[#faf8f5] overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <div
//             className="reveal"
//             style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//           >
//             <p className="font-body text-gold tracking-[0.4em] text-xs uppercase mb-3">
//               ✦ Studio Offerings ✦
//             </p>
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
//               Accepting premium commissions for private collections, interior spaces, and special corporate landmarks.
//             </p>
//           </div>
//         </div>

//         {/* Services grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
//           {services.map((service, i) => {
//             // Dynamically resolve the icon component from lucide-react
//             const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

//             return (
//               <div
//                 key={i}
//                 className="reveal group bg-white/50 border border-ink/5 p-8 rounded-sm hover:border-gold hover:bg-white hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 cursor-default flex flex-col justify-between"
//                 style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//               >
//                 <div>
//                   <div className="text-ink/70 group-hover:text-gold transition-colors duration-300 mb-6 inline-block">
//                     <IconComponent size={32} strokeWidth={1.2} />
//                   </div>
//                   <h3 className="font-display text-lg font-normal tracking-wide text-ink mb-3 group-hover:text-gold transition-colors">
//                     {service.title}
//                   </h3>
//                   <p className="font-body text-ink/60 text-xs leading-relaxed tracking-wide">
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Subtle bottom indicator */}
//                 <div className="w-0 group-hover:w-8 h-[1px] bg-gold mt-6 transition-all duration-300" />
//               </div>
//             );
//           })}
//         </div>

//         {/* Process Section */}
//         <div
//           className="reveal bg-ink rounded-sm text-parchment p-10 md:p-16 relative overflow-hidden border border-parchment/[0.03]"
//           style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
//         >
//           {/* Subtle ambient lighting / gold glow overlay */}
//           <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gold/[0.03] blur-[100px] rounded-full pointer-events-none" />
//           <div className="absolute inset-0 bg-gradient-to-tr from-gold/[0.02] via-transparent to-transparent pointer-events-none" />

//           {/* Header Text */}
//           <div className="text-center mb-16 relative z-10">
//             <p className="font-body text-gold/60 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2">
//               The Commission Workflow
//             </p>
//             <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide text-parchment">
//               How It Works
//             </h3>
//             <div className="w-8 h-[1px] bg-gold/40 mx-auto mt-3" />
//           </div>

//           {/* Steps Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
//             {[
//               { step: "01", title: "Vision & Brief", desc: "Share your core concept, reference inspirations, dimensions, and color palettes." },
//               { step: "02", title: "Creative Blueprint", desc: "We structure the composition framework, final materials, pricing blueprints, and timelines." },
//               { step: "03", title: "The Execution", desc: "I craft your masterpiece layer by layer, sharing high-fidelity progress reviews upon request." },
//               { step: "04", title: "Secured Delivery", desc: "Your art arrives archival-wrapped, fully ready for display, alongside a Certificate of Authenticity." },
//             ].map((p, idx) => (
//               <div key={p.step} className="text-center relative group flex flex-col items-center">

//                 {/* Connecting Line between steps (Visible on Desktop Screen) */}
//                 {idx < 3 && (
//                   <div className="hidden md:block absolute top-6 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[1px] bg-gradient-to-r from-gold/20 to-transparent pointer-events-none z-0" />
//                 )}

//                 {/* Step Number (Original Font Retained & Enhanced) */}
//                 <div className="font-display text-4xl md:text-5xl font-extralight text-gold/20 mb-3 tracking-tighter group-hover:text-gold transition-colors duration-500 select-none relative z-10">
//                   {p.step}
//                 </div>

//                 {/* Title */}
//                 <h4 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-parchment/90 mb-2 group-hover:text-gold/90 transition-colors duration-300">
//                   {p.title}
//                 </h4>

//                 {/* Description Text */}
//                 <p className="font-body text-parchment/40 text-[11px] leading-relaxed max-w-[210px] mx-auto transition-colors duration-300 group-hover:text-parchment/60">
//                   {p.desc}
//                 </p>

//                 {/* Subtle Minimal Bottom Line Indicator */}
//                 <div className="w-0 group-hover:w-4 h-[1px] bg-gold/50 mt-4 transition-all duration-500 ease-out" />

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
    <section id="services" ref={sectionRef} className="py-28 bg-[#f8f5f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-24">
          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <p className="font-body text-gold tracking-[0.4em] text-xs uppercase mb-3">
              ✦ Studio Offerings ✦
            </p>
          </div>
          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink tracking-wide mb-5">
              Artistic Services
            </h2>
          </div>
          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <p className="font-body text-ink/60 text-sm max-w-xl mx-auto tracking-wide leading-relaxed">
              Every creation is born from a blend of traditional discipline and modern minimalism.
              Accepting premium commissions for private collections and interior spaces.
            </p>
          </div>
        </div>

        {/* Services Grid (Exact Curved-Notch Tag UI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {services.map((service, i) => {
            const IconComponent = Icons[service.iconName] || Icons.HelpCircle;

            return (
              <div
                key={i}
                className="reveal group relative bg-white border border-transparent rounded-[1.5rem] p-9 min-h-[380px] flex flex-col justify-between transition-all duration-500 cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] hover:border-gold/20 overflow-hidden"
                style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                {/* Custom Curved Notch Top-Right Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#f8f5f0] rounded-bl-[1.5rem] transition-colors duration-500 z-10">
                  <div className="absolute top-0 right-12 w-4 h-4 bg-white group-hover:bg-[#fbf9f5] rounded-tr-[1rem] transition-colors duration-500" />
                  <div className="absolute top-12 right-0 w-4 h-4 bg-white group-hover:bg-[#fbf9f5] rounded-tr-[1rem] transition-colors duration-500" />
                  <div className="w-full h-full bg-[#f6f1e7] opacity-40 rounded-bl-[1.5rem]" />
                </div>

                {/* Soft Radial Core Glow on Card Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-20">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-[1rem] bg-[#f7f5f1] group-hover:bg-amber-50 flex items-center justify-center text-ink/60 group-hover:text-gold transition-all duration-500 mb-8 shadow-inner">
                    <IconComponent size={24} strokeWidth={1.2} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-normal tracking-wide text-ink mb-4 transition-colors duration-500 group-hover:text-gold">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-ink/60 text-xs leading-relaxed tracking-wide font-light transition-colors duration-500 group-hover:text-ink/80">
                    {service.description}
                  </p>
                </div>

                {/* Highlight Line Trigger */}
                <div className="relative z-20 pt-6">
                  <div className="w-0 group-hover:w-10 h-[2px] bg-gold/70 transition-all duration-500 ease-out rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section with Absolute Structural Premium Highlights & Drop Shadow */}
        <div
          className="reveal bg-[#0f0e0c] text-parchment p-12 md:p-20 relative overflow-hidden rounded-[1.5rem] border border-white/[0.02] shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {/* Enhanced Subtle Ambient Lighting Background Elements */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-gold/[0.02] blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-80 h-40 bg-gold/[0.01] blur-[80px] rounded-full pointer-events-none" />

          {/* Section Header Text */}
          <div className="text-center mb-20 relative z-10">
            <p className="font-body text-gold tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-3">
              The Commission Workflow
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-light tracking-wide text-white">
              How It Works
            </h3>
            <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
          </div>

          {/* Steps Grid — Permanent Elegant Highlighting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {[
              { step: "01", title: "Vision & Brief", desc: "Share your core concept, reference inspirations, dimensions, and color palettes." },
              { step: "02", title: "Creative Blueprint", desc: "We structure the composition framework, final materials, pricing blueprints, and timelines." },
              { step: "03", title: "The Execution", desc: "I craft your masterpiece layer by layer, sharing high-fidelity progress reviews upon request." },
              { step: "04", title: "Secured Delivery", desc: "Your art arrives archival-wrapped, fully ready for display, alongside a Certificate of Authenticity." },
            ].map((p, idx) => (
              <div key={p.step} className="text-center relative flex flex-col items-center">
                
                {/* Connecting Line — Crisp Static Visibility */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-[1px] bg-gradient-to-r from-gold/30 via-gold/10 to-transparent pointer-events-none z-0" />
                )}

                {/* Permanent Golden Highlighted Step Numbers */}
                <div className="font-display text-5xl md:text-6xl font-extralight text-gold drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)] mb-4 tracking-tighter select-none relative z-10">
                  {p.step}
                </div>

                {/* Title — Always Distinct */}
                <h4 className="font-body text-xs font-medium tracking-[0.15em] uppercase text-white mb-3">
                  {p.title}
                </h4>

                {/* Description Text — Highly Legible */}
                <p className="font-body text-parchment/50 text-[12px] leading-relaxed max-w-[210px] mx-auto font-light">
                  {p.desc}
                </p>

                {/* Elegant Permanent Bottom Accent Bar */}
                <div className="w-5 h-[1px] bg-gold/40 mt-5" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}