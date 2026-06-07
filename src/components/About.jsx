// import { useEffect, useRef, useState } from "react";
// import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, Sparkles, Quote, Calendar, MapPin, ExternalLink } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// // Premium Google Fonts loaded via index.html or public/index.html link tags is preferred.
// // Here we inject via a style tag safely inside the component.
// const premiumFonts = `
//   @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
//   .about-premium-scope { font-family: 'Montserrat', sans-serif; }
//   .about-premium-scope .font-premium-serif { font-family: 'Cinzel', serif; }
//   /* FIX: py-4-5 as a real utility since Tailwind arbitrary .py-4\\.5 fails in JSX style blocks */
//   .py-4-5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
//   .about-premium-scope .dynamic-fade-in {
//     animation: aboutScopeFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//   }
//   @keyframes aboutScopeFadeIn {
//     from { opacity: 0; transform: translateY(6px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
//   .scrollbar-none::-webkit-scrollbar { display: none; }
//   .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
// `;

// export default function About() {
//   const sectionRef = useRef(null);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [activeTab, setActiveTab] = useState("story");

//   useEffect(() => {
//     // Inject fonts once
//     if (!document.getElementById("about-premium-fonts")) {
//       const style = document.createElement("style");
//       style.id = "about-premium-fonts";
//       style.textContent = premiumFonts;
//       document.head.appendChild(style);
//     }
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.querySelectorAll(".reveal-premium").forEach((el, i) => {
//               setTimeout(() => {
//                 el.classList.add("translate-y-0", "opacity-100");
//                 el.classList.remove("translate-y-12", "opacity-0");
//               }, i * 80);
//             });
//           }
//         });
//       },
//       { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const stats = [
//     { value: "12+", label: "Years Practice", icon: <Award size={18} /> },
//     { value: "150+", label: "Exhibited Works", icon: <Palette size={18} /> },
//     { value: "25+", label: "Global Galleries", icon: <MapPin size={18} /> },
//   ];

//   const skills = [
//     { label: "Arabic & Modern Calligraphy", icon: <Feather size={18} />, desc: "Traditional scripts & contemporary abstract layouts", percentage: 95 },
//     { label: "Oil & Acrylic Mediums", icon: <Palette size={18} />, desc: "Fine-art realism with rich, layered textures", percentage: 90 },
//     { label: "Charcoal & Mixed Media", icon: <Brush size={18} />, desc: "High-contrast expressive structures", percentage: 88 },
//   ];

//   const awards = [
//     {
//       title: "National Excellence Award in Calligraphy",
//       organization: "National Heritage & Culture Division",
//       date: "Dec 2025",
//       image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
//       desc: "Honored for pioneering contemporary fusion in classical Arabic scripts."
//     },
//     {
//       title: "HEC NRPU Research Artwork Grant",
//       organization: "Higher Education Commission",
//       date: "March 2026",
//       image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
//       desc: "Awarded for exceptional visual contribution to the Cultural Preservation Initiative."
//     },
//     {
//       title: "International Artist Residency Winner",
//       organization: "Venice Biennale Foundation",
//       date: "Sept 2024",
//       image: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=600",
//       desc: "Selected among global visual artists for the prestigious 3-month Italian workshop."
//     }
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="about-premium-scope relative min-h-screen bg-[#faf9f6] text-stone-800 overflow-hidden"
//       style={{ WebkitUserSelect: "none" }}
//     >
//       {/* Structural Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f3ede2] rounded-full blur-[140px] opacity-70 translate-x-1/4 -translate-y-1/4" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ebe2d5] rounded-full blur-[120px] opacity-50 -translate-x-1/4 translate-y-1/4" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36 z-10">

//         {/* Header Block */}
//         <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-24 text-center border-b border-stone-200/60 pb-12">
//           <div className="inline-flex items-center justify-center gap-2 mb-3">
//             <Sparkles size={11} className="text-amber-600 animate-pulse" />
//             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-semibold text-amber-700">
//               The Profile
//             </span>
//             <Sparkles size={11} className="text-amber-600 animate-pulse" />
//           </div>

//           <h2 className="font-premium-serif text-3xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase"
//               style={{ color: "rgb(201, 147, 58)" }}>
//             Behind the{" "}
//             <span className="italic font-normal lowercase" style={{ color: "rgb(201, 147, 58)" }}>Canvas</span>
//           </h2>

//           {/* Elegant Accent Divider */}
//           <div className="flex justify-center gap-1.5 mt-5">
//             <div className="w-8 h-[1px] bg-amber-600/30" />
//             <div className="w-1.5 h-[1px] bg-amber-600/60" />
//             <div className="w-8 h-[1px] bg-amber-600/30" />
//           </div>
//         </div>

//         {/* Main Grid Split */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

//           {/* Left Column: Luxury Framed Portrait */}
//           <div className="lg:col-span-5 reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out sticky lg:top-24">
//             <div className="relative p-3.5 bg-white border border-stone-200/80 shadow-xl rounded-sm group overflow-hidden">
//               <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
//                 <img
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
//                   alt="Eman - Artist Portrait"
//                   className="w-full h-full object-cover object-top filter grayscale contrast-[1.03] hover:grayscale-0 transition-all duration-[1.2s] ease-in-out scale-100 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-stone-950/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
//               </div>

//               {/* Calligraphy Tag Badge — FIX: replaced broken .py-4\\.5 with inline style */}
//               <div
//                 className="absolute -bottom-4 -right-4 shadow-2xl tracking-widest text-center border border-amber-500/20"
//                 style={{
//                   backgroundColor: "#1c1a17",
//                   color: "#f5f0e8",
//                   padding: "1.125rem 1.75rem",
//                 }}
//               >
//                 <p className="text-2xl tracking-normal mb-1 font-normal" style={{ color: "rgb(201, 147, 58)" }}>ایمان</p>
//                 <div className="w-10 h-px bg-amber-500/30 mx-auto mb-1.5" />
//                 <p className="text-[8px] uppercase tracking-[0.45em] text-stone-400 font-medium">Signature</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Dynamic Curated Content Layout */}
//           <div className="lg:col-span-7 space-y-12">

//             {/* Tab Navigation Bar */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out flex border-b border-stone-200/80 overflow-x-auto scrollbar-none">
//               {["story", "expertise", "awards"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`pb-4 px-6 text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 relative whitespace-nowrap ${
//                     activeTab === tab ? "font-semibold" : "text-stone-400 hover:text-stone-600"
//                   }`}
//                   style={activeTab === tab ? { color: "rgb(201, 147, 58)" } : {}}
//                 >
//                   {tab === "story" ? "Biography" : tab === "expertise" ? "Core Skills" : "Honors & Awards"}
//                   {activeTab === tab && (
//                     <div className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500"
//                          style={{ backgroundColor: "rgb(201, 147, 58)" }} />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* TAB 1: BIOGRAPHY */}
//             {activeTab === "story" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-8 dynamic-fade-in">
//                 <div className="border-l-2 pl-6 py-2 bg-gradient-to-r from-amber-50/20 to-transparent"
//                      style={{ borderColor: "rgba(201, 147, 58, 0.4)" }}>
//                   <Quote size={20} className="mb-3" style={{ color: "rgba(201, 147, 58, 0.4)" }} />
//                   <p className="font-premium-serif text-base md:text-lg font-light italic leading-relaxed text-stone-700 tracking-wide">
//                     "Art is not what you see, but what you make others see through your unique perspective. It is the silent language of the soul made visible."
//                   </p>
//                 </div>

//                 <div className="space-y-5 text-stone-600 font-light tracking-wide leading-relaxed text-xs md:text-sm">
//                   <p>
//                     {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance. I specialize in merging the structural precision of fine calligraphy with the flowing, emotional depths of contemporary fine art canvases."}
//                   </p>
//                   <p>
//                     {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room, balance, and fine textures. Every master stroke is intentional, engineered to establish an enduring connection with the observer."}
//                   </p>
//                 </div>

//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/60">
//                   {stats.map((stat, idx) => (
//                     <div key={idx} className="group p-4 bg-white border border-stone-100 rounded-sm hover:border-amber-200/60 hover:shadow-md transition-all duration-300">
//                       <div className="mb-2.5 opacity-80 group-hover:scale-105 transition-transform duration-300"
//                            style={{ color: "rgb(201, 147, 58)" }}>{stat.icon}</div>
//                       <div className="font-premium-serif text-xl md:text-2xl font-light text-stone-900 tracking-wide">{stat.value}</div>
//                       <div className="text-[8px] uppercase tracking-[0.2em] text-stone-400 mt-1.5 font-medium">{stat.label}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* TAB 2: SKILLS */}
//             {activeTab === "expertise" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-6 dynamic-fade-in">
//                 <p className="text-stone-500 text-xs tracking-wide font-light mb-6">Technical precision and proficiency ratings across primary fine-art disciplines:</p>
//                 <div className="space-y-5">
//                   {skills.map((skill, idx) => (
//                     <div
//                       key={idx}
//                       className="p-5 bg-white border border-stone-100 hover:border-stone-200 rounded-sm transition-all shadow-sm"
//                       onMouseEnter={() => setHoveredSkill(idx)}
//                       onMouseLeave={() => setHoveredSkill(null)}
//                     >
//                       <div className="flex items-start justify-between mb-2">
//                         <div className="flex items-center gap-4">
//                           <div className="p-2 bg-amber-50 rounded-sm" style={{ color: "rgba(201, 147, 58, 0.8)" }}>{skill.icon}</div>
//                           <div>
//                             <h5 className="text-xs md:text-sm font-medium tracking-wide text-stone-800">{skill.label}</h5>
//                             <p className="text-[11px] text-stone-400 font-light mt-1 tracking-wide">{skill.desc}</p>
//                           </div>
//                         </div>
//                         <span className="text-[11px] font-medium text-stone-500 tracking-wider">{skill.percentage}%</span>
//                       </div>
//                       <div className="h-[2px] bg-stone-100 rounded-full overflow-hidden mt-4">
//                         <div
//                           className="h-full transition-all duration-[1.5s] ease-out rounded-full"
//                           style={{
//                             width: hoveredSkill === idx ? `${skill.percentage}%` : "20%",
//                             background: "linear-gradient(to right, rgb(201, 147, 58), rgb(180, 120, 30))"
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* TAB 3: AWARDS */}
//             {activeTab === "awards" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-6 dynamic-fade-in">
//                 <div className="grid grid-cols-1 gap-5">
//                   {awards.map((award, idx) => (
//                     <div
//                       key={idx}
//                       className="group flex flex-col md:flex-row items-stretch gap-5 bg-white border border-stone-200/80 p-4 shadow-sm hover:shadow-xl hover:border-amber-300/60 transition-all duration-500 rounded-sm"
//                     >
//                       {/* Award Image */}
//                       <div className="md:w-28 md:h-28 w-full h-40 shrink-0 overflow-hidden relative border border-stone-100 bg-stone-50">
//                         <img
//                           src={award.image}
//                           alt={award.title}
//                           className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
//                         />
//                         <div className="absolute top-2 left-2 bg-stone-900/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           <ExternalLink size={10} />
//                         </div>
//                       </div>

//                       {/* Award Info */}
//                       <div className="flex flex-col justify-between py-0.5 flex-1">
//                         <div>
//                           <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
//                             <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.15em]"
//                                   style={{ color: "rgb(201, 147, 58)" }}>
//                               <Award size={11} /> {award.organization}
//                             </span>
//                             <span className="inline-flex items-center gap-1 text-[10px] text-stone-400 font-medium tracking-wide">
//                               <Calendar size={10} /> {award.date}
//                             </span>
//                           </div>
//                           <h4 className="font-premium-serif text-sm md:text-base font-medium text-stone-900 group-hover:text-amber-800 transition-colors duration-300 tracking-wide">
//                             {award.title}
//                           </h4>
//                           <p className="text-[11px] md:text-xs text-stone-500 font-light mt-2 leading-relaxed tracking-wide">
//                             {award.desc}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* CTA Button */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-6">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative inline-flex items-center gap-4 bg-stone-900 text-amber-50 px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:pl-12 hover:pr-8 shadow-xl hover:bg-stone-950"
//               >
//                 <span className="relative z-10">Explore Collection</span>
//                 <ArrowRight size={13} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
//                             style={{ color: "rgb(201, 147, 58)" }} />
//                 <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
//                      style={{ background: "linear-gradient(to right, rgb(160, 100, 20), rgb(201, 147, 58))" }} />
//               </button>
//               <div className="w-12 h-px mt-8" style={{ backgroundColor: "rgba(201, 147, 58, 0.4)" }} />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useRef, useState } from "react";
import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, Sparkles, Quote, Calendar, MapPin, ExternalLink, Layers } from "lucide-react";
import { artistInfo } from "../data/portfolioData";

// Premium Google Fonts loaded via index.html or public/index.html link tags is preferred.
// Here we inject via a style tag safely inside the component.
const premiumFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
  .about-premium-scope { font-family: 'Montserrat', sans-serif; }
  .about-premium-scope .font-premium-serif { font-family: 'Cinzel', serif; }
  /* FIX: py-4-5 as a real utility since Tailwind arbitrary .py-4\\.5 fails in JSX style blocks */
  .py-4-5 { padding-top: 1.125rem; padding-bottom: 1.125rem; }
  .about-premium-scope .dynamic-fade-in {
    animation: aboutScopeFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  @keyframes aboutScopeFadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .scrollbar-none::-webkit-scrollbar { display: none; }
  .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
`;

export default function About() {
  const sectionRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    // Inject fonts once
    if (!document.getElementById("about-premium-fonts")) {
      const style = document.createElement("style");
      style.id = "about-premium-fonts";
      style.textContent = premiumFonts;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-premium").forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("translate-y-0", "opacity-100");
                el.classList.remove("translate-y-12", "opacity-0");
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "12+", label: "Years Practice", icon: <Award size={18} /> },
    { value: "150+", label: "Exhibited Works", icon: <Palette size={18} /> },
    { value: "25+", label: "Global Galleries", icon: <MapPin size={18} /> },
  ];

  const skills = [
    { label: "Arabic & Modern Calligraphy", icon: <Feather size={18} />, desc: "Traditional scripts & contemporary abstract layouts", percentage: 95 },
    { label: "Oil & Acrylic Mediums", icon: <Palette size={18} />, desc: "Fine-art realism with rich, layered textures", percentage: 90 },
    { label: "Charcoal & Mixed Media", icon: <Brush size={18} />, desc: "High-contrast expressive structures", percentage: 88 },
  ];

  const awards = [
    {
      title: "National Excellence Award in Calligraphy",
      organization: "National Heritage & Culture Division",
      date: "Dec 2025",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
      desc: "Honored for pioneering contemporary fusion in classical Arabic scripts."
    },
    {
      title: "HEC NRPU Research Artwork Grant",
      organization: "Higher Education Commission",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
      desc: "Awarded for exceptional visual contribution to the Cultural Preservation Initiative."
    },
    {
      title: "International Artist Residency Winner",
      organization: "Venice Biennale Foundation",
      date: "Sept 2024",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?q=80&w=600",
      desc: "Selected among global visual artists for the prestigious 3-month Italian workshop."
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-premium-scope relative min-h-screen bg-[#faf9f6] text-stone-800 overflow-hidden"

    >
      {/* Structural Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f3ede2] rounded-full blur-[140px] opacity-70 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ebe2d5] rounded-full blur-[120px] opacity-50 -translate-x-1/4 translate-y-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36 z-10">

        {/* Premium Updated Header Block */}
        <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-20 text-center">

          {/* Top Mini Badge Header */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4"
            style={{
              borderColor: "rgba(201, 147, 58, 0.2)", // 20% opacity ke sath premium gold border
              backgroundColor: "transparent"          // Background bilkul transparent (koi color nahi)
            }}
          >
            <span
              className="text-[10px] uppercase tracking-[0.3em] font-medium"
              style={{ color: "rgb(201, 147, 58)" }}
            >
              ✦ The Profile ✦
            </span>
          </div>

          {/* Main Title Style */}
          <h2 className="font-premium-serif text-2xl md:text-4xl font-light tracking-wide mt-2"
    style={{ color: "rgb(201, 147, 58)" }}>
  Behind the Canvas
</h2>

          {/* Elegant Underline Gradient Divider */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mx-auto mt-6" />
        </div>

        {/* Main Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Luxury Framed Portrait */}
          <div className="lg:col-span-5 reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out sticky lg:top-24">
            <div className="relative p-3.5 bg-white border border-stone-200/80 shadow-xl rounded-sm group overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
                  alt="Eman - Artist Portrait"
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.03] hover:grayscale-0 transition-all duration-[1.2s] ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
              </div>

              {/* Calligraphy Tag Badge */}
              <div
                className="absolute -bottom-4 -right-4 shadow-2xl tracking-widest text-center border border-amber-500/20"
                style={{
                  backgroundColor: "#1c1a17",
                  color: "#f5f0e8",
                  padding: "1.125rem 1.75rem",
                }}
              >
                <p className="text-2xl tracking-normal mb-1 font-normal" style={{ color: "rgb(201, 147, 58)" }}>ایمان</p>
                <div className="w-10 h-px bg-amber-500/30 mx-auto mb-1.5" />
                <p className="text-[8px] uppercase tracking-[0.45em] text-stone-400 font-medium">Signature</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Curated Content Layout */}
          <div className="lg:col-span-7 space-y-12">

            {/* Tab Navigation Bar */}
            <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out flex border-b border-stone-200/80 overflow-x-auto scrollbar-none">
              {["story", "expertise", "awards"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-6 text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 relative whitespace-nowrap ${activeTab === tab ? "font-semibold" : "text-stone-400 hover:text-stone-600"
                    }`}
                  style={activeTab === tab ? { color: "rgb(201, 147, 58)" } : {}}
                >
                  {tab === "story" ? "Biography" : tab === "expertise" ? "Core Skills" : "Honors & Awards"}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500"
                      style={{ backgroundColor: "rgb(201, 147, 58)" }} />
                  )}
                </button>
              ))}
            </div>

            {/* TAB 1: BIOGRAPHY */}
            {activeTab === "story" && (
              <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-8 dynamic-fade-in">
                <div className="border-l-2 pl-6 py-2 bg-gradient-to-r from-amber-50/20 to-transparent"
                  style={{ borderColor: "rgba(201, 147, 58, 0.4)" }}>
                  <Quote size={20} className="mb-3" style={{ color: "rgba(201, 147, 58, 0.4)" }} />
                  <p className="font-premium-serif text-base md:text-lg font-light italic leading-relaxed text-stone-700 tracking-wide">
                    "Art is not what you see, but what you make others see through your unique perspective. It is the silent language of the soul made visible."
                  </p>
                </div>

                <div className="space-y-5 text-stone-600 font-light tracking-wide leading-relaxed text-xs md:text-sm">
                  <p>
                    {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance. I specialize in merging the structural precision of fine calligraphy with the flowing, emotional depths of contemporary fine art canvases."}
                  </p>
                  <p>
                    {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room, balance, and fine textures. Every master stroke is intentional, engineered to establish an enduring connection with the observer."}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/60">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="group p-4 bg-white border border-stone-100 rounded-sm hover:border-amber-200/60 hover:shadow-md transition-all duration-300">
                      <div className="mb-2.5 opacity-80 group-hover:scale-105 transition-transform duration-300"
                        style={{ color: "rgb(201, 147, 58)" }}>{stat.icon}</div>
                      <div className="font-premium-serif text-xl md:text-2xl font-light text-stone-900 tracking-wide">{stat.value}</div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-stone-400 mt-1.5 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: SKILLS */}
            {activeTab === "expertise" && (
              <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-6 dynamic-fade-in">
                <p className="text-stone-500 text-xs tracking-wide font-light mb-6">Technical precision and proficiency ratings across primary fine-art disciplines:</p>
                <div className="space-y-5">
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white border border-stone-100 hover:border-stone-200 rounded-sm transition-all shadow-sm"
                      onMouseEnter={() => setHoveredSkill(idx)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-amber-50 rounded-sm" style={{ color: "rgba(201, 147, 58, 0.8)" }}>{skill.icon}</div>
                          <div>
                            <h5 className="text-xs md:text-sm font-medium tracking-wide text-stone-800">{skill.label}</h5>
                            <p className="text-[11px] text-stone-400 font-light mt-1 tracking-wide">{skill.desc}</p>
                          </div>
                        </div>
                        <span className="text-[11px] font-medium text-stone-500 tracking-wider">{skill.percentage}%</span>
                      </div>
                      <div className="h-[2px] bg-stone-100 rounded-full overflow-hidden mt-4">
                        <div
                          className="h-full transition-all duration-[1.5s] ease-out rounded-full"
                          style={{
                            width: hoveredSkill === idx ? `${skill.percentage}%` : "20%",
                            background: "linear-gradient(to right, rgb(201, 147, 58), rgb(180, 120, 30))"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: AWARDS */}
            {activeTab === "awards" && (
              <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-6 dynamic-fade-in">
                <div className="grid grid-cols-1 gap-5">
                  {awards.map((award, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col md:flex-row items-stretch gap-5 bg-white border border-stone-200/80 p-4 shadow-sm hover:shadow-xl hover:border-amber-300/60 transition-all duration-500 rounded-sm"
                    >
                      {/* Award Image */}
                      <div className="md:w-28 md:h-28 w-full h-40 shrink-0 overflow-hidden relative border border-stone-100 bg-stone-50">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute top-2 left-2 bg-stone-900/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink size={10} />
                        </div>
                      </div>

                      {/* Award Info */}
                      <div className="flex flex-col justify-between py-0.5 flex-1">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.15em]"
                              style={{ color: "rgb(201, 147, 58)" }}>
                              <Award size={11} /> {award.organization}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] text-stone-400 font-medium tracking-wide">
                              <Calendar size={10} /> {award.date}
                            </span>
                          </div>
                          <h4 className="font-premium-serif text-sm md:text-base font-medium text-stone-900 group-hover:text-amber-800 transition-colors duration-300 tracking-wide">
                            {award.title}
                          </h4>
                          <p className="text-[11px] md:text-xs text-stone-500 font-light mt-2 leading-relaxed tracking-wide">
                            {award.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Button */}
            <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-6">
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative inline-flex items-center gap-4 bg-stone-900 text-amber-50 px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:pl-12 hover:pr-8 shadow-xl hover:bg-stone-950"
              >
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight size={13} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                  style={{ color: "rgb(201, 147, 58)" }} />
                <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
                  style={{ background: "linear-gradient(to right, rgb(160, 100, 20), rgb(201, 147, 58))" }} />
              </button>
              <div className="w-12 h-px mt-8" style={{ backgroundColor: "rgba(201, 147, 58, 0.4)" }} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}