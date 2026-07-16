 



// import { useEffect, useRef, useState } from "react";
// import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, Sparkles, Quote, Calendar, MapPin, ExternalLink, Layers } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// const premiumFonts = `
//   @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
//   .about-premium-scope { font-family: 'Montserrat', sans-serif; }
//   .about-premium-scope .font-premium-serif { font-family: 'Cinzel', serif; }
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
//     { value: "12+", label: "Years Practice", icon: <Award size={16} /> },
//     { value: "150+", label: "Exhibited Works", icon: <Palette size={16} /> },
//     { value: "25+", label: "Global Galleries", icon: <MapPin size={16} /> },
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
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="about-premium-scope relative min-h-screen bg-[#faf9f6] text-stone-800 overflow-hidden"
//     >
//       {/* Structural Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f3ede2] rounded-full blur-[140px] opacity-70 translate-x-1/4 -translate-y-1/4" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ebe2d5] rounded-full blur-[120px] opacity-50 -translate-x-1/4 translate-y-1/4" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:50px_50px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32 z-10">

//         {/* Premium Header Block */}
//         <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-16 lg:mb-20 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-4 border-gold/20 bg-transparent">
//             <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold">
//               ✦ The Profile ✦
//             </span>
//           </div>
//           <h2 className="font-premium-serif text-2xl md:text-4xl font-light tracking-wide mt-2 text-gold">
//             Behind the Canvas
//           </h2>
//           <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mx-auto mt-6" />
//         </div>

//         {/* Main Grid Split */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* Left Column: Luxury Framed Portrait */}
//           <div className="lg:col-span-5 reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out sticky lg:top-24">
//             <div className="relative p-3 bg-white border border-stone-200/80 shadow-xl rounded-sm group overflow-hidden">
//               <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
//                 <img
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
//                   alt="Eman - Artist Portrait"
//                   className="w-full h-full object-cover object-top filter grayscale contrast-[1.03] hover:grayscale-0 transition-all duration-[1.2s] ease-in-out scale-100 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-stone-950/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
//               </div>

//               {/* Calligraphy Tag Badge */}
//               <div
//                 className="absolute -bottom-4 -right-4 shadow-2xl tracking-widest text-center border border-amber-500/20"
//                 style={{
//                   backgroundColor: "#1c1a17",
//                   color: "#f5f0e8",
//                   padding: "1rem 1.5rem",
//                 }}
//               >
//                 <p className="text-xl tracking-normal mb-0.5 font-normal text-gold">ایمان</p>
//                 <div className="w-8 h-px bg-amber-50/20 mx-auto mb-1" />
//                 <p className="text-[7px] uppercase tracking-[0.45em] text-stone-400 font-medium">Signature</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Content Layout */}
//           <div className="lg:col-span-7 space-y-10 lg:space-y-12">

//             {/* Tab Navigation Bar */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out flex border-b border-stone-200/80 overflow-x-auto scrollbar-none">
//               {["story", "expertise", "awards"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`pb-3 px-4 sm:px-6 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 relative whitespace-nowrap ${
//                     activeTab === tab ? "font-semibold text-gold" : "text-stone-400 hover:text-stone-600"
//                   }`}
//                 >
//                   {tab === "story" ? "Biography" : tab === "expertise" ? "Core Skills" : "Honors"}
//                   {activeTab === tab && (
//                     <div className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 bg-gold" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* TAB 1: BIOGRAPHY */}
//             {activeTab === "story" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-8 dynamic-fade-in">
//                 <div className="border-l-2 pl-4 sm:pl-6 py-1 bg-gradient-to-r from-amber-50/20 to-transparent border-gold/40">
//                   <Quote size={16} className="mb-2 text-gold/40" />
//                   <p className="font-premium-serif text-sm sm:text-base md:text-lg font-light italic leading-relaxed text-stone-700 tracking-wide">
//                     "Art is not what you see, but what you make others see through your unique perspective."
//                   </p>
//                 </div>

//                 <div className="space-y-4 text-stone-600 font-light tracking-wide leading-relaxed text-xs sm:text-sm">
//                   <p>
//                     {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance."}
//                   </p>
//                   <p>
//                     {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room and fine textures."}
//                   </p>
//                 </div>

//                 {/* Optimised Responsive Stats Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-stone-200/60">
//                   {stats.map((stat, idx) => (
//                     <div 
//                       key={idx} 
//                       className="group flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0 p-3 sm:p-4 bg-white border border-stone-100 rounded-sm hover:border-amber-200/60 hover:shadow-md transition-all duration-300"
//                     >
//                       <div className="p-2 sm:p-0 sm:mb-2 text-gold opacity-80 group-hover:scale-105 transition-transform duration-300 shrink-0">
//                         {stat.icon}
//                       </div>
//                       <div>
//                         <div className="font-premium-serif text-base sm:text-xl md:text-2xl font-light text-stone-900 tracking-wide leading-none">
//                           {stat.value}
//                         </div>
//                         <div className="text-[8px] uppercase tracking-[0.15em] text-stone-400 mt-1 font-medium">
//                           {stat.label}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* TAB 2: SKILLS */}
//             {activeTab === "expertise" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-4 dynamic-fade-in">
//                 {skills.map((skill, idx) => (
//                   <div
//                     key={idx}
//                     className="p-4 bg-white border border-stone-100 hover:border-stone-200 rounded-sm transition-all shadow-sm"
//                     onMouseEnter={() => setHoveredSkill(idx)}
//                     onMouseLeave={() => setHoveredSkill(null)}
//                   >
//                     <div className="flex items-start justify-between mb-1">
//                       <div className="flex items-center gap-3">
//                         <div className="p-2 bg-amber-50 rounded-sm text-gold/80">{skill.icon}</div>
//                         <div>
//                           <h5 className="text-xs sm:text-sm font-medium tracking-wide text-stone-800">{skill.label}</h5>
//                           <p className="text-[10px] text-stone-400 font-light mt-0.5 tracking-wide">{skill.desc}</p>
//                         </div>
//                       </div>
//                       <span className="text-[10px] font-medium text-stone-500">{skill.percentage}%</span>
//                     </div>
//                     <div className="h-[2px] bg-stone-100 rounded-full overflow-hidden mt-3">
//                       <div
//                         className="h-full transition-all duration-[1.5s] ease-out rounded-full"
//                         style={{
//                           width: hoveredSkill === idx ? `${skill.percentage}%` : "20%",
//                           background: "linear-gradient(to right, rgb(201, 147, 58), rgb(180, 120, 30))"
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* TAB 3: AWARDS */}
//             {activeTab === "awards" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-4 dynamic-fade-in">
//                 {awards.map((award, idx) => (
//                   <div
//                     key={idx}
//                     className="group flex flex-col sm:flex-row items-stretch gap-4 bg-white border border-stone-200/80 p-3 shadow-sm hover:shadow-lg transition-all duration-500 rounded-sm"
//                   >
//                     <div className="sm:w-20 sm:h-20 w-full h-32 shrink-0 overflow-hidden relative border border-stone-100 bg-stone-50">
//                       <img
//                         src={award.image}
//                         alt={award.title}
//                         className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
//                       />
//                     </div>
//                     <div className="flex flex-col justify-between py-0.5 flex-1">
//                       <div>
//                         <div className="flex items-center justify-between gap-2 mb-1.5">
//                           <span className="inline-flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-gold">
//                             <Award size={10} /> {award.organization}
//                           </span>
//                           <span className="inline-flex items-center gap-0.5 text-[9px] text-stone-400">
//                             <Calendar size={9} /> {award.date}
//                           </span>
//                         </div>
//                         <h4 className="font-premium-serif text-xs sm:text-sm font-medium text-stone-900 group-hover:text-amber-800 transition-colors duration-300">
//                           {award.title}
//                         </h4>
//                         <p className="text-[10px] text-stone-500 font-light mt-1 leading-relaxed">
//                           {award.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Responsive Optimized CTA Button */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-4">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative inline-flex items-center gap-3 bg-stone-900 text-amber-50 px-5 py-3 sm:px-10 sm:py-4 text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:pl-7 sm:hover:pl-12 hover:pr-5 sm:hover:pr-8 shadow-md hover:bg-stone-950 w-full sm:w-auto justify-center"
//               >
//                 <span className="relative z-10">Explore Collection</span>
//                 <ArrowRight size={12} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 text-gold" />
//                 <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out"
//                   style={{ background: "linear-gradient(to right, rgb(160, 100, 20), rgb(201, 147, 58))" }} />
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


















































































































// import { useEffect, useRef, useState } from "react";
// import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, Sparkles, Quote, Calendar, MapPin, ExternalLink, Layers, Star, User, Globe, Zap } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// const premiumFonts = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
  
//   .about-premium-scope { 
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
//   }
  
//   .about-premium-scope .font-serif { 
//     font-family: 'Playfair Display', Georgia, serif; 
//   }
  
//   .about-premium-scope .dynamic-fade-in {
//     animation: aboutScopeFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//   }
  
//   @keyframes aboutScopeFadeIn {
//     from { opacity: 0; transform: translateY(12px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
  
//   .scrollbar-none::-webkit-scrollbar { display: none; }
//   .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
  
//   .glow-gold {
//     box-shadow: 0 0 40px rgba(184, 134, 11, 0.08), 0 0 80px rgba(184, 134, 11, 0.04);
//   }
  
//   .text-gradient-gold {
//     background: linear-gradient(135deg, #b8860b, #d4a017, #b8860b);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }
  
//   .border-gradient-gold {
//     border-image: linear-gradient(135deg, #b8860b40, #d4a01760, #b8860b40) 1;
//   }
// `;

// export default function About() {
//   const sectionRef = useRef(null);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [activeTab, setActiveTab] = useState("story");
//   const [isHoveringPortrait, setIsHoveringPortrait] = useState(false);

//   useEffect(() => {
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
//               }, i * 100);
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
//     { value: "12+", label: "Years of Excellence", icon: <Clock size={16} />, color: "from-amber-500/20 to-amber-600/10" },
//     { value: "150+", label: "Artworks Created", icon: <Palette size={16} />, color: "from-rose-500/20 to-rose-600/10" },
//     { value: "25+", label: "Global Exhibitions", icon: <Globe size={16} />, color: "from-blue-500/20 to-blue-600/10" },
//   ];

//   const skills = [
//     { label: "Arabic Calligraphy", icon: <Feather size={18} />, desc: "Traditional & contemporary scripts with poetic flow", percentage: 95, color: "from-amber-600 to-amber-400" },
//     { label: "Oil & Acrylic Painting", icon: <Palette size={18} />, desc: "Rich textures & luminous realism on canvas", percentage: 92, color: "from-rose-600 to-rose-400" },
//     { label: "Mixed Media Arts", icon: <Layers size={18} />, desc: "Experimental fusion of materials & techniques", percentage: 88, color: "from-indigo-600 to-indigo-400" },
//   ];

//   const awards = [
//     {
//       title: "National Excellence Award in Calligraphy",
//       organization: "National Heritage & Culture Division",
//       date: "2025",
//       image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
//       desc: "Honored for pioneering contemporary fusion in classical Arabic scripts."
//     },
//     {
//       title: "HEC Research Artwork Grant",
//       organization: "Higher Education Commission",
//       date: "2026",
//       image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
//       desc: "Awarded for exceptional visual contribution to Cultural Preservation."
//     },
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="about-premium-scope relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden"
//     >
//       {/* Dynamic Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-amber-500/5 via-transparent to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-gradient-radial from-rose-500/5 via-transparent to-transparent rounded-full blur-3xl" />
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32 z-10">

//         {/* Premium Header with Glow */}
//         <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-20 text-center">
//           <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-amber-500/20 rounded-full mb-6 bg-amber-500/5 backdrop-blur-sm">
//             <Sparkles size={12} className="text-amber-400" />
//             <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-amber-400/80">
//               The Artist's Profile
//             </span>
//             <Sparkles size={12} className="text-amber-400" />
//           </div>
//           <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wide">
//             <span className="text-gradient-gold">Behind the</span>
//             <span className="block text-2xl md:text-3xl font-light text-white/60 mt-2 tracking-[0.3em]">
//               CANVAS
//             </span>
//           </h2>
//           <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mt-8" />
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* Left Column: Immersive Portrait */}
//           <div 
//             className="lg:col-span-5 reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out sticky lg:top-24"
//             onMouseEnter={() => setIsHoveringPortrait(true)}
//             onMouseLeave={() => setIsHoveringPortrait(false)}
//           >
//             <div className="relative group">
//               {/* Glow Ring */}
//               <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/20 via-rose-500/10 to-amber-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
//               {/* Main Frame */}
//               <div className="relative p-1.5 bg-gradient-to-br from-amber-500/30 via-stone-800/50 to-amber-500/30 rounded-2xl shadow-2xl">
//                 <div className="relative overflow-hidden rounded-xl bg-stone-900/80 backdrop-blur-sm">
//                   <img
//                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
//                     alt="Eman - Artist Portrait"
//                     className="w-full aspect-[3/4] object-cover object-top transition-all duration-[1.5s] ease-out"
//                     style={{
//                       filter: isHoveringPortrait ? "grayscale(0) contrast(1.05) brightness(1.05)" : "grayscale(0.6) contrast(1.1)",
//                       transform: isHoveringPortrait ? "scale(1.02)" : "scale(1)"
//                     }}
//                   />
                  
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                  
//                   {/* Signature Badge */}
//                   <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md border border-amber-500/20 px-5 py-3 rounded-lg shadow-2xl">
//                     <p className="font-serif text-2xl tracking-wider text-amber-400">ایمان</p>
//                     <div className="w-8 h-px bg-amber-500/30 mx-auto my-1" />
//                     <p className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-medium">Signature</p>
//                   </div>

//                   {/* Decorative Corner Elements */}
//                   <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500/30" />
//                   <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500/30" />
//                 </div>
//               </div>

//               {/* Floating Stats Ring */}
//               <div className="absolute -right-8 -bottom-8 hidden xl:block">
//                 <div className="relative w-24 h-24 rounded-full border border-amber-500/20 bg-black/40 backdrop-blur-xl flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="font-serif text-2xl text-amber-400">12</div>
//                     <div className="text-[6px] uppercase tracking-[0.2em] text-white/40">Years</div>
//                   </div>
//                   <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-pulse" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Content */}
//           <div className="lg:col-span-7 space-y-10">

//             {/* Modern Tab Navigation */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out flex border-b border-white/10 overflow-x-auto scrollbar-none gap-1">
//               {[
//                 { id: "story", label: "Biography", icon: <User size={14} /> },
//                 { id: "expertise", label: "Expertise", icon: <Brush size={14} /> },
//                 { id: "awards", label: "Honors", icon: <Award size={14} /> }
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 pb-3 px-5 text-xs font-medium tracking-wider transition-all duration-500 relative whitespace-nowrap ${
//                     activeTab === tab.id 
//                       ? "text-amber-400" 
//                       : "text-white/40 hover:text-white/70"
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                   {activeTab === tab.id && (
//                     <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/30" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* TAB 1: BIOGRAPHY */}
//             {activeTab === "story" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-8 dynamic-fade-in">
//                 {/* Quote Block */}
//                 <div className="relative pl-6 py-4 border-l-2 border-amber-500/40 bg-gradient-to-r from-amber-500/5 to-transparent">
//                   <Quote size={18} className="absolute -left-2.5 -top-1 text-amber-500/30" />
//                   <p className="font-serif text-sm sm:text-base md:text-lg font-light italic leading-relaxed text-white/80 tracking-wide">
//                     "Art is not what you see, but what you make others see through your unique perspective."
//                   </p>
//                 </div>

//                 {/* Bio Text */}
//                 <div className="space-y-4 text-white/60 font-light leading-relaxed text-sm">
//                   <p>
//                     {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance."}
//                   </p>
//                   <p>
//                     {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room and fine textures."}
//                   </p>
//                 </div>

//                 {/* Stats Grid - Modern Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/5">
//                   {stats.map((stat, idx) => (
//                     <div 
//                       key={idx} 
//                       className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
//                     >
//                       <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                       <div className="relative flex items-center gap-4">
//                         <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform duration-300">
//                           {stat.icon}
//                         </div>
//                         <div>
//                           <div className="font-serif text-xl font-light text-white tracking-wide">
//                             {stat.value}
//                           </div>
//                           <div className="text-[9px] uppercase tracking-[0.15em] text-white/30 font-medium">
//                             {stat.label}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* TAB 2: SKILLS */}
//             {activeTab === "expertise" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-4 dynamic-fade-in">
//                 {skills.map((skill, idx) => (
//                   <div
//                     key={idx}
//                     className="group p-5 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-amber-500/20 transition-all duration-500 hover:bg-white/10"
//                     onMouseEnter={() => setHoveredSkill(idx)}
//                     onMouseLeave={() => setHoveredSkill(null)}
//                   >
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center gap-4">
//                         <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform duration-300">
//                           {skill.icon}
//                         </div>
//                         <div>
//                           <h5 className="text-sm font-medium text-white tracking-wide">{skill.label}</h5>
//                           <p className="text-xs text-white/40 font-light">{skill.desc}</p>
//                         </div>
//                       </div>
//                       <span className="text-sm font-medium text-amber-400/60 group-hover:text-amber-400 transition-colors">
//                         {skill.percentage}%
//                       </span>
//                     </div>
//                     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
//                       <div
//                         className={`h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r ${skill.color}`}
//                         style={{
//                           width: hoveredSkill === idx ? `${skill.percentage}%` : "10%",
//                           boxShadow: hoveredSkill === idx ? "0 0 20px rgba(184, 134, 11, 0.3)" : "none"
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* TAB 3: AWARDS */}
//             {activeTab === "awards" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-4 dynamic-fade-in">
//                 {awards.map((award, idx) => (
//                   <div
//                     key={idx}
//                     className="group flex flex-col sm:flex-row gap-5 p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-amber-500/20 hover:bg-white/10 transition-all duration-500"
//                   >
//                     <div className="sm:w-24 sm:h-24 w-full h-40 rounded-lg overflow-hidden relative bg-stone-800/50 flex-shrink-0">
//                       <img
//                         src={award.image}
//                         alt={award.title}
//                         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                     </div>
//                     <div className="flex flex-col justify-between flex-1 py-1">
//                       <div>
//                         <div className="flex flex-wrap items-center gap-3 mb-2">
//                           <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-amber-400">
//                             <Award size={10} /> {award.organization}
//                           </span>
//                           <span className="inline-flex items-center gap-1 text-[9px] text-white/30">
//                             <Calendar size={9} /> {award.date}
//                           </span>
//                         </div>
//                         <h4 className="font-serif text-sm font-medium text-white group-hover:text-amber-400 transition-colors duration-300">
//                           {award.title}
//                         </h4>
//                         <p className="text-xs text-white/40 font-light mt-1.5 leading-relaxed">
//                           {award.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Premium CTA */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-4">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-4 px-8 py-4 bg-gradient-to-r from-amber-600/20 to-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 text-xs tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10"
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   Explore Collection
//                   <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//                 <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out bg-gradient-to-r from-amber-600/30 to-amber-500/20" />
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











// import { useEffect, useRef, useState } from "react";
// import { Palette, Feather, Brush, ArrowRight, Award, Clock, Heart, Sparkles, Quote, Calendar, MapPin, ExternalLink, Layers, Star, User, Globe, Zap } from "lucide-react";
// import { artistInfo } from "../data/portfolioData";

// const premiumFonts = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
  
//   .about-premium-scope { 
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
//   }
  
//   .about-premium-scope .font-serif { 
//     font-family: 'Playfair Display', Georgia, serif; 
//   }
  
//   .about-premium-scope .dynamic-fade-in {
//     animation: aboutScopeFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//   }
  
//   @keyframes aboutScopeFadeIn {
//     from { opacity: 0; transform: translateY(12px); }
//     to { opacity: 1; transform: translateY(0); }
//   }
  
//   .scrollbar-none::-webkit-scrollbar { display: none; }
//   .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
  
//   .glow-purple {
//     box-shadow: 0 0 40px rgba(139, 92, 246, 0.08), 0 0 80px rgba(139, 92, 246, 0.04);
//   }
  
//   .text-gradient-purple {
//     background: linear-gradient(135deg, #8B5CF6, #06B6D4, #8B5CF6);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }
  
//   .border-gradient-purple {
//     border-image: linear-gradient(135deg, #8B5CF640, #06B6D460, #8B5CF640) 1;
//   }
// `;

// export default function About() {
//   const sectionRef = useRef(null);
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [activeTab, setActiveTab] = useState("story");
//   const [isHoveringPortrait, setIsHoveringPortrait] = useState(false);

//   useEffect(() => {
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
//               }, i * 100);
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
//     { value: "12+", label: "Years of Excellence", icon: <Clock size={16} />, color: "from-purple-500/20 to-cyan-500/10" },
//     { value: "150+", label: "Artworks Created", icon: <Palette size={16} />, color: "from-pink-500/20 to-purple-500/10" },
//     { value: "25+", label: "Global Exhibitions", icon: <Globe size={16} />, color: "from-cyan-500/20 to-blue-500/10" },
//   ];

//   const skills = [
//     { label: "Arabic Calligraphy", icon: <Feather size={18} />, desc: "Traditional & contemporary scripts with poetic flow", percentage: 95, color: "from-purple-600 to-cyan-400" },
//     { label: "Oil & Acrylic Painting", icon: <Palette size={18} />, desc: "Rich textures & luminous realism on canvas", percentage: 92, color: "from-pink-600 to-purple-400" },
//     { label: "Mixed Media Arts", icon: <Layers size={18} />, desc: "Experimental fusion of materials & techniques", percentage: 88, color: "from-cyan-600 to-blue-400" },
//   ];

//   const awards = [
//     {
//       title: "National Excellence Award in Calligraphy",
//       organization: "National Heritage & Culture Division",
//       date: "2025",
//       image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
//       desc: "Honored for pioneering contemporary fusion in classical Arabic scripts."
//     },
//     {
//       title: "HEC Research Artwork Grant",
//       organization: "Higher Education Commission",
//       date: "2026",
//       image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
//       desc: "Awarded for exceptional visual contribution to Cultural Preservation."
//     },
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="about-premium-scope relative min-h-screen bg-[#050505] text-white overflow-hidden"
//     >
//       {/* Dynamic Ambient Background - Updated to Purple-Cyan */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl" />
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32 z-10">

//         {/* Premium Header with Glow - Updated to Purple-Cyan */}
//         <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-20 text-center">
//           <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-purple-500/20 rounded-full mb-6 bg-purple-500/5 backdrop-blur-sm">
//             <Sparkles size={12} className="text-purple-400" />
//             <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-purple-400/80">
//               The Artist's Profile
//             </span>
//             <Sparkles size={12} className="text-purple-400" />
//           </div>
//           <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide">
//   <span className="text-gradient-purple">Behind the CANVAS</span>
// </h2>
//           <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mx-auto mt-8" />
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* Left Column: Immersive Portrait - Updated to Purple-Cyan */}
//           <div 
//             className="lg:col-span-5 reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out sticky lg:top-24"
//             onMouseEnter={() => setIsHoveringPortrait(true)}
//             onMouseLeave={() => setIsHoveringPortrait(false)}
//           >
//             <div className="relative group">
//               {/* Glow Ring - Updated to Purple-Cyan */}
//               <div className="absolute -inset-3 bg-gradient-to-tr from-purple-500/20 via-cyan-500/10 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
//               {/* Main Frame - Updated to Purple-Cyan */}
//               <div className="relative p-1.5 bg-gradient-to-br from-purple-500/30 via-stone-800/50 to-cyan-500/30 rounded-2xl shadow-2xl">
//                 <div className="relative overflow-hidden rounded-xl bg-stone-900/80 backdrop-blur-sm">
//                   <img
//                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
//                     alt="Eman - Artist Portrait"
//                     className="w-full aspect-[3/4] object-cover object-top transition-all duration-[1.5s] ease-out"
//                     style={{
//                       filter: isHoveringPortrait ? "grayscale(0) contrast(1.05) brightness(1.05)" : "grayscale(0.6) contrast(1.1)",
//                       transform: isHoveringPortrait ? "scale(1.02)" : "scale(1)"
//                     }}
//                   />
                  
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                  
//                   {/* Signature Badge - Updated to Purple-Cyan */}
//                   <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md border border-purple-500/20 px-5 py-3 rounded-lg shadow-2xl">
//                     <p className="font-serif text-2xl tracking-wider text-purple-400">ایمان</p>
//                     </div>

//                   {/* Decorative Corner Elements - Updated to Purple-Cyan */}
//                   <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-purple-500/30" />
//                   <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/30" />
//                 </div>
//               </div>

//               {/* Floating Stats Ring - Updated to Purple-Cyan */}
              
//             </div>
//           </div>

//           {/* Right Column: Content */}
//           <div className="lg:col-span-7 space-y-10">

//             {/* Modern Tab Navigation - Updated to Purple-Cyan */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out flex border-b border-white/10 overflow-x-auto scrollbar-none gap-1">
//               {[
//                 { id: "story", label: "Biography", icon: <User size={14} /> },
//                 { id: "expertise", label: "Expertise", icon: <Brush size={14} /> },
//                 { id: "awards", label: "Honors", icon: <Award size={14} /> }
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 pb-3 px-5 text-xs font-medium tracking-wider transition-all duration-500 relative whitespace-nowrap ${
//                     activeTab === tab.id 
//                       ? "text-purple-400" 
//                       : "text-white/40 hover:text-white/70"
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                   {activeTab === tab.id && (
//                     <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/30" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* TAB 1: BIOGRAPHY - Updated to Purple-Cyan */}
//             {activeTab === "story" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-8 dynamic-fade-in">
//                 {/* Quote Block - Updated to Purple-Cyan */}
//                 <div className="relative pl-6 py-4 border-l-2 border-purple-500/40 bg-gradient-to-r from-purple-500/5 to-transparent">
//                   <Quote size={18} className="absolute -left-2.5 -top-1 text-purple-500/30" />
//                   <p className="font-serif text-sm sm:text-base md:text-lg font-light italic leading-relaxed text-white/80 tracking-wide">
//                     "Art is not what you see, but what you make others see through your unique perspective."
//                   </p>
//                 </div>

//                 {/* Bio Text */}
//                 <div className="space-y-4 text-white/60 font-light leading-relaxed text-sm">
//                   <p>
//                     {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance."}
//                   </p>
//                   <p>
//                     {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room and fine textures."}
//                   </p>
//                 </div>

//                 {/* Stats Grid - Updated to Purple-Cyan */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/5">
//                   {stats.map((stat, idx) => (
//                     <div 
//                       key={idx} 
//                       className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
//                     >
//                       <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
//                       <div className="relative flex items-center gap-4">
//                         <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
//                           {stat.icon}
//                         </div>
//                         <div>
//                           <div className="font-serif text-xl font-light text-white tracking-wide">
//                             {stat.value}
//                           </div>
//                           <div className="text-[9px] uppercase tracking-[0.15em] text-white/30 font-medium">
//                             {stat.label}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* TAB 2: SKILLS - Updated to Purple-Cyan */}
//             {activeTab === "expertise" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-4 dynamic-fade-in">
//                 {skills.map((skill, idx) => (
//                   <div
//                     key={idx}
//                     className="group p-5 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-purple-500/20 transition-all duration-500 hover:bg-white/10"
//                     onMouseEnter={() => setHoveredSkill(idx)}
//                     onMouseLeave={() => setHoveredSkill(null)}
//                   >
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center gap-4">
//                         <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
//                           {skill.icon}
//                         </div>
//                         <div>
//                           <h5 className="text-sm font-medium text-white tracking-wide">{skill.label}</h5>
//                           <p className="text-xs text-white/40 font-light">{skill.desc}</p>
//                         </div>
//                       </div>
//                       <span className="text-sm font-medium text-purple-400/60 group-hover:text-purple-400 transition-colors">
//                         {skill.percentage}%
//                       </span>
//                     </div>
//                     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
//                       <div
//                         className={`h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r ${skill.color}`}
//                         style={{
//                           width: hoveredSkill === idx ? `${skill.percentage}%` : "10%",
//                           boxShadow: hoveredSkill === idx ? "0 0 20px rgba(139, 92, 246, 0.3)" : "none"
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* TAB 3: AWARDS - Updated to Purple-Cyan */}
//             {activeTab === "awards" && (
//               <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-700 space-y-4 dynamic-fade-in">
//                 {awards.map((award, idx) => (
//                   <div
//                     key={idx}
//                     className="group flex flex-col sm:flex-row gap-5 p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-purple-500/20 hover:bg-white/10 transition-all duration-500"
//                   >
//                     <div className="sm:w-24 sm:h-24 w-full h-40 rounded-lg overflow-hidden relative bg-stone-800/50 flex-shrink-0">
//                       <img
//                         src={award.image}
//                         alt={award.title}
//                         className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                     </div>
//                     <div className="flex flex-col justify-between flex-1 py-1">
//                       <div>
//                         <div className="flex flex-wrap items-center gap-3 mb-2">
//                           <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-purple-400">
//                             <Award size={10} /> {award.organization}
//                           </span>
//                           <span className="inline-flex items-center gap-1 text-[9px] text-white/30">
//                             <Calendar size={9} /> {award.date}
//                           </span>
//                         </div>
//                         <h4 className="font-serif text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
//                           {award.title}
//                         </h4>
//                         <p className="text-xs text-white/40 font-light mt-1.5 leading-relaxed">
//                           {award.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Premium CTA - Updated to Purple-Cyan */}
//             <div className="reveal-premium opacity-0 translate-y-12 transition-all duration-1000 ease-out pt-4">
//               <button
//                 onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
//                 className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-500/10 border border-purple-500/30 rounded-xl text-purple-400 text-xs tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   Explore Collection
//                   <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//                 <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out bg-gradient-to-r from-purple-600/30 to-cyan-500/20" />
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Palette, Feather, Brush, ArrowRight, Award, Clock, 
  Sparkles, Quote, Calendar, Layers, User, Globe 
} from "lucide-react";
import { artistInfo } from "../data/portfolioData";

const premiumFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  
  .about-premium-scope { 
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif; 
  }
  
  .about-premium-scope .font-serif { 
    font-family: 'Playfair Display', Georgia, serif; 
  }
  
  .scrollbar-none::-webkit-scrollbar { display: none; }
  .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
  
  .glow-purple {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.08), 0 0 80px rgba(139, 92, 246, 0.04);
  }
  
  .text-gradient-purple {
    background: linear-gradient(135deg, #8B5CF6, #06B6D4, #8B5CF6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// Professional Framer Motion Configuration Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 45, damping: 18, delay: 0.1 }
  }
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("story");
  const [isHoveringPortrait, setIsHoveringPortrait] = useState(false);

  useEffect(() => {
    if (!document.getElementById("about-premium-fonts")) {
      const style = document.createElement("style");
      style.id = "about-premium-fonts";
      style.textContent = premiumFonts;
      document.head.appendChild(style);
    }
  }, []);

  const stats = [
    { value: "12+", label: "Years of Excellence", icon: <Clock size={16} />, color: "from-purple-500/20 to-cyan-500/10" },
    { value: "150+", label: "Artworks Created", icon: <Palette size={16} />, color: "from-pink-500/20 to-purple-500/10" },
    { value: "25+", label: "Global Exhibitions", icon: <Globe size={16} />, color: "from-cyan-500/20 to-blue-500/10" },
  ];

  const skills = [
    { label: "Arabic Calligraphy", icon: <Feather size={18} />, desc: "Traditional & contemporary scripts with poetic flow", percentage: 95, color: "from-purple-600 to-cyan-400" },
    { label: "Oil & Acrylic Painting", icon: <Palette size={18} />, desc: "Rich textures & luminous realism on canvas", percentage: 92, color: "from-pink-600 to-purple-400" },
    { label: "Mixed Media Arts", icon: <Layers size={18} />, desc: "Experimental fusion of materials & techniques", percentage: 88, color: "from-cyan-600 to-blue-400" },
  ];

  const awards = [
    {
      title: "National Excellence Award in Calligraphy",
      organization: "National Heritage & Culture Division",
      date: "2025",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600",
      desc: "Honored for pioneering contemporary fusion in classical Arabic scripts."
    },
    {
      title: "HEC Research Artwork Grant",
      organization: "Higher Education Commission",
      date: "2026",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600",
      desc: "Awarded for exceptional visual contribution to Cultural Preservation."
    },
  ];

  return (
    <section
      id="about"
      className="about-premium-scope relative min-h-screen bg-[#121214] text-white overflow-hidden"
    >
      {/* Ambient Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-gradient-radial from-cyan-500/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-[length:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20 lg:py-28 xl:py-32 z-10">

        {/* Header - Responsive with adjusted sizing */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 md:mb-16 lg:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1 md:py-1.5 border border-purple-500/20 rounded-full mb-4 md:mb-6 bg-purple-500/5 backdrop-blur-sm">
            <Sparkles size={10} className="text-purple-400" />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium text-purple-400/80">
              The Artist's Profile
            </span>
            <Sparkles size={10} className="text-purple-400" />
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight">
            <span>Behind the</span>
            <br className="block sm:hidden" />
            <span className="text-gradient-purple"> CANVAS</span>
          </h2>
          
          <div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent mx-auto mt-4 md:mt-6 lg:mt-8" />
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Portrait Animates Separately */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageReveal}
            className="lg:col-span-5 sticky lg:top-24"
            onMouseEnter={() => setIsHoveringPortrait(true)}
            onMouseLeave={() => setIsHoveringPortrait(false)}
          >
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-tr from-purple-500/20 via-cyan-500/10 to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative p-1.5 bg-gradient-to-br from-purple-500/30 via-stone-800/50 to-cyan-500/30 rounded-2xl shadow-2xl">
                <div className="relative overflow-hidden rounded-xl bg-stone-900/80 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800"
                    alt="Eman - Artist Portrait"
                    className="w-full aspect-[3/4] object-cover object-top transition-all duration-[1.5s] ease-out"
                    style={{
                      filter: isHoveringPortrait ? "grayscale(0) contrast(1.05) brightness(1.05)" : "grayscale(0.6) contrast(1.1)",
                      transform: isHoveringPortrait ? "scale(1.02)" : "scale(1)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md border border-purple-500/20 px-5 py-3 rounded-lg shadow-2xl">
                    <p className="font-serif text-2xl tracking-wider text-purple-400">ایمان</p>
                  </div>

                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-purple-500/30" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/30" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Content Area */}
          <div className="lg:col-span-7 space-y-10">

            {/* Navigation Tabs */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex border-b border-white/10 overflow-x-auto scrollbar-none gap-1"
            >
              {[
                { id: "story", label: "Biography", icon: <User size={14} /> },
                { id: "expertise", label: "Expertise", icon: <Brush size={14} /> },
                { id: "awards", label: "Honors", icon: <Award size={14} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-3 px-5 text-xs font-medium tracking-wider transition-all duration-500 relative whitespace-nowrap ${
                    activeTab === tab.id 
                      ? "text-purple-400" 
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/30" 
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Tabs Render with Dynamic Enter Motion */}
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={containerStagger}
              className="space-y-8"
            >
              {/* TAB 1: BIOGRAPHY */}
              {activeTab === "story" && (
                <>
                  <motion.div 
                    variants={fadeInUp}
                    className="relative pl-6 py-4 border-l-2 border-purple-500/40 bg-gradient-to-r from-purple-500/5 to-transparent"
                  >
                    <Quote size={18} className="absolute -left-2.5 -top-1 text-purple-500/30" />
                    <p className="font-serif text-sm sm:text-base md:text-lg font-light italic leading-relaxed text-white/80 tracking-wide">
                      "Art is not what you see, but what you make others see through your unique perspective."
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="space-y-4 text-white/60 font-light leading-relaxed text-sm">
                    <p>
                      {artistInfo.bio || "With over a decade of dedicated commitment to fine arts, my work serves as an exploration of structural beauty and timeless elegance."}
                    </p>
                    <p>
                      {artistInfo.bio2 || "Deeply rooted in natural aesthetics and minimalist layout philosophy, my designs prioritize breathing room and fine textures."}
                    </p>
                  </motion.div>

                  <motion.div 
                    variants={containerStagger}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/5"
                  >
                    {stats.map((stat, idx) => (
                      <motion.div 
                        key={idx} 
                        variants={fadeInUp}
                        className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-xl font-light text-white tracking-wide">
                              {stat.value}
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.15em] text-white/30 font-medium">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </>
              )}

              {/* TAB 2: SKILLS (EXPERTISE) */}
              {activeTab === "expertise" && (
                <motion.div variants={containerStagger} className="space-y-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="group p-5 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-purple-500/20 transition-all duration-500 hover:bg-white/10"
                      onMouseEnter={() => setHoveredSkill(idx)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-white tracking-wide">{skill.label}</h5>
                            <p className="text-xs text-white/40 font-light">{skill.desc}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-purple-400/60 group-hover:text-purple-400 transition-colors">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: "10%" }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          style={{
                            boxShadow: hoveredSkill === idx ? "0 0 20px rgba(139, 92, 246, 0.4)" : "none"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* TAB 3: AWARDS */}
              {activeTab === "awards" && (
                <motion.div variants={containerStagger} className="space-y-4">
                  {awards.map((award, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="group flex flex-col sm:flex-row gap-5 p-4 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl hover:border-purple-500/20 hover:bg-white/10 transition-all duration-500"
                    >
                      <div className="sm:w-24 sm:h-24 w-full h-40 rounded-lg overflow-hidden relative bg-stone-800/50 flex-shrink-0">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="flex flex-col justify-between flex-1 py-1">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-purple-400">
                              <Award size={10} /> {award.organization}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[9px] text-white/30">
                              <Calendar size={9} /> {award.date}
                            </span>
                          </div>
                          <h4 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-300">
                            {award.title}
                          </h4>
                          <p className="text-xs text-white/40 font-light mt-1.5 leading-relaxed">
                            {award.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="pt-4"
            >
              <button
                onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-500/10 border border-purple-500/30 rounded-xl text-purple-400 text-xs tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Collection
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out bg-gradient-to-r from-purple-600/30 to-cyan-500/20" />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}